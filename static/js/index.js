$(".mediq-head_col-mob-menu-btn").click(function(){
    if($('body').hasClass("prevent-scroll")){
      $('body').removeClass("prevent-scroll");
    } else {
      $('body').addClass("prevent-scroll");
    }
    if($('.mediq-head_mobile-screen').hasClass("mediq-head_mobile-screen__is-opened")){
      $('.mediq-head_mobile-screen').removeClass("mediq-head_mobile-screen__is-opened")
    } else {
      $('.mediq-head_mobile-screen').addClass("mediq-head_mobile-screen__is-opened")
    }
  })
  $('.mediq-head_mobile-menu-btn-close').click(function(){
    $('body').removeClass("prevent-scroll");
    $('.mediq-head_mobile-screen').removeClass("mediq-head_mobile-screen__is-opened");
  })
  $('#log').click(function(){
    if($('body').hasClass("prevent-scroll")){
      $('body').removeClass("prevent-scroll");
    } else {
      $('body').addClass("prevent-scroll");
    }
    $('.login_popup').css('display','flex');
  })
  $('.close').click(function(){
    $('body').removeClass("prevent-scroll");
    $('.login_popup').css('display','none');
  })