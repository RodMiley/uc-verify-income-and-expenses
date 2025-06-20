//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter
var moment = require('moment')




addFilter('baseDate', function (format,num) {
    var num = Math.ceil(num);
      var d = moment().subtract(num,"days").format(format)
      if (d !== 'Invalid date') return d
      else return ''
})


addFilter('baseDateAdd', function (format,num) {
var num = Math.ceil(num);
    var d = moment().add(num,"days").format(format)
    if (d !== 'Invalid date') return d
    else return ''
})





