$(document).ready(function() {
  if('localStorage' in window)){
     if(localStorage.getItem('test')){
         $('#addToHomeScreen').remove();
     }else {
         if $('#addToHomeScreen).bind('dialogclose', function(event, ui) {
              localStorage.setItem('test', true);
         }
     }
  }
});​