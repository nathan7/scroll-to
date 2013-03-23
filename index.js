module.exports = scroll
var scrollTo = window.scroll || window.scrollTo
  , scrollPos = require('scroll-position')

var scroll =
function scrollY(elem) {
  var r = elem.getBoundingClientRect()
    , s = scrollPos()
  scrollTo(s.x, r.top + s.y)
}
scroll.y = scroll


scroll.xy = function scrollXY(elem) {
  var r = elem.getBoundingClientRect()
    , s = scrollPos()
  scrollTo(r.left + s.x, r.top + s.y)
}

scroll.x = function scrollX(elem) {
  var r = elem.getBoundingClientRect()
    , s = scrollPos()
  scrollTo(s.x, 0) 
}

