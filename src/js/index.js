$(function(){
  theaMsForm();
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

  // 学位
  $('.degree .cont-list li').each(function(index){
    $(this).mouseenter(function(){
      $($('.degree .detail-item')[index]).addClass('active').siblings().removeClass('active');
    });
  });

  // 右侧悬浮
  $('.right-nav li').each(function () {
    var that = $(this);
    that.mouseenter(function () {
      $('.right-nav li').each(function () {
        $(this).find('.hide-content').hide();
      });
      that.find('.hide-content').show();
    });
  });

  // 点击 免费试听 预约试听弹窗 显示
  $('.audition-btn').click(function () {
    $('.appoint-popup').show();
  });

  $('.close').click(function () {
    $('.appoint-popup').hide();
  });

  // dataWrap: 数据容器, submitData: 提交的数据, mergeData: 合并数据
  function radioChoice(dataWrap, submitData) {
    dataWrap.find('li span').click(function () {
      var aimEle = $(this);
      aimEle.addClass('active').siblings().removeClass('active');
      aimEle.parent().find('.user-con').each(function () {
        $(this).val($(this).siblings('.active').html());
      });
      var mergeData = '';
      for (var n = 0; n < dataWrap.find('li').length; n++) {
        mergeData += dataWrap.find('li').eq(n).find('.active').text() + '、';
      }
      submitData.val(mergeData);
    });
  }
  radioChoice($('.invite-data'), $('#inviteData'));
  // ele: 目标元素, c: 关闭按钮, f: 第一次是多少毫秒显示,
  // a: 第二次是第一次之后多少毫秒显示, n: 一共显示多少次, s: 占位
  function popupHandle(ele, c, f, a, n, s) {
    var $par = $(ele);
    var $num = 1;
    var $site = $(s);
    popupTc(f);
    $(c).click(function () {
      $par.hide();
      $site.hide();
      if ($num < n) {
        popupTc(a);
      }
      $num++;
    });

    function popupTc(d) {
      setTimeout(function () {
        $site.fadeIn(300);
        $par.fadeIn(300);
      }, d);
    }
  }
  // 800弹窗
  popupHandle('.invite-popup', '.invite-popup .close', 15000, 30000, 2);
  // 底部广告
  popupHandle(".footer-ad", ".footer-ad .close", 15000, 30000, 2, ".footer-ad-site");
});