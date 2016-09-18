$( document ).ready(function() {
  //lets get some google spreadsheet data :D
  $.ajax({
    dataType: "json",
    url: "https://spreadsheets.google.com/feeds/list/1Dtx9lL-IA4L_nohyEv9l5CfA5ZM_tHSv5kI7BcWqUJc/od6/public/values?alt=json",
  	success: function(data) {
        console.log("got the data");
  			data = data.feed.entry;
        console.log(data);


        // The code below is for handlebars ---===
        // Retrieve the template data from the HTML (jQuery is used here).

        // var template = $('#article').html();
        // var templateScript = Handlebars.compile(template);
        // var context = data;
        // var html = templateScript(context);
        // $("#handlebars-content").append(html);
        //
        //
        // var template2 = $('#tile').html();
        // var templateScript2 = Handlebars.compile(template2);
        // var html2 = templateScript2(context);
        //
        // $('#tile-container').append(html2);


  	}
  });

  $('.slider-for').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     asNavFor: '.slider-for',
     dots: true,
     centerMode: true,
     focusOnSelect: true
  });
});
