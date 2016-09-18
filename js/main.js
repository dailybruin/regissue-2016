//this function parses the data specific for each section
function sectionParser(name, data){
  var list = [];
  for (var i = 0; i < data.length; i++){
    if (data[i].gsx$section.$t == name){
      list.push(data[i]);
    }
  }
  console.log(list);

  return list
}

// Appends the data and template for specified section
// Retrieve the template data from the HTML (jQuery is used here).
function appendDataAndTemplate(name, data, type){
  var template = $('#handlebars-articles-' + type).html();
  var templateScript = Handlebars.compile(template);
  var context = data;
  var html = templateScript(context);
  $(name).replaceWith(html);
}

$( document ).ready(function() {

  //lets get some google spreadsheet data :D
  $.ajax({
    dataType: "json",
    url: "https://spreadsheets.google.com/feeds/list/1Dtx9lL-IA4L_nohyEv9l5CfA5ZM_tHSv5kI7BcWqUJc/od6/public/values?alt=json",
  	success: function(data) {
        console.log("got the data");
  			data = data.feed.entry;
        console.log(data);

        //get data for each section
        var AEList = sectionParser("A&E", data);
        var GraphicsList = sectionParser("Graphics", data);
        var NewsList = sectionParser("News", data);
        var OpinionList = sectionParser("Opinion", data);
        var PrimeList = sectionParser("Prime", data);
        var QuadList = sectionParser("Blogging", data);
        var SportsList = sectionParser("Sports", data);
        var VideoList = sectionParser("Video", data);

        // The code below is for handlebars ---===
        // Retrieve the template data from the HTML (jQuery is used here).

        appendDataAndTemplate("#A-E-Content", AEList, "right");
        appendDataAndTemplate("#Graphics-Content",GraphicsList, "left");
        appendDataAndTemplate("#News-Content",NewsList, "right");
        appendDataAndTemplate("#Opinion-Content",OpinionList, "left");
        appendDataAndTemplate("#Prime-Content",PrimeList, "right");
        appendDataAndTemplate("#Quad-Content",QuadList, "left");
        appendDataAndTemplate("#Sports-Content",SportsList, "right");
        appendDataAndTemplate("#Video-Content",VideoList, "left");

        $('.slider-for').slick({
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: false,
           fade: true,
           asNavFor: '.slider-nav'
        });

        $('.slider-nav').slick({
           slidesToShow: 1,
           slidesToScroll: 1,
           asNavFor: '.slider-for',
           dots: true,
           adaptiveHeight: true,
           vertcal: true,
        });

  	}
  });

});
