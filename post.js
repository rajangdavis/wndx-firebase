$('wndx-sidebar input#login').click(function() {
						console.log('hello?');
	var AUTH_TOKEN = $('meta[name="csrf-token"]').attr('content');
	$.ajaxSetup({
  		beforeSend: function(xhr) {
    	xhr.setRequestHeader('X-CSRF-Token', AUTH_TOKEN);
  		}
		}); 

  $.ajax({
      type: "POST", 
      url: "/login?&authenticity_token="+encodeURIComponent(AUTH_TOKEN), 
      data:{ username : $('#username').val() , password : $('#password').val() },
      dataType: "JSON"
      //success:window.location.replace("/")
      });

  return false;
});	