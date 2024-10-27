document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile navigation toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = navLinkFade 0.5s ease forwards ${ index / 7 + 0.3 } s;
            }
        });

        burger.classList.toggle('toggle');
    });

    // Manejo de modales
    var modals = document.getElementsByClassName('modal');
    var btns = document.getElementsByClassName('btn-detalles');
    var spans = document.getElementsByClassName("close");

    for (var i = 0; i < btns.length; i++) {
        btns[i].onclick = function (e) {
            e.preventDefault();
            var modal = document.getElementById(this.getAttribute('data-target').slice(1));
            modal.style.display = "block";
        }
    }

    for (var i = 0; i < spans.length; i++) {
        spans[i].onclick = function () {
            for (var j = 0; j < modals.length; j++) {
                modals[j].style.display = "none";
            }
        }
    }

    window.onclick = function (event) {
        for (var i = 0; i < modals.length; i++) {
            if (event.target == modals[i]) {
                modals[i].style.display = "none";
            }
        }
    }
});