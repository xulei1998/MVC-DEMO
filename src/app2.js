import $ from 'jquery'
import './app2.css'


const $tabBar=$('#app2 .tab-bar')
//事件委托  不监听li 监听其父元素tab-bar
const $tabContent=$("#app2 .tab-content")

$tabBar.on('click','li',e=>{
  const $li=$(e.currentTarget)   //这就是用户点击的那个元素li  e.target
  const index=$li.index()
  $li.addClass('selected')  //点击时 把这个Li装饰 把他兄弟的li不要这个装饰
    .siblings().removeClass('selected')
  $tabContent.children()
    .eq(index).addClass('active')
    .siblings().removeClass('active')
})
$tabBar.children().eq(0).trigger('click')  //设置首次在1出现橘色