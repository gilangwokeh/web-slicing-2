const toggle = document.querySelector('.menu input')
const nav = document.querySelector('nav ul')

toggle.addEventListener('click', function (){
  nav.classList.toggle('slide')
})

$(document).ready(function(){
  $('#arrow_forward').click(function(){
    $('#image-nav2').slideToggle('slow');
  });
});

$(document).ready(function(){
  $('#arrow_back').click(function(){
    $('#image-nav3').slideToggle('slow');
  });
});