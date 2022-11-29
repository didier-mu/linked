const objParallaxArray = (elem) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(elem).forEach(function (e) {
        gsap.from(e, {
            duration: 0.1,
            ease: "power1.out",
            opacity: 0,
            yPercent: 0,
            scrollTrigger: {
                trigger: e,
                scrub: 0.3,
                start: "-=600",
                end: "top bottom",
                toggleActions: "restart pause reverse pause",
                immediateRender: false,
                // markers: true,
            },
        });
    });
};

objParallaxArray(".papers__item");
