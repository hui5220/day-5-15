define([
    'jquery',
    'swiper'
], function($, swiper) {
    function page() {
        var myswiper = new swiper(".banner", {
            autoplay: true,
            pagination: {
                el: '.swiper-pagination'
            }
        });
        var myswiper2 = new swiper(".list", {
            autoplay: true,
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }
    return page;

});