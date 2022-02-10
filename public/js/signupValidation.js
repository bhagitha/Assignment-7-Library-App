$(function() {

    $("#fname_error_message").hide();
    $("#sname_error_message").hide();
    $("#email_error_message").hide();
    $("#password_error_message").hide();

   //  var title,author,genre;
   
    var error_fname = false;
    var error_sname = false;
    var error_email = false;
    var error_password = false;
    var error_retype_password = false;

    $("#form_fname").focusout(function(){
       check_fname();
    });
    $("#form_sname").focusout(function() {
       check_sname();
    });
    $("#form_email").focusout(function() {
       check_email();
    });
    $("#form_password").focusout(function() {
       check_password();
    });
  

    function check_fname() {
       var pattern = /^[a-zA-Z]*$/;
       var fname = $("#form_fname").val();
       if (pattern.test(fname) && fname !== '') {
          $("#fname_error_message").hide();
          $("#form_fname").css("border-bottom","2px solid #34F458");
       } else {
          $("#fname_error_message").html("invalid");
          $("#fname_error_message").show();
          $("#form_fname").css("border-bottom","2px solid #F90A0A");
          error_fname = true;
       }
    }

    function check_sname() {
       var pattern = /^[a-zA-Z]*$/;
       var sname = $("#form_sname").val()
       if (pattern.test(sname) && sname !== '') {
          $("#sname_error_message").hide();
          $("#form_sname").css("border-bottom","2px solid #34F458");
       } else {
          $("#sname_error_message").html("invalid");
          $("#sname_error_message").show();
          $("#form_sname").css("border-bottom","2px solid #F90A0A");
          error_sname = true;
       }
    }

   //  function check_password() {
   //    var pattern = /^[a-zA-Z]*$/;//check an image file
   //    var sname = $("#form_password").val();
   //    if (pattern.test(sname) && sname !== '') {
   //       $("#password_error_message").hide();
   //       $("#form_password").css("border-bottom","2px solid #34F458");
   //    } else {
   //       $("#password_error_message").html("invalid image");
   //       $("#password_error_message").show();
   //       $("#form_password").css("border-bottom","2px solid #F90A0A");
   //       error_password = true;
   //    }
   // }

    function check_email() {
      var pattern = /^[a-zA-Z]*$/;
       var email = $("#form_email").val();
       if (pattern.test(email) && email !== '') {
          $("#email_error_message").hide();
          $("#form_email").css("border-bottom","2px solid #34F458");
       } else {
          $("#email_error_message").html("Invalid");
          $("#email_error_message").show();
          $("#form_email").css("border-bottom","2px solid #F90A0A");
          error_email = true;
       }
    }

    $("#registration_form").submit(function() {
       error_fname = false;
       error_sname = false;
       error_email = false;
       error_password = false;
    

       check_fname();
       check_sname();
       check_email();
       check_password();
      
      //  title=$("#form_fname").val();
      //  author=$("#form_sname").val();
      //  genre=$("#form_email").val();
      //  $.post("http://localhost:5001/addbooks",
      //  {form_fname:title,form_sname:author,form_email:genre},function(data){
      //    if(data==='yes'){
      //       alert("success");
      //    }
      //  });

       if (error_fname === false && error_sname === false && error_email === false ) {
          alert("Book added Successfully");
         
          return true;
       } else {
          alert("Please Fill the form Correctly");
          return false;
       }


    });
    
 });
 function readURL(input){

   if(input.files && input.files[0]){
      var reader=new FileReader();
      reader.onload=function(e){
         $('#form_img').attr('src',e.target.result);

      }
      reader.readAsDataURL(input.files[0]);
   }
}
$('#form_image').change(function(){
   readURL(this);
});