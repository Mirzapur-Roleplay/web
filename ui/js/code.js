$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top-nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
