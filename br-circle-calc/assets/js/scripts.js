<script>
$( "#CircleForm" ).validate({

});

function DisplayCircle() {

    if ($("#CircleForm").valid()) {
                // if the form is valid, then make the calculations
                 document.getElementById("diameter").innerHTML = "";
                 document.getElementById("circumference").innerHTML = "";
                 document.getElementById("area").innerHTML = "";

                 var radius; // string representation of radius
                 var radiusfp; // floating point value of raidus
                 var diameter; // floating point value of diameter
                 var circumference; // floating point value of circumference
                 var area; // floating point value of area

                 // read in the radius as a string
                 radius = document.getElementById("radius").value;

                 // Convert number from string to Floating Point
                 radiusfp = parseFloat( radius ); 

                 // calculate diameter
                 
                 diameter = calcDiameter(radiusfp);
 
                 // calculate the area
                 area = calcArea(radiusfp);
                 
                 // calculate the circumference
                 circumference = calcCircumference(radiusfp);

                 // display the diameter
                 document.getElementById("diameter").innerHTML = diameter.toString();
                 
                 // display the circumference
                 document.getElementById("circumference").innerHTML = circumference.toString();
                 
                 // display the area
                 document.getElementById("area").innerHTML = area.toString();
            }

}

          function calcDiameter (r)
          {
                             // calculate the diameter
                 return r * 2;
          }
          
          function calcArea (r)
          {
                             // calculate the area
                 return Math.PI * ( r * r );
          }

        function calcCircumference (r)
          {
                             // calculate the circumference
                 return  Math.PI * ( r * 2 );
          }


          function clearForm()
        {
            document.getElementById("radius").value = "";
            document.getElementById("radiuserror").innerHTML = "";
            document.getElementById("diameter").innerHTML = "";
            document.getElementById("circumference").innerHTML = "";
            document.getElementById("area").innerHTML = "";
        }             
        
        // this is a copy from the triangle form for comparison
        function clearForm2()
        {
            document.getElementById("leg1").value = "";
            document.getElementById("leg1error").innerHTML = "";
            document.getElementById("leg2").value = "";
            document.getElementById("leg2error").innerHTML = "";
            document.getElementById("hypotenuse").innerHTML = "";
        }


