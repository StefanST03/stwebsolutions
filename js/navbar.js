$(".menu-btn").click(function() {
    $(".nav-links").toggleClass("active");
    $(".menu-btn").toggleClass("shown");
});

$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $(".navigation-menu").addClass('shadowed');
    } else {
        $(".navigation-menu").removeClass('shadowed');
    }
})