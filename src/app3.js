import $ from 'jquery'
import './app3.css'

const $square=$('#app3 .square')
$square.on('click',e=>{
  $square.toggleClass('active')  //有这个active类就取消  没有就加上
})