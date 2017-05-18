function agregarTareas(id){
//constructor lista
function ListaNueva(){
	this.addList = function(){
		var nameList = document.getElementById("agregarLista").value;
		var container = document.getElementById("canvasList");

		var lista = document.createElement("div");
		var listaNombre = document.createTextNode(nameList);


		lista.appendChild(listaNombre);
		container.appendChild(lista);
	};
}

var button = document.getElementById("buttomList");
button.addEventListener("click",function(){
	var agregoLista = new ListaNueva();
	agregoLista.agregar();
})



//constructor tareas
function newTask(){

}

	
	

	

