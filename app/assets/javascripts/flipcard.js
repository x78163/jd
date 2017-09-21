function ybcarousel(){

  this.attr_class = '.ybcarousel';
  this.attr_class = '.ybcarousel';
  this.attr_prec_class = 'ybcarouselprec';
  this.attr_suiv_class = 'ybcarouselsuiv';
  this.attr_label = '#ybcarouslabel';
  this.attr_img_active = 'yb_carousel_img_active';

  this.carousel_active = 0;
  this.tab_images = [];

  this.exec_time = 2500;

  this.global_interval;

  this.initialize = function(){
    var ceci = this;
    $('.ybcarousel > div > img').each(function(index){
      if(index == 0){
        $(this).addClass(ceci.attr_img_active)
        $(ceci.attr_label).text('img_'+index);
      }else{
        $(this).addClass(ceci.attr_suiv_class);
      }
      $(this).addClass(ceci.attr_img);
      $(this).attr('alt', ceci.attr_img+'_'+index);
      var tailleCarousel = $(ceci.attr_class).width();
      ceci.tab_images.push($(this));
    });
    $('body').prepend('<div class="blurcache"></div>');
    ceci.launch();
  }

  this.destroy = function(){
    $('.ybcarousel > div > img').each(function(index){
      $(this).removeAttr('class');
    });
    ceci.initialize();
  }

  this.launch = function() {
    var ceci = this;
    var lindex = ceci.carousel_active;
    var prec;
    var suiv;
    ceci.global_interval = setInterval(function(){
      $('.'+ceci.attr_prec_class).removeClass(ceci.attr_prec_class).addClass(ceci.attr_suiv_class)
      prec = ceci.tab_images[lindex];
      if(lindex == ceci.tab_images.length -1){
        lindex = 0;
      }else{
        lindex += 1;
      }
      suiv = ceci.tab_images[lindex];
      this.carousel_active = lindex;
      prec.removeClass(ceci.attr_img_active).removeClass(ceci.attr_suiv_class).addClass(ceci.attr_prec_class);
      suiv.removeClass(ceci.attr_suiv_class).removeClass(ceci.attr_prec_class).addClass(ceci.attr_img_active);

      $(ceci.attr_label).text('IMG_'+lindex);
    }, ceci.exec_time);
  }

  this.stopCarousel = function(){
    var ceci = this;
    clearInterval(ceci.global_interval);
  }
}

var carousel = new ybcarousel();
carousel.initialize();

$('.switch').on('click', function(){
  if($(this).find('input').is(':checked')){
    carousel.stopCarousel();
    $('#superSVG').remove();
  }else{
    carousel.launch();
    var ddd = '<svg id="superSVG" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M30,60a30,30 0 1,0 60,0a30,30 0 1,0 -60,0" /></svg>';
    $('main').append(ddd);
  }
})
