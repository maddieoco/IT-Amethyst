

var apiKey = '9Tn2WuDuvpyUzRGyYKKCt09AJJGpqfNSPBlWLvWz'; 
  
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

          //Assigns rover name variable based on selected button
          if(buttonStatus1 === true)
          {
            roverName = "curiosity";
          }
          else if(buttonStatus2 === true)
          {
            roverName = "opportunity";
          }
          else 
          {
            roverName = "spirit";
          }

          //AJAX ROVER API request
          request.open('GET', 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + roverName +'/photos?earth_date='+ date + '&api_key=' + apiKey, true);
          request.addEventListener('load',function(){
           if(request.status >= 200 && request.status < 400){
              var response = JSON.parse(request.responseText);
              console.log(response);

              //Display content to user
              document.getElementById('imageStatus').textContent = 'Found';
             for (let i = 0; i < 25; i++) {
              //const response = array[index];
              document.getElementById("image" + i).src = response.photos[i].img_src;
            }


            } 

           
            else //Display error to user
            { 
                  console.log("Error in network request: " + request.statusText);

             }});
          //Prompts user to check syntax until proper response comes through.
          document.getElementById('imageStatus').textContent = 'Please try a different date or check your syntax!';
          request.send(null);
          event.preventDefault();
        })

      }
 
     // for (i = 0; i &lt; 25; i++) {
        // Note how we construct the name for image1, image2, etc...this sets the image source
       // document.getElementById("image" + i).src = msg.photos[i].img_src;
        //do something to set the tool tip = msg.photos[i].camera.full_name;