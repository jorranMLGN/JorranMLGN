//drop down toggle
function toggleShowClass() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//javascript dropdown menu functie wanneer persoon op andere plek klikt dan het menu sluit het menu
window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};
