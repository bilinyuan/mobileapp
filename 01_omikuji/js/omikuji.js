"use strict";

window.addEventListener("DOMContentLoaded",
function(){
    $("header").textillate({
        loop: false,
        minDisplayTime: 2000,
        initialDelay: 2000,
        autoStart: true,
        in: {
            effect: "fadeInLeftBig",
            delayScale: 1.5,
            delay: 50,
            sync: false,
            shuffle: true
        }
    });
    $(function(){
        ScrollReveal().reveal("#btn1", { duration: 9000 });
        });
       setTimeout(
           function(){
    let popMessage = "いらっしゃい！おみくじ引いてって！";

    window.alert(popMessage);
},
 "5000"
);
},false
);

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",
function(){
    let resultText = ["大吉!!!!!","吉!!!!","中吉!!!","小吉!!","末吉！","凶。。"];
    let resultColor = ["#ff0000","#c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
    let resultFontSize = ["50px","45px","40px","35px","30px","25px"];
    let resultMaxSpeed = ["8","10","8","10","7","5"];
    let resultMaxSize = ["60","50","40","30","20","60"];
    let resultImage = ["img/sakura_hanabira.png","img/sakura_hanabira.png","img/leaf.png","img/sakura_hanabira.png","img/leaf.png","img/snowflakes.png"]
    let n = Math.floor(Math.random() *6);
    btn1.textContent = resultText[n];
    btn1.style.color = resultColor[n];
    btn1.style.fontSize = [resultFontSize];
   /* const n = Math.floor(Math.random()*3);

    switch(n){
        case 0:
        btn1.textContent = "Very Happy!!";
        btn1.style.color = "#FF0000";
        break;
        case 1:
        btn1.textContent = "Happy!";
        btn1.style.color = "#fff001";
        break;
        case 2:
        btn1.textContent = "UnHappy...";
        btn1.style.color = "#261elc";
        break;
    }*/
$(document).snowfall("clear");
$(document).ready(function(){
$(document).snowfall({
maxSpeed : resultMaxSpeed[n],
minSpeed : 3, 
maxSize : resultMaxSize[n], 
minSize : 1, 
image : resultImage[n]
});
});
},false
);