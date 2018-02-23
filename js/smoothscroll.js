$(document).ready(function() {

    var link = $(".list__link");

    link.click(function(e) {
        e.preventDefault();
        $("body, html").animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    })
    // $(window).scroll(function() {
    //     var scrollbarLocation = $(this).scrollTop();
        
    //       link.each(function() {
          
    //       var sectionOffset = $(this.hash).offset().top - 20;
          
    //       if ( sectionOffset <= scrollbarLocation ) {
    //         $(this).addClass('list__link--active');
    //         $(this).parent().siblings().children().removeClass('list__link--active');
    //       }
    //     })
        
    //   })
 
})