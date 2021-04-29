

$(document).ready(function () {
            
    $("header div h2, section ul li a, footer ul li ul li").click(function(e){
        e.stopPropagation();
        alert("ROJO");
    });
    
    $("header div p").click(function(e){
        e.stopPropagation();
        alert("MORADO");
    });
    
    $("#lista-uno li").click(function(e){
        e.stopPropagation();
        alert("AZUL");
    });
    
    $(".blanca, section p").click(function(e){
        e.stopPropagation();
        alert("BLANCO");
    });

});