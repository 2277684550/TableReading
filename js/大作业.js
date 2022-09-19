var mySwiper = new Swiper ('.swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
	  clickable :true,//点击小点，跳转图片
	  // dynamicBullets: true,//小点多时，使中间的突出放大
	  //使分页器显示文字
	       renderBullet: function (index, className) {
	            switch(index){
	              case 0:text='射手凶猛';break;
	              case 1:text='修行在废土';break;
	              case 2:text='古神在低语';break;
	              case 3:text='从剧本杀店开始';break;
	              case 4:text='一万种清除玩家的方法';break;
	            }
	            return '<span class="' + className + '">' + text + '</span>';
	          },
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
	 autoplay:true,//等同于以下设置
	  autoplay: {
	    delay: 2000,

	    disableOnInteraction: true//点击页面暂停移动
	    },
  })        