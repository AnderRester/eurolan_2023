var carousel = $('.carousel'),
    currdeg = 0,
    num = 1;

$('.next').on('click', { d: 'n' }, rotate);
$('.prev').on('click', { d: 'p' }, rotate);

function rotate(e) {
    if (e.data.d == 'n') {
        currdeg = currdeg - 45;
        $('.text' + num).fadeOut();
        if (num == 8) {
            num = 1;
        } else {
            num = num + 1;
        }
        $('.text' + num).fadeIn();
    }
    if (e.data.d == 'p') {
        currdeg = currdeg + 45;
        $('.text' + num).fadeOut();
        if (num == 1) {
            num = 8;
        } else {
            num = num - 1;
        }
        $('.text' + num).fadeIn();
    }
    carousel.css({
        '-webkit-transform': 'rotateY(' + currdeg + 'deg)',
        '-moz-transform': 'rotateY(' + currdeg + 'deg)',
        '-o-transform': 'rotateY(' + currdeg + 'deg)',
        transform: 'rotateY(' + currdeg + 'deg)',
    });
}

// const lefterElement = document.querySelector('.lefter');
// const leftElement = document.querySelector('.left');
// const centerElement = document.querySelector('.center');
// const rightElement = document.querySelector('.right');
// const righterElement = document.querySelector('.righter');
// const collapseMenues = document.querySelector('.card.card_body.my-4.p-3.about_card_styles');

// lefterElement.addEventListener('click', function () {
//     collapseMenues.classList.remove('show');
// });

// leftElement.addEventListener('click', function () {
//     collapseMenues.classList.remove('show');
// });

// centerElement.addEventListener('click', function () {
//     collapseMenues.classList.remove('show');
// });

// rightElement.addEventListener('click', function () {
//     collapseMenues.classList.remove('show');
// });

// righterElement.addEventListener('click', function () {
//     collapseMenues.classList.remove('show');
// });

const toggler = document.querySelectorAll('[data-bs-toggle="collapse"]');
const collapsibleEls = document.querySelectorAll('.about_card_styles');

// Loop through all the toggle buttons
toggler.forEach((toggler) => {
    // Add a "click" event listener to each toggle button
    toggler.addEventListener('click', () => {
        // Loop through all the collapsible elements
        collapsibleEls.forEach((collapsibleEl) => {
            // Check if the current collapsible element is not the one that was just opened
            if (collapsibleEl.id !== toggler.dataset.target.slice(1)) {
                // Set the "aria-expanded" attribute of the toggle button to "false"
                toggler.setAttribute('aria-expanded', 'false');
                // Hide the collapsible element
                collapsibleEl.classList.remove('show');
            }
        });
    });
});
