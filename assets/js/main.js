/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
            console.log('sdf');
        });
    }
}
showMenu('nav-toggle', 'nav-menu');