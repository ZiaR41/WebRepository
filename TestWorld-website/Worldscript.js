window.addEventListener('load', function() {         // Event listener for once window is launched
    const title = document.getElementById('title');
    title.classList.add('twinkle');            // refer to twinkle class

    setTimeout(function() {        // Timer for 1.2s once tab is launched.
        title.classList.remove('twinkle');
    }, 1200); 
});