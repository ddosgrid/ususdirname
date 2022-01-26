# Getting __dirname in es modules

Before:
```
const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, '/public')

fs.mkdirSync(dirPath)
```
After:

```
import dirname from 'ususdirname'
const __dirname = dirname()

const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, '/public')

fs.mkdirSync(dirPath)
``
