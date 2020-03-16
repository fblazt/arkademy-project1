(function () {
    var sidebar = document.querySelector('.sidebar');

    document.querySelector('#toggle-sidebar').onclick = function () {
    sidebar.classList.toggle('is-visible');
    }
})();

var modal = document.getElementById("add-modal");

var btn = document.getElementById("add-btn");

var span = document.getElementById("close-modal");

btn.onclick = function() {
    modal.style.cssText = "display: flex; flex-direction: row; justify-content: center; align-items: center;";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}