const router = require('express').Router();
const productsRoutes = require('./products');
const usersRoutes = require('./users');
const filtersRoutes = require('./filters')
const imagesRoutes = require('./images')
const reviewsRoutes = require('./reviews')
const sendClaimMail=require('./sendClaimMail')

router.get('/', (req, res)=> res.send('Hello'))  // solo para pruebas luego borrar

/* products routes */
router.use('/products', productsRoutes);

/* users routes */
router.use('/users', usersRoutes);

/* filters routes*/
router.use('/filter', filtersRoutes);


/* reviews routes*/
router.use('/reviews',reviewsRoutes)

/* post images in Cloudinary*/
router.use('/img', imagesRoutes)


/*send claim mail routes*/
router.use('/send-claim',sendClaimMail)

module.exports = router;
