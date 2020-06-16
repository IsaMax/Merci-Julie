window.addEventListener('load', function() {

    document.querySelector('#tri-region').addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector('.liste-regions').classList.toggle('active');
    })
}); 