  function kirjoita(){
	alert("Halloo!");
}
  
  function m1()
	{
   var value = parseInt(document.getElementById('kpl1').value, 0);
    value = isNaN(value) ? 0 : value;
    value--;
		if (value<0){
		document.getElementById('kpl1').value = 0;
		}
		else {
		document.getElementById('kpl1').value = value;
		}
	}
function p1(){
   var value = parseInt(document.getElementById('kpl1').value, 0);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('kpl1').value = value;
	}
  function m2(){
   var value = parseInt(document.getElementById('kpl2').value, 0);
    value = isNaN(value) ? 0 : value;
    value--;
	if (value<0){
	document.getElementById('kpl2').value = 0;
	}
	else {
	document.getElementById('kpl2').value = value;
	}
  }
function p2(){
   var value = parseInt(document.getElementById('kpl2').value, 0);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('kpl2').value = value;
}
  function m3(){
   var value = parseInt(document.getElementById('kpl3').value, 0);
    value = isNaN(value) ? 0 : value;
    value--;
	if (value<0){
	document.getElementById('kpl3').value = 0;
	}
	else {
	document.getElementById('kpl3').value = value;
	}  
}
function p3(){
   var value = parseInt(document.getElementById('kpl3').value, 0);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('kpl3').value = value;
	}
		function sum1(){
		var hinta=parseFloat(document.getElementById('hinta1').innerHTML);
		var kpl=parseFloat(document.getElementById('kpl1').value);
		var summa=hinta*kpl;
					
			if (!isNaN(summa))
			{
			var yhteensa=document.getElementById('yht1').innerHTML;
			document.getElementById('yht1').innerHTML=summa.toFixed(2);
			}
		}
		function sum2(){
		var hinta=parseFloat(document.getElementById('hinta2').innerHTML);
		var kpl=parseFloat(document.getElementById('kpl2').value);
		var summa=hinta*kpl;
					
			if (!isNaN(summa))
			{
			var yhteensa=document.getElementById('yht2').innerHTML;
			document.getElementById('yht2').innerHTML=summa.toFixed(2);
			}
		}
		function sum3(){
		var hinta=parseFloat(document.getElementById('hinta3').innerHTML);
		var kpl=parseFloat(document.getElementById('kpl3').value);
		var summa=hinta*kpl;
					
			if (!isNaN(summa))
			{
			var yhteensa=document.getElementById('yht3').innerHTML;
			document.getElementById('yht3').innerHTML=summa.toFixed(2);
			}
		}
		
function summa(){
	var yht1 = parseFloat(document.getElementById('yht1').innerHTML);
	var yht2 = parseFloat(document.getElementById('yht2').innerHTML);
	var yht3 = parseFloat(document.getElementById('yht3').innerHTML);
	var summa = yht1+yht2+yht3;
	if (!isNaN(summa))
	{
	var y=document.getElementById('y').innerHTML;
	document.getElementById('y').innerHTML=summa.toFixed(2);
	}
	}


function validate(evt) {
  var theEvent = evt || window.event;

  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
		} 
	else {

      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
	}
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
	}
	}
	function posti1(){
		var posti1=parseFloat(document.getElementById('toimitusTapa1').value);
		document.getElementById('postikulu').innerHTML=posti1.toFixed(2);
}
function posti2(){
		var posti1=parseFloat(document.getElementById('toimitusTapa2').value);
		document.getElementById('postikulu').innerHTML=posti1.toFixed(2);
}
function posti3(){
		var posti1=parseFloat(document.getElementById('toimitusTapa3').value);
		document.getElementById('postikulu').innerHTML=posti1.toFixed(2);
}
function posti4(){
		var posti1=parseFloat(document.getElementById('toimitusTapa4').value);
		document.getElementById('postikulu').innerHTML=posti1.toFixed(2);
}
function kokoSum(){
		var y=parseFloat(document.getElementById('y').innerHTML);
		var postikulu=parseFloat(document.getElementById('postikulu').innerHTML);
		var kaikki = document.getElementById('kaikki').value;
		var loppusumma = y + postikulu;
		document.getElementById('kaikki').value=loppusumma.toFixed(2);

}

function validate1() {
	document.getElementById("kpl1").addEventListener("keyup", function(event) {
		if (event.keyCode == 9||13) {
		   sum1();
		   summa();
		   }
		   })

}

function validate2() {
	document.getElementById("kpl2").addEventListener("keyup", function(event) {
		if (event.keyCode == 9||13) {
		   sum2();
		   summa();
		   }
		   })

}
	   
function validate3(){
	document.getElementById("kpl3").addEventListener("keyup", function(event) {
		if (event.keyCode == 9||13) {
		   sum3();
		   summa();
		   }
		   })
}
	 

