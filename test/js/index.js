// const box = document.getElementsByClassName('box')[0]

// function animate (el, targetL, duration) {
//   let currLeft = 0
//   let animation = () => {
//     if(currLeft <= targetL) {
//       el.style.left = `${currLeft}px`
//       currLeft += (targetL / duration) * 20
//     }
//     // setTimeout(animation, 20)
//     window.requestAnimationFrame(animation)
//   }
//   animation()
// }


// setTimeout(animate.bind(null, box, 200, 2000),2000)


const wrapper = document.getElementById('wrapper'),
      mask = document.getElementById('mask')

wrapper.addEventListener('touchstart', (e) => {
  console.log(`touchstart`)
  mask.style.display = "block"
})

wrapper.addEventListener('touchmove', e => {
  console.log('mousemove')
})

