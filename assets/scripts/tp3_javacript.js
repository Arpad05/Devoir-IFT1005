//entete

$(document).ready(function() {
    var elementVisible = window.localStorage.getItem('itemsInBasket') === 'true';
    // Si l'élément n'était pas visible avant le rechargement de la page, on le cache
    if (!elementVisible) {
        $('.count').hide();
    }else{
        $('.count')[0].innerHTML = window.localStorage.getItem('nbItems');
        $('.count').show();
    }
    


    // $('#add-btn').click(function() {
    //     $('.count').toggle();

    //     // On enregistre l'état de l'affichage dans le localStorage du navigateur
    //     localStorage.setItem('elementVisible', $('.class').is(':visible'));
    // });
});
/*
function resetBasket(){
    $('.count')[0].innerHTML ="0";
    $('.count').css("visibility", "hidden");
}*/

/*
function updateBasket(){
    
    if ($('.count')[0].innerHTML == "0"){
        $('.count')[0].innerHTML = "1";
        $('.count').show();
    } else{
        var nbItems = parseInt($('.count')[0].innerHTML);
        nbItems++;
        $('.count')[0].innerHTML = nbItems.toString();
        $('count')[0].innerHTML = "criss";
    }
    
}*/
    