//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

var claimants = require('./views/data/claimants.json')

router.get('/*', function (req, res, next) {
  let findCase = {}

  for (let i = 0; i < claimants.length; i++ ) {
  if(claimants[i].reference === req.query.reference){
    findCase = claimants[i];
  }

  }

  res.locals.claimantcase = findCase
  res.locals.claimants = claimants
   next()
    })