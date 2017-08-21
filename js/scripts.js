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
  });
});
