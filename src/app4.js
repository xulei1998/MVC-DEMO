import $ from 'jquery'
import './app4.css'

const $circle=$('#app4 .circle')
$circle.on('mouseenter',e=>{
  $circle.addClass('active')
}).on('mouseleave',e=>{
  $circle.removeClass('active')
})
