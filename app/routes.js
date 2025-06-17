//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/scope-answer', function(request, response) {

    var scope = request.session.data['scope']
    if (scope == "yes"){
        response.redirect("/v1/tasklist")
    } else {
        response.redirect("/v1/tasklist")
    }
})