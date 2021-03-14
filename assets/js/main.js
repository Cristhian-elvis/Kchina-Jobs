/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId, navOpacityId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    navOpacity = document.getElementById(navOpacityId);

    if(toggle && nav && navOpacity){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
            navOpacity.classList.toggle('show-nav-opacity');
        });

        closeMenu(navOpacity, nav);
    }
}
function closeMenu(toggle, nav) {
    toggle.addEventListener('click', () => {
        nav.classList.remove('show-menu');
        toggle.classList.remove('show-nav-opacity');
    })
}
function abc(){
    
}
showMenu('nav-toggle', 'nav-menu', 'nav-menu-opacity');



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