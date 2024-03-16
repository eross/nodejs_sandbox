import http from 'node:http'
import fs from 'node:fs'

const server = http.createServer()

server.on('request', (req, res) => {
  const src = fs.createReadStream('./big.file')
  src.pipe(res)
})

server.listen(8000)
