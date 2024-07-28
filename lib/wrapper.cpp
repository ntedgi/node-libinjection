#include <node.h>
#include <v8.h>
#include "libinjection_sqli.h"  // Make sure this file is correctly included
#include "libinjection.h"  // If LIBINJECTION_VERSION is defined here

using namespace v8;

void CheckSQLInjection(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(Exception::TypeError(
            String::NewFromUtf8(isolate, "Expected a string").ToLocalChecked()));
        return;
    }

    String::Utf8Value input(isolate, args[0]);
    size_t slen = input.length();

    struct libinjection_sqli_state state;
    int issqli;

    libinjection_sqli_init(&state, *input, slen, FLAG_NONE);
    issqli = libinjection_is_sqli(&state);

    if (issqli) {
        Local<Object> result = Object::New(isolate);
        result->Set(isolate->GetCurrentContext(), String::NewFromUtf8(isolate, "is_sqli").ToLocalChecked(), Boolean::New(isolate, issqli)).FromJust();
        result->Set(isolate->GetCurrentContext(), String::NewFromUtf8(isolate, "fingerprint").ToLocalChecked(), String::NewFromUtf8(isolate, state.fingerprint).ToLocalChecked()).FromJust();
        args.GetReturnValue().Set(result);
    } else {
        args.GetReturnValue().Set(Boolean::New(isolate, issqli));
    }
}

void HasSQLInjection(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();

    if (args.Length() < 1 || !args[0]->IsString()) {
        isolate->ThrowException(Exception::TypeError(
            String::NewFromUtf8(isolate, "Expected a string").ToLocalChecked()));
        return;
    }

    String::Utf8Value input(isolate, args[0]);
    size_t slen = input.length();

    struct libinjection_sqli_state state;
    int issqli;

    libinjection_sqli_init(&state, *input, slen, FLAG_NONE);
    issqli = libinjection_is_sqli(&state);

    if (issqli) {
        Local<Object> result = Object::New(isolate);
        result->Set(isolate->GetCurrentContext(), String::NewFromUtf8(isolate, "is_sqli").ToLocalChecked(), Boolean::New(isolate, issqli)).FromJust();
        args.GetReturnValue().Set(result);
    } else {
        args.GetReturnValue().Set(Boolean::New(isolate, issqli));
    }
}


void Initialize(Local<Object> exports) {
    NODE_SET_METHOD(exports, "checkSQLInjection", CheckSQLInjection);
    NODE_SET_METHOD(exports, "hasSQLInjection", HasSQLInjection);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
