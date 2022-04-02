// footer btns 
const homeBtn = document.querySelector('.home-btn');
const searchBtn = document.querySelector('.search-btn');
const reelBtn = document.querySelector('.reel-btn');
const notifyBtn = document.querySelector('.notify-btn');
const profileBtn = document.querySelector('.profile-btn');

// sections 
const homeSec = document.getElementById('home')
const searchSec = document.getElementById('search')
const reelSec = document.getElementById('reel')
const notifySec = document.getElementById('notify')
const profileSec = document.getElementById('profile')

// * Click events for footer buttons 
     
//  HOME BTN 
homeBtn.addEventListener('click' , () =>{
    homeBtn.classList.add('active')
    searchBtn.classList.remove('active')
    reelBtn.classList.remove('active')
    notifyBtn.classList.remove('active')
    profileBtn.classList.remove('active')

    // * sections  
    homeSec.classList.add('sec-active')
    searchSec.classList.remove('sec-active')
    reelSec.classList.remove('sec-active')
    notifySec.classList.remove('sec-active')
    profileSec.classList.remove('sec-active')
});

//  SEARCH BTN 
searchBtn.addEventListener('click' , () =>{
    homeBtn.classList.remove('active')
    searchBtn.classList.add('active')
    reelBtn.classList.remove('active')
    notifyBtn.classList.remove('active')
    profileBtn.classList.remove('active')

    // * sections  
    homeSec.classList.remove('sec-active')
    searchSec.classList.add('sec-active')
    reelSec.classList.remove('sec-active')
    notifySec.classList.remove('sec-active')
    profileSec.classList.remove('sec-active')
});

// reel btn 
reelBtn.addEventListener('click' , () =>{
    homeBtn.classList.remove('active')
    searchBtn.classList.remove('active')
    reelBtn.classList.add('active')
    notifyBtn.classList.remove('active')
    profileBtn.classList.remove('active')

    // * sections  
    homeSec.classList.remove('sec-active')
    searchSec.classList.remove('sec-active')
    reelSec.classList.add('sec-active')
    notifySec.classList.remove('sec-active')
    profileSec.classList.remove('sec-active')
});

//  notify BTN 
notifyBtn.addEventListener('click' , () =>{
    homeBtn.classList.remove('active')
    searchBtn.classList.remove('active')
    reelBtn.classList.remove('active')
    notifyBtn.classList.add('active')
    profileBtn.classList.remove('active')

    // * sections  
    homeSec.classList.remove('sec-active')
    searchSec.classList.remove('sec-active')
    reelSec.classList.remove('sec-active')
    notifySec.classList.add('sec-active')
    profileSec.classList.remove('sec-active')
});

//  profile BTN 
profileBtn.addEventListener('click' , () =>{
    homeBtn.classList.remove('active')
    searchBtn.classList.remove('active')
    reelBtn.classList.remove('active')
    notifyBtn.classList.remove('active')
    profileBtn.classList.add('active')

// * sections  
    homeSec.classList.remove('sec-active')
    searchSec.classList.remove('sec-active')
    reelSec.classList.remove('sec-active')
    notifySec.classList.remove('sec-active')
    profileSec.classList.add('sec-active')
});
