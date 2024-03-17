var boxes = document.getElementById("boxes");

for (var i = 0; i < 28; i++) {
    var remainder = i % 2;
    if (remainder == 0) {
        boxes.innerHTML += "<div onclick={deleteBox(this)} class='box' style='background-color:black'></div>";
    } else {
        boxes.innerHTML += "<div onclick={deleteBox(this)} class='box' style='background-color:white'></div>";
    }
    function deleteBox(box) {
        box.style.backgroundColor = "teal";
    }

}