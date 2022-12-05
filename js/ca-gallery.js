'use stirct'

function onInit() {
  renderProj()
}

function renderProj() {
  const projects = getProj()
  var strHtmls = projects.map(proj => `
  <div class="col-md-4 col-sm-6 portfolio-item">
  <a onclick="onOpenModal('${proj.id}')" class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
   <div class="portfolio-hover">
   <div class="portfolio-hover-content">
   <i class="fa fa-plus fa-3x"></i>
   </div>
   </div>
   <img class="img-fluid" src="img/portfolio/${proj.id}.png" alt="${proj.name}">
   </a>
   <div class="portfolio-caption">
   <h4>${proj.name}</h4>
   <p class="text-muted">${proj.title}</p>
 </div>
  `
  )
  $('.proj-container').html(strHtmls)
}


function onOpenModal(projId) {
  console.log('hello');
  var proj = getProjById(projId)
  console.log('proj = ', proj)
  var strHtml = `
              <!-- Project Details Go Here -->
              <h2>${proj.name}</h2>
              <p class="item-intro text-muted">${proj.title}</p>
              <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.png" alt="${proj.name}">
              <p>${proj.desc}</p>
              <ul class="list-inline">
                <li>Published at ${getDate(proj.publishedAt)}</li>
                <li>Category: ${proj.lables}</li>
              </ul>
              <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
  `

  $('.modal-body').html(strHtml)
}

function sendEmail() {
  var email = $('.email').val()
  var subject = $('.subject').val()
  var msg = $('.msg').val()
  var url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${msg}  `
  window.open(url, '_blank')

}



(function ($) {
  'use strict'

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict
