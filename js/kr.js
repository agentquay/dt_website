var triggers = $('.kr ul.triggers li');
var images = $('ul.client_work_kr li');
var lastElem = triggers.length-1;
var target;

triggers.first().addClass('selected');
images.hide().first().show();

function sliderResponse(target) {
    images.fadeOut(300).eq(target).fadeIn(300);
    triggers.removeClass('selected').eq(target).addClass('selected');
}

triggers.click(function() {
    if ( !$(this).hasClass('selected') ) {
        target = $(this).index();
        sliderResponse(target);
        resetTiming();
    }
});
$('.next').click(function() {
    target = $('ul.triggers li.selected').index();
    target === lastElem ? target = 0 : target = target+1;
    sliderResponse(target);
    resetTiming();
});
$('.prev').click(function() {
    target = $('ul.triggers li.selected').index();
    lastElem = triggers.length-1;
    target === 0 ? target = lastElem : target = target-1;
    sliderResponse(target);
    resetTiming();
});
function sliderTiming() {
    target = $('ul.triggers li.selected').index();
    target === lastElem ? target = 0 : target = target+1;
    sliderResponse(target);
}
