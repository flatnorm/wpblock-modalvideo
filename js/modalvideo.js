(function($){
    console.log('modal....')

    var modalVideoMovieWrap = $('.modal-video-movie-wrap');
    console.dir(modalVideoMovieWrap)

    $('.video-carousel .wp-block-group__inner-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<span class="carousel-arrow prev"></span>',
        nextArrow: '<span class="carousel-arrow next"></span>',
        centerMode: true,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
              }
            },
        ]
    });

    if ($(".js-modal-video").length) { //クラス名js-modal-videoがあれば以下を実行
      $(".js-modal-video").modalVideo({
        channel: "youtube",
        youtube: {
          rel: 0, //関連動画の指定
          autoplay: 0, //自動再生の指定
          controls: 0, //コントロールさせるかどうかの指定
        }
      });

      var singleVideo = $('.js-modal-video');
      singleVideo.each((index, element) => {
        $(element).append('<span class="play-button"></span>')
      });
      singleVideo.click(function(e){
        console.log('clicked...')
        var clickedVideoText = e.currentTarget.innerText
        console.dir(clickedVideoText)
        var videoTarget = $('.modal-video-inner')[0]
        console.dir(videoTarget)
        $(videoTarget).append('<span class="modal-video-text">' + clickedVideoText + '</span>');
      });
    }

})(jQuery);