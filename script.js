$(document).ready(function () {
    const $accordions = $('.accordion');
    $accordions.first().addClass('active');

    $('.accordion-header').on('click', function () {
        const $accordion = $(this).closest('.accordion');

        const isActive = $accordion.toggleClass('active').hasClass('active');

        if (isActive) {
            $accordions.not($accordion).removeClass('active');
        }
    });

    function openTab($tabLink) {
        var tabName = $tabLink.attr('onclick').match(/'([^']+)'/)[1];
        var $accordion = $tabLink.closest('.accordion');

        $accordion.find('.tabcontent').hide().removeClass('active');
        $accordion.find('.tablinks').removeClass('active');

        $('#' + tabName).show().addClass('active');
        $tabLink.addClass('active');
    }

    var $firstTabLink = $('.accordion .accordion-content').first().find('.tablinks').first();
    openTab($firstTabLink);

    $('.accordion-header').on('click', function () {
        var $firstTabLink = $(this).next().find('.tablinks').first();
        openTab($firstTabLink);
    });

    $('.tablinks').on('click', function () {
        openTab($(this));
    });

    const $scrollingDiv = $('.accordion-content');
    const $scrollaccordion = $('#accordion1');
    const threshold = 50;

    $scrollaccordion.addClass('overlay-bg');

    $scrollingDiv.on('scroll', function () {
        const isNearBottom = $scrollingDiv[0].scrollHeight - $scrollingDiv.scrollTop() - $scrollingDiv.outerHeight() <= threshold;

        $scrollaccordion.toggleClass('overlay-bg', !isNearBottom);
    });
})