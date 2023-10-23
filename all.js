
// ABOUT
function tabAbout(){
  var tab1 = document.getElementById("conTabAbout");

  // ensenya
  tab1.classList.toggle("showAbout");

}

// PESTAÑAS

// 

function filterTab(){

  var llistaEtiquetes = document.getElementsByClassName("filtro");

  for (var i=0; i<llistaEtiquetes.length; i++){
    llistaEtiquetes[i].classList.add("filtroInactive");
  }

  event.currentTarget.classList.remove("filtroInactive");
  console.log(event.currentTarget);



  var llistaCajas = document.getElementsByClassName("caja_trabajos");

  for (var i=0; i <llistaCajas.length; i++){
    llistaCajas[i].style.display="none";
  }

  var filterClick = event.currentTarget.innerHTML;
  console.log(filterClick);

  var filterSelected = document.getElementsByClassName(filterClick);
  for (var i =0; i <filterSelected.length; i++) {
    filterSelected[i].style.display="block";
    filterSelected[i].style.borderRight="2px solid white";
    filterSelected[i].style.borderLeft="1px solid white";
    filterSelected[i].style.borderTop="0px";
    filterSelected[i].style.width="auto";
  }



}
  












// CONTACTE
function tabContacto(){
  var tab1 = document.getElementById("conTabContacto");

  // ensenya
  tab1.classList.toggle("showContact");

}




// + INFO

var showMoreInfo = true;


function tabInfo(){
  var tab1 = document.getElementById("conTabInfo");

  // ensenya
  tab1.classList.toggle("showInfo");

  var info = document.getElementById("triggerInfo");

  if (showMoreInfo) {
    info.innerHTML="-Info";

  }

  else{
    info.innerHTML="+Info";
  }

  showMoreInfo = !showMoreInfo;

}








// SLIDER AUTOMÀTIC

var counterSurt = 0;
var counterEntrar = 0;

  function slideShowAnim(){

    var llistaImgBGAnim = document.getElementsByClassName("fonsTractament");

    // incremento els comptadors
    counterEntrar++;
    counterSurt= counterEntrar-1;


    // resetejo el comptadors

    if (counterEntrar == llistaImgBGAnim.length){

      counterEntrar = 0;
    }


    if (counterSurt <0){
      counterSurt= llistaImgBGAnim.length-1;
    } 


    for (var i=0; i<llistaImgBGAnim.length; i++){

      // aquí trec qualsevol de les classes de l'animació dels meus elements del fons.

      llistaImgBGAnim[i].classList.remove("animEntrar");
      llistaImgBGAnim[i].classList.remove("animSortir");
      llistaImgBGAnim[i].classList.remove("imgAmagada");


      // aquí comprovo i assigno per a cada element del loop quina classe li toca en funció del comptador

      if (i==counterEntrar){

        llistaImgBGAnim[i].classList.add("animEntrar");
      }

      else if (i==counterSurt) {
      llistaImgBGAnim[i].classList.add ("animSortir");

      }

      else{
      llistaImgBGAnim[i].classList.add("imgAmagada");

      }
    }
  }

