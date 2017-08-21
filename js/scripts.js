// Business logic

function Places(location, landmarks, language, frequency){
  this.location = location;
  this.landmarks = landmarks.split(",");
  this.language = language;
  this.frequency = frequency;
}

$(document).ready(function(){
  $("#places-form").submit(function(event){
    event.preventDefault();

    var locationInput = $("input#location").val();
    var landmarksInput = $("input#landmarks").val();
    var languageInput = $("input#language").val();
    var frequencyInput = parseInt($("input#frequency").val());

    var newPlaces = new Places(locationInput, landmarksInput, languageInput, frequencyInput);

    $("ul#places").append(`<li><span class="location">${newPlaces.location}</span></li>`)

    $("input#location").val("");
    $("input#landmarks").val("");
    $("input#language").val("");
    $("input#frequency").val("");

    $(".location").click(function(){
      $("ul#info").append(`<li><span class="landmarks">Landmarks: ${newPlaces.landmarks}</span></li>`);
      $("ul#info").append(`<li><span class="landmarks">Primary Language: ${newPlaces.language}</span></li>`);
      $("ul#info").append(`<li><span class="landmarks">Times Visited: ${newPlaces.frequency}</span></li>`);

      $("#clear").click(function(){
        $("ul#info").empty();
      });
    });
  });
});
