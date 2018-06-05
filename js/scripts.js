$(document).ready(function() {

  var word = "";

  $("form").submit(function(event) {
    event.preventDefault();
    word = $("#wordValue").val();
    modifyString(word);
    addText(word);
    $("#wordValue").val("");
  });

  function modifyString(words) {
    var vowels = ["a", "e", "i", "o", "u"];
    var stringArray = words.split("");

    for(i = 0; i < stringArray.length; i++) {
      for(j = 0; j < vowels.length; j++) {
        if(stringArray[i] === vowels[j]) {
          stringArray[i] = "-";
        }
      }
    }
    word = stringArray.toString();
  }

  function addText(words) {
    var newWord = "";

    for(i = 0; i < words.length; i++) {
      if(words.charAt(i) != ",") {
        newWord += words.charAt(i);
      }
    }
    $("#result").text(newWord);
  }

});
