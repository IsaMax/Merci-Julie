window.addEventListener('load', function() {

    let subList =  document.querySelectorAll('.bloc-documents .sub-liste > a');

    console.log(subList)

    for(let i = 0 ; i < subList.length ; i++) {

        subList[i].addEventListener('click', function(e) {
        
            e.preventDefault();
            
            
            e.path[1].classList.toggle('active');
        })
    }
  
}); 
