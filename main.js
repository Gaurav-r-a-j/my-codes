const menuIcon = document.getElementById("menu-icon")
const slideoutMenu = document.getElementById("slideout-menu")
const searchIcon = document.getElementById("search-icon")
const searchBox= document.getElementById("search-box")
const rsearchIcon = document.getElementById("search-icon9")

const demobtn = document.getElementById("demo-btn")

// demobtn.addEventListener('click',function(){
//     alert("This is just a demo website of sstarx, the full version of this website will lauch by the end of this year.");
// })

searchIcon.addEventListener('click',function(){
    if(searchBox.style.top == '72px'){
        searchBox.style.top = '22px';
        searchBox.style.pointerEvents = 'none' ; 
    }else{
        searchBox.style.top = '72px' ;
        searchBox.style.pointerEvents = 'auto';
    }
    
});

menuIcon.addEventListener('click',function(){
    if(slideoutMenu.style.opacity == '1'){
        slideoutMenu.style.opacity = '0';
        slideoutMenu.style.pointerEvents = 'none'
    } else {
        slideoutMenu.style.opacity = '1';
        slideoutMenu.style.pointerEvents = 'auto'
    }
});

rsearchIcon.addEventListener('click',function(){
    if(searchBox.style.top == '72px'){
        searchBox.style.top = '22px';
        searchBox.style.pointerEvents = 'none' ; 
    }else{
        searchBox.style.top = '72px' ;
        searchBox.style.pointerEvents = 'auto';
    }
    
});








const activePage = window.location.pathname;
// console.log(activePage); to see the pathname

const navLinks = document.querySelectorAll('nav a').forEach(link =>{
//    console.log(link.href) 
    if(link.href.includes(`${activePage}`)){
        // console.log(`${activePage}`);
        link.classList.add('active');
    }
})


