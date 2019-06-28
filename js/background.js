var cycle = 0;
var allBackgrounds = ["./first.jpeg",
    "./sec.jpg",
    "./third.jpg"
];

window.onload = function() {

    setInterval(function() {
        var d = document.getElementById("top");
        console.log(d);
        if (cycle < 3) {
            d.style.backgroundImage = "url('" + allBackgrounds[cycle] + "')";
            cycle += 1;
        } else {
            cycle = 0;
        }
    }, 5000);
}