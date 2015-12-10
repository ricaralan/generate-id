
# generate-id

![license](http://img.shields.io/npm/l/generate-id.svg?style=flat)
![version](http://img.shields.io/npm/v/generate-id.svg?style=flat)
![downloads](http://img.shields.io/npm/dm/generate-id.svg?style=flat)

This package helps to generate IDs

```shell
  npm install generate-id
```

Usage - step 1 "instantiation"

```shell

  var GenerateId = require("generate-id"),
      g = new GenerateId();

    or

  var g = new (require("generate-id"))();

```

Usage - step 2 "generating id"

```shell

  g.generate(10); // output possible "HenpU38LUq"

  g.generate({
    length : 23,
    include  : ["upper", "down", "numbers"],
    add : {
      before : "<-",
      after : "->"
    }
  }); // output possible "<-J3XrStvbocQoGjv3AqEWpWu->"

```
