//typedjs
// aos

let aboutTop = $('#about').offset().top
console.log(aboutTop);
let navHight = $('.myNav').innerHeight()
console.log(navHight);

$(window).scroll(function () {
    let windowTop = $(window).scrollTop()
    if (windowTop > (aboutTop - navHight)) {
        $('.myNav').addClass('bg-black')
        $('#backToTop').fadeIn(500)

    } else {
        $('.myNav').removeClass('bg-black')
        $('#backToTop').fadeOut(500)

    }

});
$('#backToTop').on('click', function () {
    // $(window).scrollTop(0)
    $('html,body').animate({ scrollTop: 0 }, 500)
})


$('.navbar-nav a[href^="#"]').on('click', function (e) {
    let clickeditem = $(e.target).attr('href')

    $('.navbar-nav a[href^="#"]').removeClass('active')
    $(e.target).addClass('active')
    let sectionTop = $(clickeditem).offset().top
    $('html,body').animate({ scrollTop: sectionTop }, 500)

})

$(function () {
    $('.loader').fadeOut(1000, function () {
        $('#loading').fadeOut(500, function () {
            $('body').css('overflow', 'auto  ')
        })
    })







    $('#sideBar i').on('click', function () {
        // console.log($(".colors ").innerWidth());
        if ($('#sideBar').css('left') == '0px') {
            $('#sideBar').animate({ left: `-${$(".colors ").innerWidth()}px` }, 1000)

        } else {
            $('#sideBar').animate({ left: `0px` }, 1000)

        }
    })
})


// let spans = $('#boxColor span')
$('#boxColor span').eq(0).css('background-color', '#fff    ')
$('#boxColor span').eq(1).css('background-color', '#000    ')
$('#boxColor span').eq(2).css('background-color', 'green    ')
$('#boxColor span').eq(3).css('background-color', '#454    ')
$('#boxColor span').eq(4).css('background-color', 'yellow    ')

let isOpen = true

$('#boxIcon').on('click', function () {
    let left = $("#sideBox").css('left')
    console.log(left);
    // isOpen   . isOpen=!isOpen
    let width = $('#boxColor').innerWidth()
    if (left == '0px') {
        $('#sideBox').animate({ left: -width }, 1000)

    } else {
        $('#sideBox').animate({ left: '0px' }, 1000)

    }

})

let color =localStorage.getItem('color')
$('h1,h2,p').css('color',color)
$('span').on('click',function(){
let color = $(this).css('background-color')
console.log(color);
    $('h1,h2,p').css('color',color)
    localStorage.setItem('color',color)
})




$('.rateQ').on('click',function(){
    console.log('kndks');
   
    
})

$(function(){
    $('.rateQQQ').animate({ width: "95%" }, 2000)

    $('.rateQ').animate({ width: "80%" }, 2000)
    $('.rateQQ').animate({ width: "90%" }, 2000)
})

new WOW().init();



