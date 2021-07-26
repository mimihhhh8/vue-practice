let express = require('express')

let app = express()

app.get('/user', (req, res) => {
  // res.setHeader('Access-Control-Allow-Origin', '*')
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization')

  res.json({
    'message': '获取成功',
    'state': '1',
    'result': {'name': '工作组1', 'id': 1, 'description': '11'}
  })
})

app.listen(3000, function () {
  console.log('服务启动，端口3000')
})
