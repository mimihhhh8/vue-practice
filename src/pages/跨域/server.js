let express = require('express')

let app = express()

app.get('/user', (req, res) => {
  res.json({name: 'jack', data: [{id: '111111', state: true}]})
})

app.listen(3000, function () {
  console.log('服务启动，端口3000')
})
