
// banner
const banner = document.getElementById("banner");
const closebtn = document.getElementById("closeBanner");

closebtn.addEventListener('click', function() {
    banner.style.display = "none";
});

// burger navigation
function toggleMenu (buttonId, menuId) {
    const button = document.getElementById(buttonId);
    const menu = document.getElementById(menuId);
    
    button.addEventListener("click", function() {
    
        menu.classList.toggle("hidden");
        
    });
}

toggleMenu ("myButton", "myMenu");