{
  "targets": [
    {
      "target_name": "myaddon",
      "sources": [ "src/wrapper.cpp" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")",
        "src"  
      ],
      "sources": [
        "src/wrapper.cpp",          
        "src/libinjection_sqli.c"   
      ],
        "cflags": [ "-std=c11" ],  
      "cxxflags": [ "-std=c++11" ] 
    }
  ]
}
