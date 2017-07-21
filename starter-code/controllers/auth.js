const { Router } = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const router = Router()

router.get('/signup', (req, res) => {
  res.render('auth/signup')
})

router.post('/signup', (req, res) => {
  const { email, password } = req.body
  const salt = bcrypt.genSaltSync(10)
  const user = new User({
    email,
    password: bcrypt.hashSync(password, salt)
  })

  user.save()
  .then((user) => {
    res.redirect('/login')
  }).catch((err) => {
    res.redirect('/signup')
  })
})

module.exports = router
