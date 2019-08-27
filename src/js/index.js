$(function(){
  /*
  hoverBtn: 鼠标移入移出按钮,
  showBox: 要显示的内容,
  flag: 标识 1表示移除，0表示显示
  bg: 要显示内容背景
  */
  function hoverHandle(hoverBtn, showBox, flag, bg){
    $(hoverBtn).mouseenter(function(){
      if(flag){ // 1
        $(this).addClass('sel'); // 替换背景图片
        $(bg).show();
        $(showBox).css({
          height: 'auto',
          overflow: 'visible'
        });
        flag = !flag; // 更新标识
      }else{
        $(this).removeClass('sel');
        $(bg).hide();
        $(showBox).css({
          height: '56px',
          overflow: 'hidden'
        });
        flag = !flag;
      }
    });
  }

  // nav
  hoverHandle('.dropdown-btn', '.nav ul', 1, '.menu-bg');
   // nav
  $('.nav ul li').each(function(){
    $(this).mouseenter(function(){
      $(this).addClass('active').siblings().removeClass('active');
    });
  });

  $('.degree .cont-list li').each(function(index){
    $(this).mouseenter(function(){
      $($('.degree .detail-item')[index]).addClass('active').siblings().removeClass('active');
    })
  })
});