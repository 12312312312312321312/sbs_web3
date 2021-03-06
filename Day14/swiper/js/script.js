$(function () {


    // 스와이퍼 시작!
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',          //슬라이드 방향: 'vertical', 'horizontal'
        loop: true,                       //반복여부
        autoplay: {                       //자동재생
            delay: 5000,                  //슬라이드 당 지연시간(ms)
            pauseOnMouseEnter: true,      //슬라이드에 마우스를 올렸을때 안움직이게하는거
            disableOnInteraction: true,   //인터렉션(화살표,드래그...)중의 자동재생 비활성화 여부
        },
        speed: 1000,                      //슬라이드가 넘어가는 시간(ms)
        slidePerview: 1,                  //보여지는 슬라이드 개수
        spaceBetween: 0,                 //슬라이드간 여백

         grabCursor: true,                //마우스커서를 잡는손가락 모양
         centeredSlides: true,            //센터모드
        // // 다양한 효과
        // effect: "fade",
        // fadeEffect: {
        //     crossFade: true
        // },


        // //coverflow
        // effect: "coverflow",
        // grabCursor: true,
        // centeredSlides: true,
        // coverflowEffect: {
        //     rotate: 10,
        //     slideShadows: true,
        //     scale: 0.7,
        // },
    

        //cube
        efect:"cube",
        cubeEffect: {
            slideShadows: true,
        },

        //cards
        effect: 'cards',

        // 페이지네이션(● ● ● ●)
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',       //'bullets'       :● ● ●
                                     //'fraction'      : (현재번호/전체번호)
                                     //'progressbar'   : 진행률(게이지)
            clickable: true,      
        },


        // 네비게이션 화살표
        navigation: {
            nextEl: '.swiper-button-next',      //다음 화살표가 적용될 요소
            prevEl: '.swiper-button-prev',      //이전 화살표가 적용될 요소
        },


        // 스크롤바
        scrollbar: {
            el: '.swiper-scrollbar',           //스크롤바가 적용될 요소
            hide: true,                         //스크롤바 숨김(직접 움직일 때는 보이고 그 외에 숨김)
            draggable: true,                    //스크롤바 드래그 가능 여부
            snapOnRelease: true,                //스크롤바 놓을 때, 슬라이드 위치 맞춤    
        },
    
    });


})