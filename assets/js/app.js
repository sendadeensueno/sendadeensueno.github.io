$(document).ready(function() {
changeProp();
// Scroll to
function scrollTop (element) {
  $("html, body").animate({scrollTop: $('#'+element).offset().top }, 2000);
}

// Link function
$('.navbar-brand').click(function() {
  scrollTop('root');
})
$('#about-link').click(function() {
  scrollTop('about');
})
$('#instalations-link').click(function() {
  scrollTop('instalations');
})
$('#project-link').click(function() {
  scrollTop('project');
})
$('#contact-link').click(function() {
  scrollTop('contact');
})

 // Change prop

 function changeProp() {
   var scroll = $(window).scrollTop();
   var height = $(window).height();
   var navbar = $('.navbar-default');
   var navbarHeader = $('.navbar-header');
   var navbarToggle = $('.navbar-toggle');
   var nav = $('.navbar-nav');
   var logo = $('.navbar-brand img');
   if (scroll > (height - 10)) {
     navbar.css("height", 50);
     navbarHeader.css("height", 50);
     nav.css("margin-top", 0);
     navbarToggle.css("margin-top", 8);
     logo.attr("src","");
     logo.attr("src","assets/img/logo-2.png");
     logo.css("width", 250);
   } else {
     navbar.css("height", 100);
     navbarHeader.css("height", 100);
     nav.css("margin-top", 25);
     navbarToggle.css("margin-top", 25);
     logo.attr("src","");
     logo.attr("src","assets/img/logo.png");
     logo.css("width", 150);
   }
 }

// Scroll to navbar
$(window).scroll(function() {
  changeProp();
});

// Click puzzle
function leftText(element) {
  $('#leftSide > div').each(function() {
    $(this).hide(1000);
  })
  $('#' + element).show(1000);
};
function rightText(element) {
  $('#rightSide > div').each(function() {
    $(this).hide(1000);
  })
  $('#' + element).show(1000);
};
function bottomText(element) {
  $('#bottomSide > div').each(function() {
    $(this).hide(1000);
  })
  $('#' + element + 'B').show(1000);
};
$('#animals-click').click(function() {
  leftText('animals');
  bottomText('animals');
});
$('#activities-click').click(function() {
  leftText('activities');
  bottomText('activities');
});
$('#classroom-click').click(function() {
  rightText('classroom');
  bottomText('classroom');
});
$('#chicken-click').click(function() {
  rightText('chicken');
  bottomText('chicken');
});

$('#read-more-objetive').click(function() {
  var button = $('#read-more-objetive');
  var text = $('#read-objetive');
  readMore(button, text)
})
$('#read-more-methodology').click(function() {
  var button = $('#read-more-methodology');
  var text = $('#read-methodology');
  readMore(button, text)
})
$('#read-more-evaluation').click(function() {
  var button = $('#read-more-evaluation');
  var text = $('#read-evaluation');
  readMore(button, text)
})

function readMore(button, text) {
  resetMore();
  if(text.is(':hidden')){
    button.text('Leer menos');
    text.show(1000);
  } else {
    button.text('Leer más');
    text.hide(1000);
  }
}

function resetMore() {
  $('.read-more button').each(function() {
    $(this).text('Leer más');
  })
  $('.read').each(function() {
    $(this).hide(1000);
  })
}

});
