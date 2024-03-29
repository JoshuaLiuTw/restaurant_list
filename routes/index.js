// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引入 home 模組程式碼
const home = require('./modules/home')
// 引入  模組程式碼
const restaurants = require('./modules/restaurants')
const auth = require('./modules/auth')


const users = require('./modules/users')
router.use('/users', users)

const { authenticator } = require('../middleware/auth')

router.use('/restaurants', authenticator, restaurants)
// 將網址結構符合 /restaurants 字串開頭的 request 導向 restaurants 模組 
router.use('/auth', auth)




router.use('/', authenticator, home)
// 將網址結構符合 / 字串的 request 導向 home 模組 


// 匯出路由器
module.exports = router
