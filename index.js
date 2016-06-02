$(document).ready(function(){
  var displayNode = $('#bizes');

  $('#form').submit(function(e){
    e.preventDefault();
    displayNode.empty();

    var category = $('#category').val();
    var item = $('#item').val();

    displayNode.append(
      '<h3>Category is ' + category + '</h3>' +
      '<h4>Item is ' + item + '</h4>'
    );

    var getString = 'https://data.ct.gov/resource/y6p2-px98.json?';
    getString += 'category='+category+'&item='+item;

    $.get(getString, function(data){
      if (data.length === 0) {
        displayNode.append(
          "<h4>no results for " + item + " found</h4>"
        )
      } else {
        for (var i=0; i < 20; i++) {
          displayNode.append(
            "<div class='business'>" + data[i].business +
              "<li>Zipcode: "+data[i].zipcode+"</li>" +
            "</div>"
          )
        }
      }
    });
  });
});
