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

// == animation JS Style ==

//demo 02
$("#demo01").animatedModal({
    animatedIn:'lightSpeedIn',
    animatedOut:'bounceOutDown',
    color:'#fff',
    // Callbacks
    beforeOpen: function() {
        console.log("The animation was called");
    },           
    afterOpen: function() {
        console.log("The animation is completed");
    }, 
    beforeClose: function() {
        console.log("The animation was called");
    }, 
    afterClose: function() {
        console.log("The animation is completed");
    }
});
$("#demo02").animatedModal({
    animatedIn:'zoomIn',
    animatedOut:'bounceOut',
    color:'#fff',
    // Callbacks
    beforeOpen: function() {
        console.log("The animation was called");
    },           
    afterOpen: function() {
        console.log("The animation is completed");
    }, 
    beforeClose: function() {
        console.log("The animation was called");
    }, 
    afterClose: function() {
        console.log("The animation is completed");
    }
});

// == Netlify Form JS Style ==

$("#contact_form").submit(function(e) {
    e.preventDefault();
  
    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      alert("Thank you! You'll get a feedback from us shortly.");
    });
    document.querySelector('#contact_form').reset();
  });