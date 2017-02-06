$(function() {

  // your code will go here


      $.ajax({
            url: 'https://www.codeschool.com/users/3276827.json',
            dataType: 'jsonp',
            success: function(response) {
              // handle response
                $.each(response.courses.completed, function(){
                   $("#badges").prepend("<div class='course></div>"); 
                });
            }
      });
    
    
});
