import { Setting } from "./settings.module.js";

let settings = new Setting();


let button = document.getElementById('dark-light');
let status = document.getElementById('condition');
let darkMode = document.getElementById('app-setting');
let darkModeQuiz = document.getElementById('quiz');
let darkFinish = document.getElementById('finish');
let overLay = document.getElementById('quiz-app');
let overLayPage = document.getElementById('quiz-page');
let overLayFinish = document.getElementById('quiz-finish');
let darkBackGround = document.getElementById('body');
let active = false;
button.addEventListener('click',function(){
    // console.log("hello");
    if(active!=true){
        status.innerHTML = `Dark <i id="dark-light-icon" class="fa-solid fa-toggle-on"></i>`;
        darkMode.style.background = 'linear-gradient(to right, #434343 0%, black 100%)';
        darkModeQuiz.style.background = 'linear-gradient(to right, #434343 0%, black 100%)';
        darkFinish.style.background = 'linear-gradient(to right, #434343 0%, black 100%)';
        darkMode.style.color = 'white';
        darkModeQuiz.style.color = 'white';
        darkFinish.style.color = 'white';
        darkBackGround.style.backgroundImage = "url(images/CbP.svg)";
        // console.log(darkBackGround.style.backgroundImage,"dark");
        overLay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overLayPage.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overLayFinish.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        active = true;
        // console.log('Dark');
    }else{
        status.innerHTML = `light <i id="dark-light-icon" class="fa-solid fa-toggle-off"></i>`
        darkMode.style.background = 'linear-gradient(#e66465, #9198e5)';
        darkModeQuiz.style.background = 'linear-gradient(#e66465, #9198e5)';
        darkFinish.style.background = 'linear-gradient(to right,#8360c3, #2ebf91)';
        darkBackGround.style.backgroundImage = "url(images/wa.svg)"
        // console.log(darkBackGround,"light");
        overLay.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
        overLayPage.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        overLayFinish.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        active = false;
        // console.log('light');
    }
})