let ingreseSuNombre = prompt ("Hola cómo estás?, cuál es tu nombre?");
alert("Hola " + ingreseSuNombre + " Felicitaciones! si estás aca es porque tenés un boucher para canjear");
let ingreseBoucher = prompt("Ingresá el nombre de tu boucher para conocer su valor (Black, Gold o Platinum), si querés salir poné ESC");

while (ingreseBoucher != "ESC" ){
    switch (ingreseBoucher){
        case "Gold":
            alert("Tenés $30.000 para gastar en nuestra Tienda Online");
            break
        case "Black":
            alert("Tenés $10.000 para gastar en nuestra Tienda Online");
            break    
        case "Platinum":
            alert("Tenés $20.000 para gastar en nuestra Tienda Online");
            break    
        default :
            alert("Nombre de boucher incorrecto.")  
            break;  
    }
ingreseBoucher = prompt("Ingresá el nombre de tu boucher para conocer su valor (Black, Gold o Platinum), si querés salir poné ESC");

};



