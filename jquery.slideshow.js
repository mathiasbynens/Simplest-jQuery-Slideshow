/*!
 * Simplest jQuery Slideshow Plugin – http://github.com/mathiasbynens/Simplest-jQuery-Slideshow
 * Script by Jonathan Snook – http://snook.ca/archives/javascript/simplest-jquery-slideshow
 * Pluginified by Mathias Bynens – http://mathiasbynens.be/
 */
;(function($) {
 $.fn.slideshow = function(settings) {
  // Specify default settings
  var config = {
   timeout: 3000,
   speed: 400 // 'normal'
  };
  // Use custom settings, if any
  if (settings) {
   $.extend(config, settings);
  };
  // We loop through the selected elements, in case the slideshow was called on more than one element e.g. `$('.foo, .bar').slideShow();`
  this.each(function() {
   // Inside the setInterval() block, `this` references the window object instead of the slideshow container element, so we store it inside a var
   var $elem = $(this);
   $elem.children().eq(0).appendTo($elem).show();
   // Iterate through the slides
   setInterval(function() {
    $elem.children().eq(0)
     // Hide the current slide and append it to the end of the image stack
     .hide().appendTo($elem) // As of jQuery 1.3.2, .appendTo() returns the inserted element
     // Fade in the next slide
     .fadeIn(config.speed)
   }, config.timeout);
  });
  // Allow chaining
  return this;
 };
})(jQuery);