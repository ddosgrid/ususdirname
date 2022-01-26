import { fileURLToPath } from 'url'
import { dirname as path_dirname } from 'path'

export default function dirname () {
  var __filename = fileURLToPath(import.meta.url)
  var __dirname = path_dirname(__filename)
  return __dirname
}
