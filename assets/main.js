$(function() {

  // your code will go here


      $.ajax({
            url: 'https://www.codeschool.com/users/3276827.json',
            dataType: 'jsonp',
            success: function(response) {
              // handle response
               for(i = 0; i < response.courses.completed.length; i++){
                    $("#badges").prepend("<div class='course'></div>");
                } 

            }
      });
    
    
});
