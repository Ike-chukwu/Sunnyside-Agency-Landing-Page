const menuIcon = document.querySelector('.fa-bars')
const nav = document.querySelector('header nav .links')


menuIcon.addEventListener('click', function(){
    menuIcon.classList.toggle('fa-times')
    nav.classList.toggle('active')
})