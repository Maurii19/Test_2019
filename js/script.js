function caputar(){
	//constructor Persona con dos atributos
	function Persona(nombre, edad){
		this.nombre=nombre;
		this.edad=edad;
	}
	//Guardamos lo que se introduce en el input con id 'nombre'
	var nombreCapturar = document.getElementById("nombre").value;
	//Guardamos lo que se introduce en el input con id 'edad'
	var edadCapturar = document.getElementById("edad").value;

	//Creamos objeto (variable global) nuevaPersona que utiliza el constructor Persona
	nuevaPersona = new Persona(nombreCapturar, edadCapturar);
	agregarPersona();
}

var arrayPersonas= [];

function agregarPersona(){
	arrayPersonas.push(nuevaPersona);
	arrayPersonas.sort();
	document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevaPersona.nombre+'</td><td>'+nuevaPersona.edad+'</td></tbody>';
}

