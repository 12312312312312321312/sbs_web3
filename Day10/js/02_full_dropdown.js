// 문서 준비 이벤트
$(function() {

    //메인 메뉴 - mouseover 이벤트
    // $('.mainmenu').on('mouseover',function() {
    //     //해당 메인메뉴의 자식 서브메뉴만
    //    //선택한 메인메뉴의 번호
    //    let index = $(this).index()
    //    let no = index+1
    // //    $('.submenu:nth-of-type(' + no + ')').slideDown()

    //    //eq(index): index 번호에 해당하는 요소를 선택
    //    $('.submenu').eq(index).stop().slideDown()
    // //    $('.submenu').eq(index).stop().slideToggle()
    // })

    // //메인 메뉴 - mouseleave 이벤트
    // $('.mainmenu').on('mouseleave', function() {
    //     //해당 메인메뉴의 자식 서브메뉴만
    //     let index = $(this).index()
    //     let no = index+1
    //     //$('.submenu:nth-of-type(' + no + ')').slideUp()
    //     //eq(index): index 번호에 해당하는 요소를 선택
    //    $('.submenu').eq(index).stop().slideUp()
    // })

    //메인 메뉴 - click 이벤트
    $('.mainmenu').on('click', function() {
        let index = $(this).index()
        let no = index+1

        $('.submenu').stop().hide()
        $('.submenu').eq(index).stop().slideToggle()
    })

})