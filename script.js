document.body.onload=addElements;
document.getElementById("in").addEventListener("keyup", cerca);

function addElements(){
    const sezPiloti = document.querySelector("#grid");

    for (let i in nomi){
        const divPiloti = document.createElement("div");
        sezPiloti.appendChild(divPiloti);

        divPiloti.classList.add('flex');

        const new_h1 = document.createElement("h1");
        new_h1.textContent = nomi[i];
        divPiloti.appendChild(new_h1);
        
        const new_img = document.createElement("img");
        new_img.src = immagini[i];
        divPiloti.appendChild(new_img);
        new_img.classList.add('dimImmagine');

        const new_p = document.createElement("p");
        new_p.textContent = descrizioni[i];
        divPiloti.appendChild(new_p);
        new_p.classList.add('hidden');        

        const new_fav=document.createElement("img");
        new_fav.src= aggPreferiti;
        divPiloti.appendChild(new_fav);
        new_fav.classList.add('preferiti');

        const didascalia=document.createElement("strong");
        didascalia.textContent='Maggiori Dettagli';
        divPiloti.appendChild(didascalia);
    }

    const grid=document.querySelectorAll("#grid strong");
    for(let gr of grid){
        gr.addEventListener('click', details);
    }

    const preferiti=document.querySelectorAll('.preferiti');
    for(let p of preferiti){
        p.addEventListener('click', gestionePreferiti);
    }
}

function details(event){
    const details = event.currentTarget.parentNode.querySelector('p');
    const text = event.currentTarget.parentNode.querySelector('strong');
    if(text.textContent ==='Maggiori Dettagli'){
        text.textContent='Nascondi Dettagli';
        details.classList.remove('hidden');
    }else{
        details.classList.add('hidden');
        text.textContent='Maggiori Dettagli';
    }
}

function gestionePreferiti(event){
    const nome = event.currentTarget.parentNode.querySelector('h1');
    const immagine = event.currentTarget.parentNode.querySelector('.dimImmagine');    
    const pref = event.currentTarget.parentNode.querySelector('.preferiti');

    if(pref.src=== aggPreferiti){

        const favorite = document.querySelector("#favorite");
        favorite.classList.remove('hidden');

        const sezPreferiti = document.querySelector("#sezPreferiti");
        const divPreferiti = document.createElement("div");

        sezPreferiti.appendChild(divPreferiti);
        divPreferiti.classList.add('flex');

        const new_h1 = document.createElement("h1");
        new_h1.textContent = nome.textContent;
        divPreferiti.appendChild(new_h1);

        const new_img = document.createElement("img");
        new_img.src = immagine.src;
        divPreferiti.appendChild(new_img);
        new_img.classList.add('dimImmagine');

        const new_fav=document.createElement("img");
        new_fav.src= rimPreferiti;
        divPreferiti.appendChild(new_fav);
        new_fav.classList.add('preferiti');

        pref.classList.add('hidden');

        const preferiti=document.querySelectorAll(".preferiti");
        for(let rim of preferiti){
            rim.addEventListener('click', gestionePreferiti);
        }         
    }else{
        const inPreferiti=document.querySelectorAll('#grid h1');
        const iconaPreferiti=document.querySelectorAll('#grid img.preferiti');
        for(let i in nomi){
            if(inPreferiti[i].textContent===nome.textContent){
                iconaPreferiti[i].classList.remove('hidden');
            }
        }
        event.currentTarget.parentNode.remove('sezPreferiti');
    }

    if(!document.querySelector('#sezPreferiti div')){
        const noFavorite=document.querySelector('#favorite');
        noFavorite.classList.add('hidden');
    }
}

function cerca(event) {
    const input = document.getElementById("in");
    const filtro = input.value.toUpperCase();
    const lista = document.querySelectorAll("#grid h1");
  
    for (let i in lista) {
      const testo = lista[i].textContent;
  
      if (testo.toUpperCase().indexOf(filtro) > -1) {
        
        lista[i].parentNode.classList.remove('hidden');
      } else {
       
        lista[i].parentNode.classList.add('hidden');
      }
    }
  }