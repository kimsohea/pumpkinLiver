$(function(){
    $(".wrap>div").on('mousewheel DOMMouseScroll', function(e) {
        let delta = 0;
        let E = e.originalEvent;
    if (E.detail) {
        delta = E.detail * -40;
    }else{
        delta = E.wheelDelta;
    }
    if (delta>0){
        let posTop = $(this).prev().offset().top;
		$(`html,body`).stop().animate({scrollTop:posTop},500);
	} else {
		let posTop = $(this).next().offset().top;
		$(`html,body`).stop().animate({scrollTop:posTop},500);
    }
    });
    // console.log($(`.mouseTracking`).position());
    $(`.con03`).mousemove(function(e){
        let cusorX = e.clientX;
        let cusorY = e.clientY;
        $(`.mouseTracking`).css(`transform`,`translate(`+cusorX+`px,`+cusorY+`px)`)
    });
});

