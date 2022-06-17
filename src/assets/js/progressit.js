import $ from 'jquery';

$(function () {
    var $ppc = $('.progress-pie-chart-it'),
        percent = parseInt($ppc.data('percent')),
        deg = 360 * percent / 100;
    if (percent > 50) {
        $ppc.addClass('gt-50');
    }
    $('.ppc-progress-fill-it').css('transform', 'rotate(' + deg + 'deg)');
    $('.ppc-percents-it span').html(percent + '%');
});

