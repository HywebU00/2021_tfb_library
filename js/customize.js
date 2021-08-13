// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        customPaging: function(slider, i) {
            var title = $(slider.$slides[i]).find('img').attr('alt').trim();
            return $('<button type="button" aria-label="' + title + '"/>').text(title);
        }
    });
    // 廣告輪播
    $('.adSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
    // 
    $('.cppic_slider').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        // pauseOnHover: true,
        // pauseOnFocus: true,
        // focusOnSelect: true,
        // accessibility: true,
        // lazyLoad: 'ondemand',
        // ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });

    //輔助偏好設定
    $('.help_p').click(function() {
        $('.f-panel').slideToggle();
    })

    //accordionqa
    $(".accordionblock").each(function () {
      var _accordionItem2 = $(this).children(".Q");
      _accordionItem2.each(function () {
        function accordion2(e) {
          $(this).next(".A").slideToggle();
          $(this).parent().siblings().children(".A").slideUp();
          $(this).parent().siblings().children(".Q").removeClass("turnicon");
          $(this).toggleClass("turnicon");
          e.preventDefault();
      }
      $(this).click(accordion2);
      $(this).keyup(accordion2);
  });
  });


});


//顯示部份內容
$(document).ready(function(){
  var _window = $(window);
      // 可開合的說明文字區
      // 預設顯示三行
      // 目前一頁只能有一個 .expansile
      var _expansile = $('.expansile').addClass('partial');
      var textLess = '局部顯示';
      var textAll = '顯示更多';
      var hFull;
      var hPartial = _expansile.height();
      _expansile.wrapInner('<div class="innerPart"></div>')
      _expansile.append('<span class="fadeout"></span>').append('<span class="readAll"></span>');
      var _readAll = _expansile.find('.readAll').text(textAll);

      _expansile.each(function(){
        var _this = $(this);
        hFull = _this.find('.innerPart').innerHeight();
        _readAll.click(function(){
          if (_this.hasClass('partial')){
            _this.animate({height: hFull}, 500, function(){
              _this.removeClass('partial');
              _readAll.text(textLess);
          })
        } else {
            _this.animate({height: hPartial}, 500, function(){
              _this.addClass('partial');
              _readAll.text(textAll);
          })
        }
    })
    });

      function getExpansileNewHeight(){
        hFull = _expansile.find('.innerPart').innerHeight();
        if(_expansile.hasClass('partial')){
          _expansile.removeAttr('style');
      } else {
          _expansile.height(hFull);
      }
  }

      // window resize
      var winResizeTimer;
      _window.resize(function(){
        clearTimeout(winResizeTimer);
        winResizeTimer = setTimeout(function(){
          getExpansileNewHeight();
      })
    });
  })

