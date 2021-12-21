import $ from 'jquery'
import './app2.css'


const $tabBar=$('#app2 .tab-bar')
const $tabContent=$("#app2 .tab-content")
const index=localStorage.getItem('app2.index') || 0   //保底值 0

$tabBar.on('click','li',e=>{  //事件委托  不监听li 监听其父元素tab-bar
  const $li=$(e.currentTarget)   //这就是用户点击的那个元素li  e.target
  const index=$li.index()
  localStorage.setItem('app2.index',index)  //设置index保存
  $li.addClass('selected')  //点击时 把这个Li装饰 把他兄弟的li不要这个装饰
     .siblings().removeClass('selected')
  $tabContent.children()
    .eq(index).addClass('active')
    .siblings().removeClass('active')
})
$tabBar.children().eq(index).trigger('click')  //设置首次在1出现橘色