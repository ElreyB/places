// Business logic

function Places(location, landmarks, language, frequency){
  this.location = location;
  this.landmarks = landmarks.split(" ");
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
  });
});
