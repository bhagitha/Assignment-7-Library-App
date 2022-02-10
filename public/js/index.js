 $(function() {

         $("#email_error_message").hide();
         $("#password_error_message").hide();
        
         var error_email = false;
         var error_password = false;
  
         $("#form_email").focusout(function() {
            check_email();
         });
         $("#form_password").focusout(function() {
            check_password();
         });
    
        
         function check_password() {
            var password = $("#form_password").val();
            if (password !== '12345') {
               $("#password_error_message").html("Incorrect password");
               $("#password_error_message").show();
               $("#form_password").css("border-bottom","2px solid #F90A0A");
               error_password = true;
            } else {
               $("#password_error_message").hide();
               $("#form_password").css("border-bottom","2px solid #34F458");
            }
         }

         function check_email() {
            var pattern = 'admin';
            var email = $("#form_email").val();
            if (pattern === email && email !== '') {
               $("#email_error_message").hide();
               $("#form_email").css("border-bottom","2px solid #34F458");
            } else {
               $("#email_error_message").html("Invalid username");
               $("#email_error_message").show();
               $("#form_email").css("border-bottom","2px solid #F90A0A");
               error_email = true;
            }
         }
     
         $("#registration_form").submit(function() {
            error_email = false;
            error_password = false;

            check_email();
            check_password();
            
            if (error_email === false && error_password === false) {
               // callback_validate();
               alert("Success");

            } else {
               alert("Please Fill the form Correctly");
               return false;
            }
         });        
    
// callback function implementation
// function callback_validate() {
//     var username = $("#form_email").val();
//     var password = $("#form_password").val();

//     function valid(uname, passw, callback) {
//         ((uname === "admin") && (passw === "12345"))? callback():alert("invalid");
//       }
//    (valid(username, password, page_load))?true:false;
// }

// function page_load() {
//     alert("success");
//     window.location.href = "todoList.html";
// }
});