// A: ehsen
let span = document.querySelector("span"),
  input = document.querySelector("input"),
  cevremelumat=document.querySelector(".cevremelumat");


  

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let value=input.value

  if(value>10 && value<100){
      span.style.width=value + "px";
      span.style.height= value + "px";
      let uzunlug= value*6
      let sahe= (value*value)*3
      cevremelumat.innerHTML= "Cevrenin Uzunlugu:"+ uzunlug + "Cevrenin Sahesi:" + sahe

  }
  else{
    cevremelumat.innerHTML="YUKSEK REQEM DAXIL ETDINIZ!"
  }

});







