$(document).ready(function() {
  // scroll page to top on load
  $('html, body').animate({scrollTop:0}, 'slow');

  // show only the first section when the page loads
  $(".panel").slice(0,1).show().addClass('activePanel');
  
  // hide all the other sections
  $('.panel').slice(1).hide(); 
  
  // Change the first link in the navigation to an active status
  $(".button-slide").slice(0,1).addClass('activeLink');

  // when you click on a navigation, do something
  $(".button-slide").click(function(){
      
      if(!$(this).hasClass('sublink'))
      {
        // scroll up all subnavs
        $(".subnav").slideUp('fast');
        
        // if the link has a subnav, slide it down
        if($(this).siblings('.subnav'))
        {
          $(this).siblings(".subnav").slideDown('slow');//css('display','block');
        } 
      }

    if($(this).hasClass('activeLink'))
    {

    } else { 
      
      
      // if the nav link is not active, then slide
      // up the current active panel (section)
      $('.activePanel').slideUp('slow');
      
      // we then slidedown the panel (section) that has the 
      // same class name as the navigation ID
      var contentPanel = $(this).attr('id');
      $("."+contentPanel).addClass('activePanel').slideDown('slow');
      
      // then we remove the active link status from its current
      // place and add .activelink to the nav link clicked
      $('.activeLink').toggleClass("activeLink");
      $(this).toggleClass("activeLink");
      
      // jut to be sure, we scroll the page to the top so that the user
      // always sees the top headings after clicking a new link
      $('html, body').animate({scrollTop:0}, 'slow');
    }
    return false;
  });

});