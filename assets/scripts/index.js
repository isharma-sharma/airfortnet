'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/event.js')
$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
function updateTransition () {
  const photos = document.getElementById('photos')
  if (photos.style.animationPlayState === 'paused') {
    photos.style.animationPlayState = 'running'
  } else {
    photos.style.animationPlayState = 'paused'
  }
}

window.setInterval(updateTransition, 4000)

// $(() => {
//   const photos = document.getElementById('photos')
//   if (photos.style.animationPlayState === 'paused') {
//     photos.style.animationPlayState = 'running'
//   } else {
//     photos.style.animationPlayState = 'paused'
//   }
// })

// $(() => {
//   if ($('#photos').hasClass('paused')) {
//     $('#photos').removeClass('paused')
//     return
//   }
//
//   $('#photos').addClass('paused')
//   $('#photos').on('webkitAnimationEnd', function () {
//     this.style.webkitAnimationPlayState = 'paused'
//   })
// })
