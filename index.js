window.addEventListener("scroll", function(e){
    // Sélectionne l'élément à déplacer
    const trigger = document.querySelectorAll(".trigger");
    //console.log(trigger.style);
    //console.log(window.pageYOffset);

    // Récupère la valeur de scroll de la page
    var offsetY = window.pageYOffset;

    // Multiplie la valeur du scroll par une valeur custom

    var index = 0, length = trigger.length;
    for (index; index < length; index++){
        var pos = offsetY * 0.5;
        trigger[index].style.transform = "translate3d(0px,"+pos+"px, 0px)";
    }
});