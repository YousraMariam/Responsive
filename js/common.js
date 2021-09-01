var header = document.querySelector('header');
var menuBtn = document.getElementById('menuBtn');
var menu = document.getElementById('menu');
var closeMenuBtn = document.getElementById('closeMenuBtn');
var modal = document.getElementById('modal');
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');
var lastScrollTop = 0;

// Menu button click event handler
menuBtn.onclick = function() {
    menu.classList.add('show');
    this.classList.add('hide');
    this.blur();
};

// Close menu button click event handler
closeMenuBtn.onclick = function() {
    menu.classList.remove('show');
    menuBtn.classList.remove('hide');
};

// Open modal button click event handler
openModalBtn.onclick = function() {
    modal.classList.add('show');
};

// Close modal button click event handler
closeModalBtn.onclick = function() {
    modal.classList.remove('show');
};

// Window scroll event handler
window.onscroll = function() {
    //console.log('scrollTop: ' + document.documentElement.scrollTop);
    var currentScrollTop = document.documentElement.scrollTop;
    var threshold = 150;

    // Check the scrolling direction
    if (currentScrollTop > lastScrollTop && currentScrollTop > threshold) {
        // Going down and threshold passed, hide header
        header.classList.add('hide');
    } else if (currentScrollTop < lastScrollTop) {
        // Going up, show header
        header.classList.add('condensed');
        header.classList.remove('hide');
    }

    // Make header great again if needed
    if (currentScrollTop <= threshold) {
        header.classList.remove('condensed');
    }

    // Update lastScrollTop to current scroll value
    lastScrollTop = currentScrollTop;
};