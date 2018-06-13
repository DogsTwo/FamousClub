// JavaScript Document



	//轮播图
    var swiper = new Swiper('.banner .swiper-container', {
        autoHeight: true,
		loop: true,
		autoplay : 5000
    });

	//首页资讯
    var swiper = new Swiper('.innews .swiper-container', {
        slidesPerView: 'auto'
    });

	//首页学堂出品
    var swiper = new Swiper('.inProduced .swiper-container', {
        slidesPerView: 1,
		loop: true,
		autoplay : 5000
    });

	//首页导师
    var swiper = new Swiper('.intutor .swiper-container', {
        slidesPerView: 'auto'
    });

	//首页课程
    var swiper = new Swiper('.incourse .swiper-container', {
        pagination: '.incourse .swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 5,
		initialSlide: 2,
		loop: true
    });

	











