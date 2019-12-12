﻿/*
$(function(){
	var w=100;
	var amount=0;

	$("#left").click(function(){ // 왼쪽으로 움직입니다.
		amount-=w;
		$(".photo").animate({left:amount}, 500);
	});
	$("#right").click(function(){ // 오른쪽으로 움직입니다.
		amount+=w;
		$(".photo").animate({left:amount}, 500);
	});
});
*/

/*
$(function(){
	var w=100;
	var amount=0;

	$("#left").click(function(){ // 왼쪽으로 움직입니다.
		amount-=w;
		$(".photo").animate({left:amount}, 500, function(){
			$(".photo").append($(".photo li:first-child"));
			amount+=w;
			$(this).css({left:amount});
		});
	});
	$("#right").click(function(){ // 오른쪽으로 움직입니다.
		$(".photo").prepend($(".photo li:last-child"));
		amount-=w;
		$(".photo").css({left:amount});

		amount+=w;
		$(".photo").animate({left:amount}, 500);
	});
});
*/

/*
$(function(){
	var w=100;
	var amount=0;

	var id=setInterval(rightMoving, 5000);

	function rightMoving(){ // 오른쪽으로 움직입니다.
		amount+=w;
		$(".photo").animate({left:amount}, 500);
		return amount;
	}

	// var functionObj=rightMoving(); // 소괄호(())를 사용해 호출하면, 함수의 구문과 리턴을 실행합니다.
	var functionObj=rightMoving; // 소괄호를 사용하지 않고 호출하면, 함수 자체를 의미합니다.
	// console.log("functionObj : "+functionObj);
});
*/

$(function(){
	var w=360;
	var amount2=0;
	var id=setInterval(leftMoving, 5000);
	function leftMoving(){
		amount2-=w;
		$(".photo").animate({left:amount2}, 500, function(){
			$(this).append($(".gallery ul li:first-child"));
			amount2+=w;
			$(this).css({left:amount2});
		});
	}
});
