
// webから確認できるものがwindow
// documentはcssなどのidを取得して確認できる。
// $(window).on('load scroll', function () {

//     var box = $('.fadeIn');
//     var animated = 'animated';

//     box.each(function () {

//         var boxOffset = $(this).offset().top;
//         var scrollPos = $(window).scrollTop();
//         var wh = $(window).height();

//         if (scrollPos > boxOffset - wh + 100) {
//             $(this).addClass(animated);
//         }
//     });

// });

function scrollChk() {
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();


    jQuery('.scroll-animation').not('.active').each(function () {
        var pos = $(this).offset().top;

        if (scroll > pos - windowHeight) {
            $(this).addClass("active");
            console.log("scroll",scroll);
            console.log("window",windowHeight);
            console.log("pos",pos);

        }
    });
}
$(window).scroll(function () {
    scrollChk();
});
$('body').on('touchmove', function () {
    scrollChk();
});

/**
 * 練習サンプル
 */
//ブラウザごとオブジェクトを返すのが異なるための処理
/**
 * 左記がIE,Firefox,Opera
 * 右記がChrome,Safari
 */
// window.onscroll = function() {
//     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
// }