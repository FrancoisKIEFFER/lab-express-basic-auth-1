const { Router } = require('express')
const router = Router()

router.get('/signup', (req, res) => {
  res.render('auth/signup')
})

module.exports = router
