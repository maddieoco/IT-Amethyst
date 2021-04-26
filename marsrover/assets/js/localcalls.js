var apiKey = 'CLCSqX5PPKCTH0dE0dmuI5jheUHAt3zaoAmH6BfS'; 

      //Event listener for submit button
      document.addEventListener('DOMContentLoaded', submitButtonsReady);

      function submitButtonsReady(){
        document.getElementById('dateInput').addEventListener('click', function(event){
          var request = new XMLHttpRequest();
          var date = document.getElementById('dateValue').value;    //Date input from user
          var roverName = "";   //Initialize roverName variable until checked
          var buttonStatus1 = document.getElementById('button1').checked;
          var buttonStatus2 = document.getElementById('button2').checked;
          var buttonStatus3 = document.getElementById('button3').checked;
        })

          //Assigns rover name variable based on selected button
          if(buttonStatus1 === true){
            roverName = "curiosity";
          }
          else if(buttonStatus2 === true)
          {
            roverName = "opportunity";
          }
          else 
          {
            roverName = "spirit";
          }}

 //AJAX ROVER API request
 request.open('GET', 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + roverName +'/photos?earth_date='+ date + '&api_key=' + apiKey, true);
 request.addEventListener('load', function() {
 
  if(request.status >= 200 && request.status < 400) {
     var response = JSON.parse(request.responseText);
     console.log(response);
  }})
