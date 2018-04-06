$(function() {
$('#projects').on('click', function(e){
    e.preventDefault();
    document.body.style.backgroundImage='none';
    $('.main-content').remove();
    $('#ajax-container-about').empty();
    $('#ajax-container-projects').load("ajax/projects.html");
})
$('#about').on('click', function(e){
    e.preventDefault();
    document.body.style.backgroundImage='none';
    $('.main-content').remove();
    $('#ajax-container-projects').empty();
    $('#ajax-container-about').load("ajax/about.html");
  })
$()
});
