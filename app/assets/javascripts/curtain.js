$(function() {
  $('<img src="http://lorempixel.com/1600/1200/nature/5" />').on( 'load', function( ) {
    $('.container').addClass('loaded');

    var height = 0;
    $( '.page' ).each(function( i ) {
      $( this ).css({
        zIndex:'-'+i
      });

      $( this ).data('start', height);
      height += $( this ).height();
      $( this ).data('end', height);
    } );
    $( '.container' ).css({ height : height });
  } )
})
$( window ).on( 'scroll touchmove', function( ) {
  var activePage = $( '.page.active' );

  if ( activePage ) translate( activePage );

} )

function translate( activePage ) {
  var scrollTop = $(window).scrollTop();
  var start = activePage.data( 'start' );
  var end = activePage.data( 'end' );
  if ( (scrollTop) >= start && scrollTop <= end ) {
    var dist =  activePage.data( 'start' ) - $(window).scrollTop()
    activePage.css({
    webkitTransform:'translate(0,'+dist+'px)',
       mozTransform:'translate(0,'+dist+'px)',
        msTransform:'translate(0,'+dist+'px)',
         oTransform:'translate(0,'+dist+'px)',
          transform:'translate(0,'+dist+'px)'
    })
  } else if ( scrollTop >= start ) {
    activePage.css({
    webkitTransform:'translate(0,'+end+'px)',
       mozTransform:'translate(0,'+end+'px)',
        msTransform:'translate(0,'+end+'px)',
         oTransform:'translate(0,'+end+'px)',
          transform:'translate(0,'+end+'px)'
    }).removeClass('active').next('.page').addClass('active');

  } else if ( scrollTop <= end ) {
    activePage.css({
    webkitTransform:'',
       mozTransform:'',
        msTransform:'',
         oTransform:'',
          transform:'',
    }).removeClass('active').prev('.page').addClass('active');

  }

};
