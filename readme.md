# Background
This repository showcases a bug related to the es2015 preset in connection with module transformers.

`typeof x === "object"` triggers an exception: `RangeError: Maximum call stack size exceeded` whith this `.babelrc`:
````
{
  "presets": [
    "es2015",
  ],
  "plugins": [
    "transform-es2015-modules-amd",
  ]
}
````

# Test
## Compile Test
````
gulp
````

## Run the test
````
node runTest.js
````
