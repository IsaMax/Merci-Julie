window.addEventListener('load', function() {

    /* Système d'ancre pour la page "formations et animation" */

    let listeFormationsLi = document.getElementById('liste-formations').querySelectorAll('li a');
    let listeAnimationsLi = document.getElementById('liste-animations').querySelectorAll('li a');
    
    let listeFormations = document.querySelectorAll('.container-photo-colonnex2.formation');
    let listeAnimations = document.querySelectorAll('.container-photo-colonnex2.animation');
    let tsLesElts = document.querySelectorAll('.container-photo-colonnex2');
    let listeTri = document.querySelectorAll('.bloc-tri .elt  > span');

  
    for(let i = 0 ; i < listeFormationsLi.length ; i++) {
      listeFormationsLi[i].href = '#formation_'+i;
      listeFormations[i].id = 'formation_'+i;
    }

    for(let i = 0 ; i < listeAnimationsLi.length ; i++) {
      listeAnimationsLi[i].href = '#animation_'+i;
      listeAnimations[i].id = 'animation_'+i;
    }
    
    for(let c = 0 ; c < 3 ; c++) {
      listeTri[c].addEventListener('click', function(e) {

        e.preventDefault();
        nettoieElt();

        let id = this.id;

        switch(id) {
          case 'voir-tout':
              activeElt(tsLesElts);
            break;
          case 'formations':
            activeElt(listeFormations);
          break;
          case 'animations':
            activeElt(listeAnimations);
          break;
        }
        
      });
    }
      
      function activeElt(elt) {

        for(let e = 0 ; e < elt.length ; e++) {
          elt[e].classList.add('active');
        }
       
      }

      function nettoieElt() {
        
        for(let e = 0 ; e < tsLesElts.length ; e++) {
          tsLesElts[e].classList.remove('active');
        }
      }

       
}); 