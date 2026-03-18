
// banner
const banner = document.getElementById("banner");
const closebtn = document.getElementById("closeBanner");

closebtn.addEventListener('click', function() {
    banner.style.display = "none";
});

// burger navigation Mobil
function toggleMenu (buttonId, menuId) {
    const button = document.getElementById(buttonId);
    const menu = document.getElementById(menuId);
    
    button.addEventListener("click", function() {
    
        menu.classList.toggle("hidden");
        
    });
}

toggleMenu ("myButton", "myMenu");

// dropdown1
function toggleDropdown () {
    document.getElementById("mydropdown").classList.toggle("hidden");
};
// dropdown2
function toggleDropdown2 () {
    document.getElementById("mydropdown2").classList.toggle("hidden");
};