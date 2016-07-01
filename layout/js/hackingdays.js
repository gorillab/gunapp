$(document).ready(function(){

  $('#btn-login-hacking').click(function(){
      disableBodyScroll();
  		$('.modal-login').show();
  });

  $('.modal--close').click(function(){
  		closeAllModal();
      enableBodyScroll();
  });

  $('.modal-login .btn-open-register').click(function(){
      closeAllModal();
      $('.modal-register').show();
  });

  $('.modal-login .btn-open-forpass').click(function(){
  		closeAllModal();
  		$('.modal-fogotpassword').show();
  });
  
  $('.btn-back-login').click(function(){
  		closeAllModal();
  		$('.modal-login').show();
  });
  $('.link-post').click(function(){
      disableBodyScroll();
      $('.v-panel').show();
  });
  $('.login--form').submit(function(){
    event.preventDefault();
    LoadOtherPage();
  });
});

function closeAllModal(){
	$('.modal-login').hide();
  $('.modal-register').hide();
	$('.modal-fogotpassword').hide();
  $('.v-panel').hide();

}
function disableBodyScroll(){
  $('html, body').css({
    'overflow': 'hidden',
  });
}
function enableBodyScroll(){
  $('html, body').css({
    'overflow': 'auto',
  });
}
function LoadOtherPage(){
  window.location.href = 'setting.html';
}