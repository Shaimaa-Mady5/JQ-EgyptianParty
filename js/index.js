///<reference types="../@types/jquery/"/>



// ==================== Side bar ====================

// *****  (animate with left )*********

$('.icon').on('click' , function(){
    $('#sideBar').animate({'left':0} , 1000)
    $('.icon').animate({'left':250} , 1000)
})

$('#sideBar .links i').on('click'  , function(){
    $('#sideBar').animate({'left':-200} , 1000)
    $('.icon').animate({'left':50} , 1000)
})


// ***** Another solution (animate with width) *********
/* $('#sideBar .icon').on("click" , function(){
    $('#sideBar .links').animate({'width':'200'} , 1000)   //make with 0 first in css file
    $('#sideBar .links').css('display' ,"block")
   
})

$('#sideBar .links i').on('click' , function(){
    $('#sideBar .links').animate({'width':0 , 'paddingInline':0} , 1000 , function(){
        $('#sideBar .links').css('display','none')
    })
}) */

// ==================== Side scroll ====================
$('#sideBar a[href^="#"]').on('click' , function(e){
  let aHref = ($(e.target).attr('href')); //#home #contact #duration
  console.log(aHref);
  let sectionsOffset =$(aHref).offset().top;
  console.log(sectionsOffset); //850px 340px
  $('body').animate({scrollTop : sectionsOffset},8000)
})

// ==================== Singer section ====================

$('.singer-title').on("click" , function(e){
    $(e.target).next().slideToggle(500)
    $('.singer-description').not($(e.target).next()).slideUp(500)
})


// ==================== Counter section ====================
let partyDate = new Date("May 16 , 2024   00:00:01").getTime()

let stopCounter =setInterval(()=>{
    let todayDate = new Date().getTime()
    let diffDate = partyDate-todayDate

    // ********* Days *********
    let days = Math.floor( diffDate/(1000*60*60*24))
    $('#day').html("-"+days)

    // ********* hours *********
    let hours=Math.floor(diffDate%(1000*60*60*24) /(1000*60*60))
    $('#hour').html(hours)

    // ********* minutes *********
    let minutes=Math.floor(diffDate%(1000*60*60) /(1000*60))
    $('#minutes').html(minutes)

    // ********* secondes *********
    let seconds=Math.floor(diffDate%(1000*60) /(1000))
    $('#seconds').html(seconds)

// ********* stop interval *********
if(days==0 &&hours==0 && minutes==0 && seconds==0){
    clearInterval(stopCounter)
}

} , 1000)


// ==================== contact section ====================
let message =$('#contact textarea')
let textAreaNumber = $('.text-area-number')
let textAreaDesc = $('.text-area-desc')
message.on('input' , function(){
    let countLength = message.val().length
    if(countLength<100){
        textAreaNumber.html(100-countLength)
    }
    else {
        textAreaNumber.html("Your available character finished")
        textAreaDesc.html("")
    }
})




// ***** Another solution (pure js) *********
/* 
let message =document.getElementById('message')
let textAreaNumber = document.querySelector('.text-area-number')
let textAreaDesc = document.querySelector('.text-area-desc')
message.addEventListener('input' , function(){

    let countLength = message.value.length;
    if(countLength<100){
        textAreaNumber.innerHTML=100-countLength
    }
    else {
        textAreaNumber.innerHTML="Your available character finished"
        textAreaDesc.innerHTML=""
    }   
}) */



// ==================== stop form reload ====================

 $('#form').on('submit' , function(e){
    e.preventDefault()
 })

// ***** Another solution (pure js) *********
 /* let myForm =document.getElementById('form')
myForm.addEventListener('submit' , function(e){
   e.preventDefault()
}) */


// *******problems******
/* scrollTop---->scrollSmooth
side bar move h1 & h1 description in small screen

 */