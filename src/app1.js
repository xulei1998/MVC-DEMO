import $ from 'jquery'
import './app1.css'  //必须要加./  当前目录下的


const $button1=$('#add1')
const $button2=$('#minus1')
const $button3=$('#mul2')
const $button4=$('#divide2')
const $number=$('#number')
const n=localStorage.getItem('n')
$number.text(n||100)

$button1.on('click',()=>{  //对第一个按钮绑定事件
  let n=parseInt($number.text())
  n=n+1
  localStorage.setItem('n',n) //防止刷新之后就没了 数据存储
  $number.text(n)
})

$button2.on('click',()=>{  //对第一个按钮绑定事件
  let n=parseInt($number.text())
  n=n-1
  localStorage.setItem('n',n)
  $number.text(n)
})


$button3.on('click',()=>{  //对第一个按钮绑定事件
  let n=parseInt($number.text())
  n=n*2
  localStorage.setItem('n',n)
  $number.text(n)
})

$button4.on('click',()=>{  //对第一个按钮绑定事件
  let n=parseInt($number.text())
  n=n/2
  localStorage.setItem('n',n)
  $number.text(n)
})