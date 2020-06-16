window.addEventListener('load', function() {


    let dpt =  document.querySelectorAll('.map-france .dpt');
    let dptChiffre = document.querySelectorAll('.map-france .nbr');
    let zones = document.querySelectorAll('.zones-france li');
    let contacts = document.querySelectorAll('.infos-contact div');
    let classDptClick;
    

    for(let i = 0 ; i < dpt.length ; i++) {

      dpt[i].addEventListener('mouseover', function(e) {

       let classDptHover = this.classList[1];
        activeNombre(classDptHover, 'click');
        
      });

      dpt[i].addEventListener('click', function(e) {

        classDptClick = this.classList[1];
        activeNombre(classDptClick, 'active');

        effaceClasses(dpt, zones,  contacts);
        
        activeElementsClick(classDptClick);
        activePopUp();

     });

     zones[i].addEventListener('click', function(e) {

      classDptClick = this.classList[0];
      activeNombre(classDptClick, 'active');  
      effaceClasses(dpt, zones,  contacts);
      activeElementsClick(classDptClick);
      activePopUp();

     });
    }

 /* gère la pop-up recrutement (postuler) */   
    function activePopUp() {
        
      document.querySelector('.infos-contact .active .active-popup').addEventListener('click', function(e) {

      document.querySelector('.container-contact-form').classList.add('temp');

      window.setTimeout(function() {
        document.querySelector('.container-contact-form').classList.add('active');
        insereTxtSujet();
      }, 200)
     

      fermePopUp();
    }); 
    }

    document.querySelector('.container-contact-form form').addEventListener('submit', function(e) {

    alert('message envoyé');
    });
    

    function insereTxtSujet() {

      switch(classDptClick) {
        case 'grand-ouest':
          zonesContactEnSujet = 'Contact Grand-Ouest (Zone 1)';
          break;
        case 'ile-de-france':
          zonesContactEnSujet = 'Contact Île-de-France (Zone 2)';
          break;
        case 'nord':
          zonesContactEnSujet = 'Contact Nord/Nord-Est (Zone 3)';
          break;
        case 'centre-ouest':
          zonesContactEnSujet = 'Contact Centre-Ouest/Sud-Ouest (Zone 4)';
          break;
        case 'centre-est':
        zonesContactEnSujet = 'Contact Centre-Est (Zone 5)';
          break;
        case 'sud-est':
        zonesContactEnSujet = 'Contact Sud/Sud-Est (Zone 6)' ;
          break;
      }

      document.querySelector('.container-contact-form.active .zone-contact').innerHTML = zonesContactEnSujet;

      document.querySelector('.container-contact-form.active .nom-contact').innerHTML = document.querySelector('.infos-contact .'+classDptClick+' figcaption').dataset.fonctionContact;

      document.querySelector('.container-contact-form.active .nom-contact').innerHTML = document.querySelector('.infos-contact .'+classDptClick+' figcaption').dataset.nomContact;

    }

    function fermePopUp() {
      document.querySelector('.container-contact-form .cross').addEventListener('click', function(e) {
        document.querySelector('.container-contact-form').classList.remove('temp');
        document.querySelector('.container-contact-form').classList.remove('active');
      });
    }
    
    
    function effaceClasses(elt1, elt2, elt3) {

      /* On efface les classes d'activation */
      for(let c = 0 ; c < dpt.length ; c++) {

        elt1[c].classList.remove('click');
        elt2[c].classList.remove('active');
        elt3[c].classList.remove('active');
      }
    }

    function activeElementsClick(target) {

      document.querySelector('.map-france .dpt.'+target).classList.add('click');

      document.querySelector('.container-map-contact .zones-france').classList.add('opacity');

      document.querySelector('.container-map-contact .zones-france .'+target).classList.add('active');
      
      document.querySelector('.container-map-contact .infos-contact .'+target).classList.add('active');
    }


    function activeNombre(target, etat) {

      for(let b = 0 ; b < dptChiffre.length ; b++) {
        dptChiffre[b].classList.remove(etat);
      }
        
      document.querySelector('.map-france span.'+target).classList.add(etat);

    }

});