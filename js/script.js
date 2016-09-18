$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#FFF', '#dfd05d', '#86C67C', '#5181', '#d2232a', '#ffdea3', '#300f24', '#81a2d5', '#54595a'],
        anchors: ['zeroPage', 'firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage'],
        menu: '#menu',

        afterLoad: function(anchorLink, index){
          var loadedSection = $(this);
          //using anchorLink
          if(anchorLink != 'zeroPage'){
              $(".navbar h1").css("color", "white");
              $(".navbar").css("background-color", "black");
          }
          else{
            $(".navbar h1").css("color", "black");
            $(".navbar").css("background-color", "transparent");
          }
        },
    });
});

var previousScroll = 0,
    headerOrgOffset = $('#header').height();

$('#header-wrap').height($('#header').height());

$(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > headerOrgOffset) {
        if (currentScroll > previousScroll) {
            $('#header-wrap').slideUp();
        } else {
            $('#header-wrap').slideDown();
        }
    }
    previousScroll = currentScroll;
});
