function isNumberKey(evt){
    var charCode=(evt.which)?evt.which:event.keyCode
    if(charCode>31 && (charCode<48||charCode>57))
    return false;
    return true;
}

$(function formValidate(){

$('email').on('focusOut',function(){
    if($('email').val() != ""){
        if(validateEmail($('email').val())){

        }else{
            $('error').text("Invalid Email...!");
            $('error').fadeIn('slow');
        }
    }else{
        $('error').text("invalid email");
        $('error').fadeIn('slow');
    }
});
});

function validateEmail(eVal) {
    var val=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(val.test(eVal))
        return true;
        else
        return false;
    

}