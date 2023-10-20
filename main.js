
document.querySelector(".arrow-left").addEventListener("click", function () {
    var boxInner = document.querySelector(".box-inner");
    var actualScroll = boxInner.scrollLeft;
    boxInner.scrollLeft = actualScroll - 400;
});

document.querySelector(".arrow-right").addEventListener("click", function () {
    var boxInner = document.querySelector(".box-inner");
    var actualScroll = boxInner.scrollLeft;
    boxInner.scrollLeft = actualScroll + 400;
});

        