const express = require('express');
const axios = require('axios');
const dateFormatChanger = require('../public/javascripts/dateFormatChanger')



const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  axios.get('https://api.skypicker.com/flights?fly_from=BCN')
    .then(({ data }) => {
      console.log('vuelos', data);
      
      res.render('trip');
    })
    .catch((error) => {
      console.log('error', error);
    });
});

router.post('/', (req, res, next) => {
  const { date_from, date_to, budget } = req.body;
  console.log(dateFormatChanger(date_from));

  console.log('is working')

//   axios.get(`https://api.skypicker.com/flights?fly_from=BCN`)

//   .then(() => {
//     res.redirect('/profile');
//   })
//   .catch(next);
// }
});


module.exports = router;