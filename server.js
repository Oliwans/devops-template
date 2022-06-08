/*
 * @Date: 2022-06-08 21:51:19
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-06-08 22:36:14
 * @FilePath: /devops-template/server.js
 */
const http = require('node:http')
const fs = require('node:fs')
const fsp = require('node:fs/promises')

// const html = fs.readFileSync('./index.html')
// const server = http.createServer((req, res) => res.end(html))
const server = http.createServer(async (req, res) => {
    const stat = await fsp.stat('./index.html')
    res.setHeader('content-length', stat.size)
    fs.createReadStream('./index.html').pipe(res)
})

server.listen(3000, () => {
    console.log('server is start on 3000')
})