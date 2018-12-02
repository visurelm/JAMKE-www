
function showPicture1() {
  var sourceOfPicture = "https://www.tyovaatemyynti.fi/tuotekuvat/900x600/Huomiopaita_oranssi_pitkhihainen.jpg";
  var img = document.getElementById('pic')
  img.src = sourceOfPicture.replace('90x90', '225x225');
  if (img.style.display === "none") {
	  img.style.display = "block";
	  } else {
	  img.style.display = "none"
	  }	  
} 




function showPicture2() {
  var sourceOfPicture = "https://sporttori.fi/image/cache/data/Sweden%202117/SWEDEN%20TIMMERSDALA%207525927%20orange,%20MIESTEN-280x280.jpg";
  var img = document.getElementById('pic2')
  img.src = sourceOfPicture.replace('90x90', '225x225');
   if (img.style.display === "none") {
	  img.style.display = "block";
	  } else {
	  img.style.display = "none"
	  }	  
} 
  




function showPicture3() {
  var sourceOfPicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoz5CXSyEBRH3LXvTnR2hXJtCQ9nt9oKfZfTS4SI5f08FYQMz8";
  var img = document.getElementById('pic3')
  img.src = sourceOfPicture.replace('90x90', '225x225');
   if (img.style.display === "none") {
	  img.style.display = "block";
	  } else {
	  img.style.display = "none"
	  }	  
} 




function vahenna(elementti, yh, rs){
    t=document.getElementsByName(elementti)
    maara=Number(t[0].value);
    if (maara>0){
        maara=maara-1;
    }
    t[0].value=maara;
    hinta=Number(document.getElementById(yh).value);
    document.getElementById(rs).value=(maara*hinta);
    laskeSumma();
}
function lisaa(elementti, yh, rs){
    e=document.getElementById(elementti);
    maara=Number(e.value);
    if (maara<10){
        maara=maara+1;
    }
    e.value=maara;
    hinta=Number(document.getElementById(yh).value);
    document.getElementById(rs).value=(maara*hinta);
    laskeSumma();
}

function laskeSumma(){
    i=1;
    document.getElementById("summa").value="0";
    while (true){
        rs=document.getElementById("summa"+i);
        i++;
		if (rs==null){
            break;
        }
        document.getElementById("summa").value=Number(document.getElementById("summa").value)+Number(rs.value);
    }
    
}

function laskeRiviSummat(event){
    if (event.keyCode!=13){
        return;
    }
    i=1;
    while (true){
        rs=document.getElementById("summa"+i);
        if (rs==null){
            break;
        }
        maara=Number(document.getElementById("luku"+i).value);
        hinta=Number(document.getElementById("hinta"+i).value);
        rs.value=maara*hinta;
        i++;
    }
    
    laskeSumma();
}

function muutaNimi(){
	var text = document.getElementById("nimi").value;
	var result = text.split(" ");
    document.getElementById("nimi").value = "Jamke "+ result[1];
}
