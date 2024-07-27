#include <node.h>

namespace demo {
    using v8::Exception;
    using v8::FunctionCallbackInfo;
    using v8::Isolate;
    using v8::Local;
    using v8::Number;
    using v8::Object; // Include Object header
    using v8::String;
    using v8::Value;

    void Add(const FunctionCallbackInfo<Value>& args) {
        Isolate* isolate = args.GetIsolate();
        if (args.Length() < 2) {
            isolate->ThrowException(Exception::TypeError(
                String::NewFromUtf8(isolate, "Wrong number of arguments").ToLocalChecked()));
            return;
        }

        double value = args[0]->NumberValue(isolate->GetCurrentContext()).ToChecked() +
                       args[1]->NumberValue(isolate->GetCurrentContext()).ToChecked();
        Local<Number> num = Number::New(isolate, value);

        args.GetReturnValue().Set(num);
    }

    void Init(Local<Object> exports) {
        NODE_SET_METHOD(exports, "add", Add);
    }

    NODE_MODULE(NODE_GYP_MODULE_NAME, Init)
}