{
  "targets": [
    {
      "target_name": "libinjection",
      "sources": [ "lib/wrapper.cpp" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")",
        "lib"  
      ],
      "sources": [
        "lib/wrapper.cpp",          
        "lib/libinjection_sqli.c"   
      ],
        "cflags": [ "-std=c11" ],  
      "cxxflags": [ "-std=c++11" ] 
    }
  ]
}
