function area() {

	var radio=document.getElementById('number1').value
	var area=3.14*(radio*radio);
    alert("El valor del circulo es:  "+ area);

};
function longitud(){
	var radio=document.getElementById('number1').value
	var longitud=radio*2;
    alert("El valor de la circunferencia es:  "+ longitud);
}