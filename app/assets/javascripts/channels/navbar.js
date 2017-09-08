$(window).scroll(function() {

        if ($(window).scrollTop() > 400 ){

          $('.site-nav').addClass('show');
          $('.logo').addClass('nav-logo');

        } else {

          $('.site-nav').removeClass('show');
          $('.logo').removeClass('nav-logo');

        };
      });

      $('.scroll').on('click', function(e){
        e.preventDefault()

        $('html, body').animate({
          scrollTop : $(this.hash).offset().top
        }, 1500);
      });
