$(document).ready(function() {

  $("#go-button").click(function() {
    
    var searchTerm = $("#input-field").val();
    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&limit=50&callback=?";
   
    $.ajax({
      type:"GET",
      url:api,
      async:false,
      dataType: "json",
      success:function(data) {
       
        $("#output").empty();
        for(var i = 0; i < data[1].length; i++) {
          
          $("#output").prepend("<br><li><a href = "+data[3][i]+">"+data[1][i]+"<p>"+data[2][i]+"</p></a></li><br>");
        }
      },
      error:function(errorMessage) {
        alert("Error");
      }
      
    });
    
   
  
    
  });
   $("#input-field").click(function() {
      $("#input-field").val("");
    });
    
   $("#input-field").keypress(function(key) {
     if(key.which == 13)
       $("#go-button").click();
   });
 
});