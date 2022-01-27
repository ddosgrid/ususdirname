import { fileURLToPath } from 'url'
import { dirname as path_dirname } from 'path'

export default function dirname (metaUrl) {
  var __filename = fileURLToPath(metaUrl || import.meta.url)
  var __dirname = path_dirname(__filename)
  return __dirname
}
