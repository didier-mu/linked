const animMenu = () => {
    let boletosArr = gsap.utils.toArray("#navbarNav li");

    boletosArr.forEach(function () {
        gsap.fromTo(
            boletosArr,
            {
                opacity: 0,
                xPercent: 30,
            },
            {
                duration: 0.1,
                delay: 0.1,
                opacity: 1,
                xPercent: 0,
                stagger: 0.1,
                ease: "power2.out",
            }
        );
    });
};

const nav = () => {
    const navLinks = document.querySelectorAll("#navbarNav li");

    btnHam = document.querySelector(".btn-ham");
    btnHam.onclick = function () {
        document.querySelector("header").classList.toggle("nav-on");
        btnHam.classList.toggle("ham-on");

        if (this.getAttribute("aria-expanded") != "false") {
            animMenu();
        } else {
            for (let elem of navLinks) {
                elem.removeAttribute("style");
            }
        }
    };

    for (let elem of navLinks) {
        elem.addEventListener("click", () => {
            let navLinksActive = document.querySelectorAll(
                "#navbarNav li.active"
            );
            for (const activeElem of navLinksActive) {
                activeElem.classList.remove("active");
            }
            elem.classList.add("active");
            document.querySelector("header").classList.remove("nav-on");
            document.querySelector("#navbarNav").classList.remove("show");
            btnHam.classList.remove("ham-on");
        });
    }

    const secciones = document.querySelectorAll("section");
    for (const seccionesElem of secciones) {
        var observer = new IntersectionObserver(
            function (entries) {
                let idSection = seccionesElem.getAttribute("id");
                if (entries[0].isIntersecting === true) {
                    let navLinksActive = document.querySelectorAll(
                        "#navbarNav li.active"
                    );
                    for (const activeElem of navLinksActive) {
                        activeElem.classList.remove("active");
                    }

                    if (idSection == "inicio") {
                        document
                            .getElementById("li-inicio")
                            .closest("li")
                            .classList.add("active");
                    } else if (idSection == "about") {
                        document
                            .getElementById("li-about")
                            .closest("li")
                            .classList.add("active");
                    } else if (idSection == "boletos") {
                        document
                            .getElementById("li-boletos")
                            .closest("li")
                            .classList.add("active");
                    } else if (idSection == "faqs") {
                        document
                            .getElementById("li-faqs")
                            .closest("li")
                            .classList.add("active");
                    }
                }
            },
            { threshold: [0] }
        );
        observer.observe(seccionesElem);
    }
};

nav();
