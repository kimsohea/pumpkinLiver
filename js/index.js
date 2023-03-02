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
});