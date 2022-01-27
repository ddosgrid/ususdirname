# Getting __dirname in es modules

Before:
```javascript
const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, '/public')

fs.mkdirSync(dirPath)
```
After:

```javascript
import dirname from 'ususdirname'
const __dirname = dirname()

const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, '/public')

fs.mkdirSync(dirPath)
```
