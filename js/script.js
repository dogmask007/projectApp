var myFullpage = new fullpage('#fullpage', {
    anchors: ['first','second', '', '', ''],
    sectionsColor: ['#020202', '#020202', '#020202', '#020202', '#020202', '#ffffff'],
    navigation: false,
    navigationPosition: 'left',
    fixedElements: '#header, .footer, .top',
    verticalCentered:false,
});


$(document).ready(function(){
	$(".gnb>li").hover(function(){
		$(this).children(".submenu").stop(400).slideDown(400);
	},function(){
		$(this).children(".submenu").stop(400).slideUp(400);
	});
});

// 햄버거버튼

$(document).ready(function() {
    var $toggleButton = $('.toggle-button');
    $toggleButton.on('click', function() {
      $(this).toggleClass('button-open');
    });
  });
  
  
// 토글시 메뉴
$(function (){
	$(".toggle-button").click(function (){
  	$(".header>ul").toggle(200);
  });
});
