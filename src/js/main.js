require.config({
    paths: {
        "jquery": "libs/jquery-1.8.3.min",
        "swiper": "libs/swiper",
        "index": "app/index"
    }
});
require(["index"], function(index) {
    index();
});