
/*MENU*/

$('.menu, nav').click(function(){
    if ($('.menu').hasClass('active')) {
      $('nav ul').removeClass('active');
      $('nav').delay(800).fadeOut('slow');
      setTimeout(function() {
        $('.menu').removeClass('active');
        $('.section-wrap').removeClass('active');
       }, 800);
    } else {
        $('.menu').addClass('active');
      $('nav').fadeIn('slow');
      $('nav').addClass('active');
      $('nav ul').addClass('active');
      $('.section-wrap').addClass('active');
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


/*Removal Requests Page*/
const requests = [];

fetch('/api',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then((fromServer) => fromServer.json())
    .then((jsonFromServer) => requests.push(...jsonFromServer))
    .catch((err) => {
      console.log(err);
    });

function findMatches(wordToMatch, requests) {
    return requests.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.service_request.match(regex) || place.date_request_opened.match(regex) || place.request_status.match(regex) 
        || place.sla.match(regex) || place.request_name.match(regex) || place.street_address.match(regex) 
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, requests);
    const html = matchArray.map(place => {
        return `
        <li>
            <span class="service_request">${place.service_request}</span></br>
            <span class="date_request_opened">${place.date_request_opened}</span></br>
            <span class="request_status">${place.request_status}</span></br>
            <span class="request_name">${place.city}, ${place.request_name}</span>
            <span class="street_address">${place.street_address}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
    
   console.log(matchArray);
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);