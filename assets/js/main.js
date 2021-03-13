/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
        });
    }
}
showMenu('nav-toggle', 'nav-menu');

/*===== SHOW NAV SECTION THREE =====*/
const showNav = (toggleId, navSearchId, closeTogleId) => {
    const toggle = document.getElementById(toggleId),
    navSearch = document.getElementById(navSearchId),
    closeToggle = document.getElementById(closeTogleId);

    if(toggle && navSearch && closeToggle){
        toggle.addEventListener('click', ()=>{
            navSearch.classList.add('show-nav')
        });
        closeToggle.addEventListener('click', ()=>{
            navSearch.classList.remove('show-nav')
        })
    }
}
showNav('toggle-search', 'section-three', 'close-toggle-search');