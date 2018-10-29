function home(){
    document.getElementById('aboutMe').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('portfolio').style.display='none';
    document.getElementById('contact').style.display='none';
    var list = document.getElementsByClassName('design');
    for(var i=0; list.length; i++){
        list[i].style.visibility='hidden';
    }
    // var list1 = document.getElementsByClassName('front');
    // for(var i=0; list1.length; i++){
    //     list1[i].visibility='hidden';
    // }
    // var list2 = document.getElementsByClassName('back');
    // for(var i=0; list2.length; i++){
    //     list2[i].style.visibility='hidden';
    // }
}

function design(){
    document.getElementById('designbutton').style.color='#EB3E4A';
    document.getElementById('designbutton').style.backgroundColor='white';
    var list = document.getElementsByClassName('design');
    for(var i=0; list.length; i++){
        list[i].style.visibility='visible';
    }
}

function front(){
    document.getElementById('frontbutton').style.color='#EB3E4A';
    document.getElementById('frontbutton').style.backgroundColor='white';
    var list = document.getElementsByClassName('front');
    for(var i=0; list.length; i++){
        list[i].style.visibility='visible';
    }
}

function back(){
    document.getElementById('backbutton').style.color='#EB3E4A';
    document.getElementById('backbutton').style.backgroundColor='white';
    var list = document.getElementsByClassName('back');
    for(var i=0; list.length; i++){
        list[i].style.visibility='visible';
    }
}


function landingpage(x){
    document.getElementById('aboutMe').style.display= 'none';
    document.getElementById('landingPage').style.display='';
    document.getElementById('skills').style.display='none';
    document.getElementById('portfolio').style.display='none';
    document.getElementById('contact').style.display='none';
}
function aboutme(x){
    document.getElementById('aboutMe').style.display= '';
    document.getElementById('landingPage').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('portfolio').style.display='none';
    document.getElementById('contact').style.display='none';
    x.style.textDecoration='underline';
    x.style.fontSize='30px';
}
function skills(x){
    document.getElementById('skills').style.display= '';
    document.getElementById('landingPage').style.display='none';
    document.getElementById('aboutMe').style.display='none';
    document.getElementById('portfolio').style.display='none';
    document.getElementById('contact').style.display='none';
    x.style.textDecoration='underline';
    x.style.fontSize='30px';
}
function portfolio(x){
    document.getElementById('portfolio').style.display= '';
    document.getElementById('landingPage').style.display='none';
    document.getElementById('aboutMe').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('contact').style.display='none';
    x.style.textDecoration='underline';
    x.style.fontSize='30px';
}
function contact(x){
    document.getElementById('contact').style.display= '';
    document.getElementById('landingPage').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('portfolio').style.display='none';
    document.getElementById('aboutMe').style.display='none';
    x.style.textDecoration='underline';
    x.style.fontSize='30px';
}

// function popup() {
//     document.getElementById("mypopup").style.visibility="visible";
//     //popup.classList.toggle("show");
// }
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function on1() {
    document.getElementById("overlay1").style.display = "block";
}

function off1() {
    document.getElementById("overlay1").style.display = "none";
}