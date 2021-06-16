$(function(){
    $("#feedback_form").on('submit', function(e){
        e.preventDefault();
        //console.log($("#feedback_form").serialize());
        sendMessage($(this));
    });
    $('input, textarea').on('focus', function(){
        if($(this).parents(".form_row").hasClass("has_err")){
            $(this).parents(".form_row").removeClass("has_err");
            $(this).next("div").text("");

        }
    })
});
function isValidEmail(email) {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  };

function sendMessage($form){
    let valid = true;
    $form.find('*[data-required]').each(function(){
        if($(this).val()===""){
            valid = false;
            $(this).parents(".form_row").addClass("has_err");
            $(this).next("div").text("Field is required")
        }else{
            if($(this).attr("name")==="email"){
                if(isValidEmail($(this).val())){
                    valid = false;
                    $(this).parents(".form_row").addClass("has_err");
                    $(this).next("div").text("Invalid email address")
                }
            }
        }
    });
    if(valid){
        axios 
        .get('')
        .then((resp)=>{
            if(resp.data.status==="success"){
                topPanel.error("ne OK");
                $('#feedback_form').trigger('reset');
            }else {
                topPanel.error(resp.data.massage);
            }
        })
        .catch((err)=>{
            topPanel.error(err);
        })
    }
}