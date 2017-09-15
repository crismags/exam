(function () {
  $(".carousel-content").slick({
    // normal options...
    infinite: true,
    dots: false ,
    arrows: false,
    fade: false,
    cssEase: 'linear',
    speed: 700,  
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed:2000,  
    variableWidth: false,
    adaptiveHeight: true,
    
    // the magic
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        variableWidth: false,
        adaptiveHeight: true,
        fade: false,
        infinite: true
      }
    },{

        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          adaptiveHeight: true,
          fade: false,
          infinite: true
        }
      },{

        breakpoint: 300,
        settings: "unslick" // destroys slick

        }]
  }); 

  window.onload = function(){
    var canvas = document.getElementById("myCanvas");
    var ctx=canvas.getContext("2d");
    ctx.font="bold italic 21px Roboto";

    ctx.textAlign = "center";
    ctx.fillStyle = "#363435";
    ctx.fillText("cris".toUpperCase(), 53, 23);
    ctx.fillStyle = "#30ad37";
    ctx.fillText("mags".toUpperCase(), 109, 23);
  };

  wow = new WOW({
    mobile: false  // default
  });wow.init();
})();
