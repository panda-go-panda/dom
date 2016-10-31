$(function () {
    $('a').smoothScroll();

    var prevClass = '';

    $('body').on('activate.bs.scrollspy', function (e) {
        var link = $('a', e.target);
        var className = link.data('body-class');

        if (prevClass) {
            $('body').removeClass(prevClass);

            prevClass = '';
        }

        if (className) {
            prevClass = className;
            $('body').addClass(prevClass);
        }
    });
});
