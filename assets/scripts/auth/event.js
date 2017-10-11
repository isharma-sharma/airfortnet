// (function() {
//   const photos = document.getElementById('photos')
//   photos.onclick = function () {
//     if (photos.style.animationPlayState === 'paused') {
//       photos.style.animationPlayState = 'running'
//     } else {
//       photos.style.animationPlayState = 'paused'
//     }
//   }
// })()
module.exports = {
  function () {
    const x = document.getElementById('photos')
    photos.onclick = function () {
      if (photos.style.animationPlayState === 'paused') {
        photos.style.animationPlayState = 'running'
      } else {
        photos.style.animationPlayState = 'paused'
      }
    }
  }
}
