function toggleMainMenu() {
    var toggeableMenu = document.getElementById("hidden-menu");
    if(toggeableMenu.style.display == "")
        toggeableMenu.style.display = "block";
    else
        toggeableMenu.style.display = toggeableMenu.style.display == "none" ? "block" : "none";
}