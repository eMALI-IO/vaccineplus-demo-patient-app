
$(document).ready(()=>{
    loaderFadeOut();
})

function loaderFadeOut() {
    $(".loader-wrapper").hide();
}

function showExp(id){
    $('#'+id).fadeIn('slow');
    
}

function hideExp(id){
    $('#'+id).fadeOut();
}