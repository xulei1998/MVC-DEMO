import $ from 'jquery'
import './app3.css'

const $square=$('#app3 .square')
const active=localStorage.getItem('app3.active') === 'yes' ? true : false

$square.toggleClass('active',active)  //有这个active类就取消  没有就加上
$square.on('click',e=>{
  if($square.hasClass('active')){
    $square.removeClass('active')
    localStorage.setItem('app3.active','no')
  }else{
    $square.addClass('active')  
    localStorage.setItem('app3.active','yes')
  }
})