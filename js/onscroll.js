window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("target").classList.add("hsmall");
    } else {
        document.getElementById("target").classList.remove("hsmall");
    } if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("backToTop").style.display = "inline-block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}