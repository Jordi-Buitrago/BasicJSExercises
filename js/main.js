// ----------1----------

//Function to calculate the double of the number, if the number is more than 100, change the class.
function calcularDoble(){
    let numero = document.getElementById("numero").value;
    let doble = numero * 2;
    document.getElementById("doble").innerHTML = doble;
    console.log(doble);

    if (doble > 100) {
        document.getElementById("doble").className = "bg-success";
    }
    else {
        document.getElementById("doble").className = "bg-danger";
    }
}
    
// ----------2----------

//Function to change the image, text and URL when the mouse is over it
function cambiarImagen(){
    document.getElementById("emoji").src="images/suspendido.png";
    document.getElementById("mensaje").innerHTML="Estoy suspendido";
    document.getElementById("enlace").href="suspendido.html";
}
function cambiarImagen2(){
    document.getElementById("emoji").src="images/aprobado.png";
    document.getElementById("mensaje").innerHTML="Estoy aprobado";
    document.getElementById("enlace").href="aprobado.html";
}	

// ----------3----------
        		
//Function to add a block with the color selected
function añadirBloque(){
    let bloque = document.createElement("div");
    bloque.className = "col-2";
    bloque.style.backgroundColor = document.getElementById("color").value;
    bloque.style.height = "150px";
    document.getElementById("bloques").appendChild(bloque);
}
	

	

		
		

		
