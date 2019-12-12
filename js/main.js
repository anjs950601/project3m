$(function(){
    $(".keyvisual").mobileDragEvent1({total:3});
  var n=0;
  $(".GNB_icon").click(function(e){
    e.preventDefault();
    $("#GNB").css({"position" : "fixed"});
    $("#GNB").stop().animate({"left" : 0}, 300);
  });
  $(".GNB_icon2").click(function(e){
    e.preventDefault();
    $("#GNB ul > li > a.open").removeClass("active");
    $("#GNB ul > li > a.open2").removeClass("active");
    $(".wrapper").css({"position" : "static"});
    $("#GNB").css({"position" : "absolute"});
    $("#GNB").stop().animate({"left" : "-100%"}, 300);
    $("#GNB > ul > li > ul").stop().slideUp(300);
  });
  $("#GNB > ul > li").click(function(e){
    e.preventDefault();
    $("#GNB > ul > li > ul").stop().slideUp(300);
    $(this).find("ul").stop().slideToggle(300);
    n=$(this).find("ul").height();
    if(n < 100) {
      $("#GNB ul > li > a.open").removeClass("active");
      $("#GNB ul > li > a.open2").removeClass("active");
      $(this).find("a.open").addClass("active");
      $(this).find("a.open2").addClass("active");
    }
    else {
      $(this).find("a.open").removeClass("active");
      $(this).find("a.open2").removeClass("active");
    }
  });
  $(".section1_box1_intitle").click(function(e){
    e.preventDefault();
    $(".section1_box1_pic li").fadeOut(300);
    $(".section1_box1_pic li:nth-child(1)").fadeIn(300);
  });
  $(".section1_box1_block li:nth-child(1)").click(function(e){
    e.preventDefault();
    $(".section1_box1_pic li").fadeOut(300);
    $(".section1_box1_pic li:nth-child(2)").fadeIn(300);
  });
  $(".section1_box1_block li:nth-child(2)").click(function(e){
    e.preventDefault();
    $(".section1_box1_pic li").fadeOut(300);
    $(".section1_box1_pic li:nth-child(3)").fadeIn(300);
  });
  $(".section1_box1_block li:nth-child(3)").click(function(e){
    e.preventDefault();
    $(".section1_box1_pic li").fadeOut(300);
    $(".section1_box1_pic li:nth-child(4)").fadeIn(300);
  });
  $(".section1_box1_block li:nth-child(4)").click(function(e){
    e.preventDefault();
    $(".section1_box1_pic li").fadeOut(300);
    $(".section1_box1_pic li:nth-child(5)").fadeIn(300);
  });

  $(".section1_box2_intitle").click(function(e){
    e.preventDefault();
    $(".section1_box2_pic li").fadeOut(300);
    $(".section1_box2_pic li:nth-child(1)").fadeIn(300);
  });
  $(".section1_box2_block li:nth-child(1)").click(function(e){
    e.preventDefault();
    $(".section1_box2_pic li").fadeOut(300);
    $(".section1_box2_pic li:nth-child(2)").fadeIn(300);
  });
  $(".section1_box2_block li:nth-child(2)").click(function(e){
    e.preventDefault();
    $(".section1_box2_pic li").fadeOut(300);
    $(".section1_box2_pic li:nth-child(3)").fadeIn(300);
  });
  $(".section1_box2_block li:nth-child(3)").click(function(e){
    e.preventDefault();
    $(".section1_box2_pic li").fadeOut(300);
    $(".section1_box2_pic li:nth-child(4)").fadeIn(300);
  });
  $(".section1_box2_block li:nth-child(4)").click(function(e){
    e.preventDefault();
    $(".section1_box2_pic li").fadeOut(300);
    $(".section1_box2_pic li:nth-child(5)").fadeIn(300);
  });
});
