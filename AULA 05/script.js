let menus = document.querySelectorAll("#menu li");
let indicator = document.querySelector(".indicator");
for(let i = 0; i < menus.length; i++){
    menus[i].addEventListerner("click", function(){
        deselect();
        this.classList.add("active");
    })
}
function deselect(){
    for(let i = 0; i < menus.length; i++){
        menus[i].classList.remove("active");
        }

}