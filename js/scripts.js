/*!
* Start Bootstrap - Creative v7.0.5 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/

window.addEventListener("DOMContentLoaded", (e => {
    var t = function() {
        const e = document.body.querySelector("#mainNav");
        e && (0 === window.scrollY ? e.classList.remove("navbar-shrink") : e.classList.add("navbar-shrink"))
    };
    t(),
    document.addEventListener("scroll", t);
    document.body.querySelector("#mainNav") && new bootstrap.ScrollSpy(document.body, {
        target: "#mainNav",
        offset: 74
    });
    const n = document.body.querySelector(".navbar-toggler");
    [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link")).map((function(e) {
        e.addEventListener("click", (() => {
            "none" !== window.getComputedStyle(n).display && n.click()
        }))
    }));
    const o = document.getElementsByTagName("textarea");
    for (let e = 0; e < o.length; e++) o[e].setAttribute("style", "height:" + o[e].scrollHeight + "px;overflow-y:hidden;"),
    o[e].addEventListener("input", i, !1);
    function i() {
        this.style.height = "auto",
        this.style.height = this.scrollHeight + "px"
    }
    AOS.init({
        offset: 300,
        duration: 700
    })
}));
