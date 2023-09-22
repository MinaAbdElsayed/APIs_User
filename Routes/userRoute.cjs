const Router = require ('express')
const userControiiers = require ('../controllers/userControllers.cjs')
const router = Router.Router()



router.post('/api/users/register',userControiiers.register )
router.post('/api/users/login', userControiiers.login)

module.exports = router

