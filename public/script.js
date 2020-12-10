document.body.className += ' fade-out';
    $(function() {
      $('body').removeClass('fade-out');
  });
/*MENU*/

$('.menu, nav').click(function(){
    if ($('.menu').hasClass('active')) {
      $('nav ul').removeClass('active');
      $('nav').delay(800).fadeOut('slow');
      setTimeout(function() {
        $('.menu').removeClass('active');
        $('.section-wrap').removeClass('active');
        $('body').removeClass('manu');
       }, 800);
    } else {
        $('.menu').addClass('active');
      $('nav').fadeIn('slow');
      $('nav').addClass('active');
      $('nav ul').addClass('active');
      $('.section-wrap').addClass('active');
      $('body').addClass('manu');
    }
    });
    
    /*MOUSEMOVE TRANSFORM 3D*/
    
!(function ($doc, $win) {
        var screenWidth = $win.screen.width / 2,
            screenHeight = $win.screen.height / 2,
            $elems = $doc.getElementsByClassName("elem"),
            validPropertyPrefix = '',
            otherProperty = 'perspective(1000px)',
            elemStyle = $elems[0].style;
    
        if(typeof elemStyle.webkitTransform == 'string') {
            validPropertyPrefix = 'webkitTransform';
        } else if (typeof elemStyle.MozTransform == 'string') {
            validPropertyPrefix = 'MozTransform';
        }
    
    
$doc.addEventListener('mousemove', function (e) {
            var centroX = e.clientX - screenWidth,
                centroY = screenHeight - (e.clientY + 13),
                degX = centroX * 0.04,
                degY = centroY * 0.01,
                $elem
    
            for (var i = 0; i < $elems.length; i++) {
                   $elem = $elems[i];
                $elem.style[validPropertyPrefix] = otherProperty + 'rotateY('+ degX +'deg)  rotateX('+ degY +'deg)';
            };
        });
    })(document, window);
    
    
    
    
$('nav ul li').on('click', function(){
        /*here we make a variable to get the name of the clicked li*/
        var elementName = $(this).attr('name');
        $('.page.active').fadeOut(800).removeClass('active');
        $('.page.'+elementName).delay(1000).fadeIn(1000).addClass('active');
    });


//Declare your vars
var submit = document.getElementById("submit");
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("email");

//Make a display function
function display() {
  var target = document.getElementById('target');
  var firstName = sessionStorage.getItem('firstName');
  var lastName = sessionStorage.getItem('lastName');
  var email = sessionStorage.getItem('email');
  target.innerHTML = "Your name is " + firstName + " " + lastName + " and you will get updates through " + email;
}

//Set the Session Storage
function store() {
  if(firstName.value != "" && lastName.value != "" && email.value != "") {
sessionStorage.setItem('email', email.value);
sessionStorage.setItem('firstName', firstName.value);
sessionStorage.setItem('lastName', lastName.value);
    display();
    }
  else {
    alert('Please fill out the form.');
  }
}