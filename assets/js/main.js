window.addEventListener('load', function() {

  
  document.querySelector('.btn-hamburger').addEventListener('click', function(e) {
    console.log(this)
    e.preventDefault();
    this.classList.toggle('active');
    document.querySelector('.menu-items').classList.toggle('active');
    
  })
  
  /* Slider intro homepage */
  let swiperAccueil = new Swiper('.swiper-container-home', {
    speed: 1000,
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    fadeEffect: {
    crossFade: true
  },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });


    /* Slider témoignages */
    let swiperTemoignage = new Swiper('.swiper-container-blockquote', {
      speed: 1000,
      effect: 'slide',
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    

  /* Slider des logos partenaires */
    let swiperLogos = new Swiper('.swiper-container-multipleviews', {
        slidesPerView: 6,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
        },
        autoplay: {
          delay: 5000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

          breakpoints: {
            
            300: {
              slidesPerView: 1,
              spaceBetween: 10
            },

            600: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            890: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            1350: {
              slidesPerView: 5,
              spaceBetween: 10
            },
            1700: {
              slidesPerView: 6,
              spaceBetween: 10
            }
          }
      });


      /* Slider gabarit */
    let swiperGabarit = new Swiper('.swiper-actu', {
      slidesPerView: 3,
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      autoplay: {
          delay: 5000,
        },
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
    
    });

    let swiperTb = new Swiper('.swiper-bloc-tb', {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    let swiperActu = new Swiper('.swiper-actu', {
      slidesPerView: 3,
      spaceBetween: 36,
      pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },
      loop: true,
      autoplay: {
          delay: 5000,
        },
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
      breakpoints: {
   
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
       
        990: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 36
        }
      }
  });


    /* gère le bloc gris de tri (par zone géographique / par date etc...) */
    if(document.querySelectorAll('.bloc-tri .elt').length > 0) {
      
      let eltsTri = document.querySelectorAll('.bloc-tri .elt');
      for(let i = 0 ; i  < eltsTri.length ; i++) {

        eltsTri[i].addEventListener('click', function(e) {
            e.preventDefault();
    
            this.classList.toggle('active');
        })
  
      }
    }

  /* gère l'accordéon de la page espace partenaire */

    if(document.querySelectorAll('.bloc-documents .sub-liste > a').length > 0) {

        let subList =  document.querySelectorAll('.bloc-documents .sub-liste > a');

        console.log(subList)

        for(let i = 0 ; i < subList.length ; i++) {

            subList[i].addEventListener('click', function(e) {
            
                e.preventDefault();
                
                
                e.path[1].classList.toggle('active');
            })
        }
     }


      /* Système d'ancre pour la page "formations et animation" */

    if(document.querySelector('.container-bloc-gd.listex2')!= undefined)
    {

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

    }

    if(document.querySelector('.map-france') != undefined) {
      
    
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

        
      if(window.innerWidth <= 590) {
        
        document.querySelector('.infos-contact').scrollIntoView(true);
      }

     });

     zones[i].addEventListener('click', function(e) {

      classDptClick = this.classList[0];
      activeNombre(classDptClick, 'active');  
      effaceClasses(dpt, zones,  contacts);
      activeElementsClick(classDptClick);
      activePopUp();

      if(window.innerWidth <= 590) {
        
        document.querySelector('.infos-contact').scrollIntoView(true);
      }

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
      
        if(window.innerWidth <= 700) {
      
            console.log('blabla')
            document.querySelector('.container-title-desc.white .title-desc').scrollIntoView(true);
        
      }

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
  }


  if(document.querySelector('.presentation-bloc.contact') != undefined) {

    let cards = document.querySelectorAll('.cards .card-item');
   
    for(let i = 0 ; i < cards.length ; i++) {

      cards[i].addEventListener('click', function(e) {

        e.preventDefault();

        let scroll = document.querySelector('.container-contact-form');

        if(this.classList.contains('demande-rdv')) {
          document.querySelector('.container-contact-form h3 .titre-rdv').style.display= 'block';
          document.querySelector('.container-contact-form h3 .titre-infos').style.display= 'none';
          scroll.scrollIntoView();
        }

        if(this.classList.contains('demande-infos')) {
          document.querySelector('.container-contact-form h3 .titre-rdv').style.display= 'none';
          document.querySelector('.container-contact-form h3 .titre-infos').style.display= 'block';
          scroll.scrollIntoView(true);
        }

      })
    }
  }
}); 
