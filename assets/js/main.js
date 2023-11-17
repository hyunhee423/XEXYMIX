



/**
 * @intro
 * 
 * 
 */
  const headTxt1 = new SplitType('main h2', { types: 'words, chars', });
  const introTl=gsap.timeline({
    onComplete:function(){
      introTxt.play()
    }
  })

  introTl
  .to('.landing .landing-inner',1,{ xPercent:-50 })  
  .to('.landing',{ height:0 })  


  const introTxt=gsap.timeline({
    paused:true,
  })

  
  introTxt
  .addLabel('a')
  .from('.sc-main h2 .char',{ yPercent:100, opacity:0, stagger:0.03, },'a')
  .from('.sc-main .text-area p',{ yPercent:100, opacity:0, },'a+=0.3')
  .from('.sc-main .text-area a',{ yPercent:50, opacity:0, },'a+=0.6')


/**
 * @bg
 * 
 * 
 */
gsap.to('.purple-bg .bg-inner',3,{
  repeat:-1,
  yoyo:true,
  xPercent:-50
})  



  /**
   * 
   * @window.pageYOffset
   * 
   */
    // 헤더 스크롤 이벤트
      var lastScroll = 0;

      $(window).scroll(function() {

        var curr = $(this).scrollTop()

        if (curr >= 10) {
          $('.header').addClass('on')
        } else {
          $('.header').removeClass('on')
        }
  
        if (curr > lastScroll) { //ㄴㅐ리ㄹ때
          $('.header').addClass('hide')
        } else { //올릴때
          $('.header').removeClass('hide')
        }
        
        lastScroll = curr;
      });


        // 서브 메뉴 토글
        $(".sub-menu").click(function() {
            $(this).find(".sub-list").slideToggle();
            $(this).find('span').toggleClass('on');
        });
           



      $('.btn-book').click(function(){
          $('header').addClass('toggle')
          $('.class-area').toggleClass('on');
      })

      $('.class-area .btn-cloes').click(function () {
          $('.class-area').removeClass('on');
          $('header').removeClass('toggle');
      })


      $(document).click(function (e) {
          if ($('.header').has(e.target).length === 0) {
            $('.class-area').removeClass('on');
            $('header').removeClass('toggle');
          } 
      })


      const subTitle = new SplitType('[data-text]', { types: 'words, chars', });


      /**
       * @텍스트효과 필요할때쓰기
       * 
       * 
       */

      $('[data-text]').each(function(i,el){
        child=$(this).find('.char')
        gsap.from(child,{ 
          scrollTrigger:{
            trigger:el,
            start:"0% 90%",
            end:"100% 0%",
            // markers:true,
          },
          yPercent:100, opacity:0, stagger:0.03, 
        })
      })




      $('.sc-contents').each(function(i,el){

        imgEl=$(this).find('.img-area img');
        textEl1=$(this).find('.text-area .text-box');
        textEl2=$(this).find('.text-area .btn');

        const stickyTl=gsap.timeline({
          scrollTrigger:{
            trigger:el,
            start:"0% 0%",
            end:"100% 100%",
            // markers:true,
            scrub:1,
          },
        })
        stickyTl
        .to(imgEl,{scale:1.1 })
        .addLabel('a')
        .to(textEl1,{opacity:0,yPercent:-100 },'a')
        .to(textEl2,{opacity:0,yPercent:100 },'a')
      })





    // 슬라이드

var bannerSlide = new Swiper(".review-slide", {

    loop:true,
    pagination: {
      el: ".pagination",
      clickable: true,
    },
    
  });


  
