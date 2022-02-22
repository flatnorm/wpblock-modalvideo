(function($){
    console.log('modal....')
    if ($(".js-modal-video").length) { //クラス名js-modal-videoがあれば以下を実行
        $(".js-modal-video").modalVideo({
          channel: "youtube",
          youtube: {
            rel: 0, //関連動画の指定
            autoplay: 0, //自動再生の指定
            controls: 0, //コントロールさせるかどうかの指定
          },
        });
    }

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
})(jQuery);