var card = document.querySelector('#card-toggle');
var toggle = document.querySelector('#toggle-service');

card.addEventListener('click', cardToggle);
toggle.addEventListener('click', toggleService);

function cardToggle(event) {
    event.preventDefault();
    var iconHide = document.querySelector('#hide-icon');
    var iconShow = document.querySelector('#show-icon');
    var revealCard = document.querySelector('#reveal-card');

    revealCard.classList.toggle('reveal-hide');
    iconShow.classList.toggle('reveal-hide-icon');
    iconHide.classList.toggle('hide-icon');
}

function toggleService(event) {
    event.preventDefault();
    var service = document.querySelector('#service');
    var btnOpen = document.querySelector('#toggle-btn');
    var btnClose = document.querySelector('#toggle-btn-back');
    service.classList.toggle('toggle-open');
    btnOpen.classList.toggle('toggle-hide');
    btnClose.classList.toggle('toggle-show');
}
