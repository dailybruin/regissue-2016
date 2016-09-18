$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#D3D3D3', '#dfd05d', '#86C67C', '#5181', '', '#d2232a', '#300f24', '#81a2d5', '#54595a'],
        anchors: ['zeroPage', 'firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage'],
        menu: '#menu'
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
