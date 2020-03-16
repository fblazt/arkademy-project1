var modal = document.querySelectorAll("#edit-modal, #delete-modal");

var btn = document.querySelectorAll("#edit-btn, #delete-btn");

var span = document.getElementsByClassName("close");

btn[0].onclick = function() {
    modal[0].style.cssText = "display: flex; flex-direction: row; justify-content: center; align-items: center;";
}

btn[1].onclick = function() {
    modal[1].style.cssText = "display: flex; flex-direction: row; justify-content: center; align-items: center;";
}

span[0].onclick = function() {
    modal[0].style.display = "none";
}

span[1].onclick = function() {
    modal[1].style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal[0]) {
        modal[0].style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal[1]) {
        modal[1].style.display = "none";
    }
}