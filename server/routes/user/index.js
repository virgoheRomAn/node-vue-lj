var express = require('express')
var $ajax = require('axios')
var native = require('../../config/native')
var port = require('../../config/interface')
var router = express.Router()

var resData = {
  code: 0,
  msg: '',
  data: {}
}

/**
 * 查找用户信息
 * @param {String} userName 用户手机号
 */
router.post('/api/findLogin', function (request, response, next) {
  var body = request.body
  var userName = body.userName
  var url = native.system.userCenter + port.url.user.findUser

  $ajax.post(url, {
    userName: userName
  }).then(function (res) {
    var data = res.data
    if (data.code === '0') {
      var result = data.data
      resData.data = result
      resData.code = 1000
      resData.msg = '请求成功'
    } else {
      resData.data = {}
      resData.code = 1001
      resData.msg = '请求失败'
    }
    response.send(resData)
  }).catch(function (err) {
    response.send(err)
  })
})

module.exports = router
