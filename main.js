window.onload = function() {
    let element = document.getElementById("e");
    element.onclick = function () {
        let win = window.open("https://electroskunk.tistory.com", "_blank");
        win.focus();
    };
}