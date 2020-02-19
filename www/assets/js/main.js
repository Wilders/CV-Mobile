$(window).on('load', function() {
    $('.level-bar-inner').each(function() {
        var itemWidth = $(this).data('level');
        $(this).animate({
            width: itemWidth
        }, 2500);
    });
});
jQuery(document).ready(function($) {
    $('.level-bar-inner').css('width', '0');
    GitHubCalendar("#github-graph", "Wilders");
});