import $ from 'jquery'

$(document).ready(() => {
  $.get("https://wordwatch-api.herokuapp.com/api/v1/top_word", function(data){
    $('.top-word-title').append(Object.keys(data['word'])[0]);
    $('.word-count').append(Object.values(data['word'])[0]);
  });

  $("#btnSubmit").click(function(){
    var input = $('textarea').val();
    $.post("https://wordwatch-api.herokuapp.com/api/v1/words",
    { word: { value: input } },
    function(data){
      alert('{ message: ' + input + ' added! }');
    });
  });
})
