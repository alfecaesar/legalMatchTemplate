$(document).foundation()

$(document).ready(function(){
    
    $('select[name=categoryDp]').change(function(){
        var thisVal = $(this).val();
        if(thisVal != ''){
            $('#formField_3_Modal').foundation('open');
        }
    });
    
    $('input[name=autoPlaceDp]').keyup(function(){
        if($(this).val() != ''){
            $('.dynamic-output').slideDown(100).find('span').text($(this).val());
        }
        else{
            $('.dynamic-output').slideUp(100).find('span').text($(this).val());
        }
    })
    
})