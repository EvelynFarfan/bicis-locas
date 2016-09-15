function validateForm(){
	var nom = document.getElementById("name").value;
  var contr = document.getElementById("input-password").value;
	var apellido = document.getElementById("lastname").value;
  var cor = document.getElementById("input-email").value;
	var opcion = document.querySelector("select").value;

	if (nom.length == 0 && apellido == 0 && cor == 0 && contr == 0) {
		alert ("Complete los campos");
	} else {
		if( nom == null || nom.length == 0 || nom == ""){
		  alert("Escribe tu nombre.");
		}else if ( /[0-9]/.test(nom)){
			alert("No ingrese números.")
		}else if ( /^[a-z]/.test(nom.charAt(0))){
			alert ("Escriba el primer caracter de su nombre en mayúscula.")
		}
		if( apellido == null || apellido.length == 0 || apellido == ""){
		  alert("Escribe tu apellido.");
		}else if ( /[0-9]/.test(apellido)){
			alert("No ingrese números.")
		}else if ( /^[a-z]/.test(apellido.charAt(0)) ){
			alert ("Escriba el primer caracter de su apellido en mayúscula.")
		}
		var emailRegex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	    if(!emailRegex.test(cor)) {
	      alert("Ingrese un correo válido.");
	    };
	    if(contr == null || contr.length == 0){
	    	alert("Ingresa tu contraseña")
	    }else if ( contr.length < 6 ){
	    	alert("Contraseña no válida, debe contener al menos 6 carácteres.")
	    }
	    if (contr == "123456" || contr == "098765" || contr == "password"){
	    	alert("Contraseña no válida")
	    }
	    if(opcion == 0) {
	    	alert("Elige una opción.");
	    }    
		};
}