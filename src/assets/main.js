$(function() {

  // your code will go here


      $.ajax({
            url: 'https://www.codeschool.com/users/3276827.json',
            dataType: 'jsonp',
            success: function(response) {
              // handle response
               for(i = 0; i < response.courses.completed.length; i++){
                    $("#badges").prepend("<div class='course'><h3>"+response.courses.completed[i].title+"</h3><img src='"+response.courses.completed[i].badge+"'/><a href='"+response.courses.completed[i].url+"' class='btn btn-primary' target='_blank'>See Course</a>");
                } 

            }
      });
    
    
});
