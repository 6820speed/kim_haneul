$(document).ready(function(){

    
var pshparell = { }
pshparell.winHT = $(window).height();
pshparell.distance = pshparell.winHT;
pshparell.count = 0;
pshparell.mnoving = false;	
pshparell.length = $(document).find(".article").length;
    
$('header .logo .hd1 > a').on("click", function() { 
    $('html, body').animate({"scrollTop" : 0});
    pshparell.count = 0;
    
    $('header .menu_wrap > li').removeClass("on");
    $('header .menu_wrap > li').eq(0).addClass("on");
});
    
	
	$(".article").each(function (index, element) { 
		
		$(element).on("mousewheel DOMMouseScroll", function (e) {
			//console.log($(this).html());
			
			//console.log("e ====", e);
			//console.log("originalEvent ====", e.originalEvent);
			
			e.preventDefault();

			var El = e.originalEvent;			

			var delta = 0;

			if (El.wheelDelta) {
				delta = event.wheelDelta / 120;
				//if (window.opera) delta = -delta;
			} else if (El.detail) delta = -El.detail / 3;		

			//console.log("dd?????? ==", El.detail);
			//console.log("event.wheelDelta ==", event.wheelDelta);

			
			//console.log("next", $(window).scrollTop());
			//console.log("moveTop", moveTop);
			
			
			if(pshparell.mnoving == false) { 				
				pshparell.mnoving = true;
				
				// 마우스휠을 위에서 아래로			
				if (delta  < 0 ) {
					if($(window).scrollTop() == pshparell.distance * (pshparell.length-1)) {
						moveTop = $(this).offset().top;				   
					} else { 
						moveTop = $(this).next().offset().top;			 pshparell.count++;
                        
                        
					}
				// 마우스휠을 아래에서 위로
				} else {
					if($(window).scrollTop() < pshparell.distance) { 
					   moveTop = $(this).offset().top;
					} else { 
						moveTop = $(this).prev().offset().top;
                        pshparell.count--;
					}	
				}
                
                $('nav .menu_wrap > li').removeClass("on");
                $('nav .menu_wrap > li').eq(pshparell.count).addClass("on");
                
                
                console.log(pshparell.count);

				
				
				$("html,body").stop().animate({
					scrollTop: moveTop + 'px'
				}, {
					duration: 800, complete: function () {
						pshparell.mnoving = false;	
					}
				});	
			}
			
		});
	});
	
    $(function() { 
		$(document).on('click', '.btn , button', function(){			
			$(this).addClass('active');
			$(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
			function() {
				$(this).removeClass('active');
			});
 
			$(this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
			function() {
				$(this).removeClass('active');
			});		
		});
})
    

    
    $('.menu_wrap > li > a').on("click", function() { 
         var _this = $(this);
         var _thispt = _this.parent();
         var _thisptIndex = _thispt.index();
        
          pshparell.count = _thisptIndex;
         var _targetOffset = $('.article').eq(pshparell.count).offset().top;
        
         $('.menu_wrap > li').removeClass("on");
         _thispt.addClass("on");
         $('html, body').animate({"scrollTop" : _targetOffset});
    });
    
    
    
    
});/*end*/