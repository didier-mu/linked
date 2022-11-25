const objParallax = (trigger, elem) => {
    gsap.from(elem, {
        yPercent: 0,
    });
    gsap.to(elem, {
        yPercent: -80,
        ease: "none",
        scrollTrigger: {
            trigger: trigger,
            start: "-=200 center",
            end: "+=800",
            scrub: 1,
            toggleActions: "restart pause reverse pause",
            // markers: true,
        },
    });
};

const objParallaxMultiple = () => {
    let boletosArr = gsap.utils.toArray(".hero--wrap picture");

    boletosArr.forEach(function () {
        gsap.fromTo(
            boletosArr,
            {
                opacity: 0,
                xPercent: -100,
            },
            {
                duration: 0.6,
                opacity: 1,
                xPercent: 0,
                stagger: 0.1,
                ease: "power2.out",
                // scrollTrigger: {
                //     trigger: "body",
                //     pinSpacing: false,
                //     scrub: true,
                //     start: "top top",
                //     end: "+=300",
                //     immediateRender: true,
                //     markers: true,
                // },
            }
        );
    });
};

const objParallaxMultipleDos = () => {
    let boletosArr = gsap.utils.toArray(".sidenav a");

    boletosArr.forEach(function () {
        gsap.fromTo(
            boletosArr,
            {
                opacity: 0,
                xPercent: 100,
            },
            {
                duration: 0.6,
                opacity: 1,
                xPercent: 0,
                stagger: 0.1,
                ease: "power2.out",
            }
        );
    });
};

objParallaxMultiple();
// objParallaxMultipleDos();

// objParallax(".about", "#rosas-about img");

const objElements = (trigger, elem) => {
    gsap.from(elem, {
        yPercent: 10,
        opacity: 0,
    });
    gsap.to(elem, {
        yPercent: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
            trigger: trigger,
            start: "top center",
            end: "+=300",
            scrub: 1,
            toggleActions: "restart pause reverse pause",
            // markers: true,
        },
    });
};

const animContenido = (trigger, elem) => {
    const controller = new ScrollMagic.Controller();
    const info = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: "onEnter",
    })
        .setTween(
            TweenMax.fromTo(
                elem,
                1,
                {
                    opacity: 0,
                    yPercent: 10,
                },
                {
                    opacity: 1,
                    yPercent: 0,
                    delay: 0.5,
                }
            )
        )
        .addTo(controller);
};

animContenido(".cita-home", ".cita-home *");

const objTitles = (trigger, elem) => {
    // gsap.from(elem, {
    //     yPercent: 10,
    //     opacity: 0,
    // });
    gsap.to(elem, {
        yPercent: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
            trigger: trigger,
            start: "-=100 center",
            end: "+=100",
            scrub: 1,
            toggleActions: "restart pause reverse pause",
            // markers: true,
        },
    });
};

const animTitulos = (trigger, elem) => {
    const controller = new ScrollMagic.Controller();
    const info = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0,
    })
        .setTween(
            TweenMax.fromTo(
                elem,
                0.5,
                {
                    opacity: 0,
                    yPercent: 10,
                },
                {
                    opacity: 1,
                    yPercent: 0,
                    delay: 0.4,
                }
            )
        )
        .addTo(controller);
};

const animElem = (trigger, elem) => {
    const controller = new ScrollMagic.Controller();
    const info = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: "onEnter",
    })
        .setTween(
            TweenMax.fromTo(
                elem,
                0.5,
                {
                    opacity: 0,
                    yPercent: 10,
                },
                {
                    opacity: 1,
                    yPercent: 0,
                    delay: 0.3,
                }
            )
        )
        .addTo(controller);
};

gsap.registerPlugin(ScrollTrigger);
// const contentSections = gsap.utils.toArray("li");
// contentSections.forEach((target) => {
//     ScrollTrigger.create({
//         trigger: target,
//         start: "top 80%",
//         end: "bottom 50%",
//         markers: true,
//         toggleClass: "active",
//     });
// });

const objParallaxArray = (trigger, elem) => {
    let boletosArr = gsap.utils.toArray(elem);
    // boletosArr.forEach((target) => {
    //     ScrollTrigger.create({
    //         trigger: target,
    //         start: "top 80%",
    //         end: "bottom 50%",
    //         markers: true,
    //         className: "+=active",
    //     });
    // });

    boletosArr.forEach((target) => {
        gsap.fromTo(
            boletosArr,
            {
                opacity: 0,
                yPercent: 10,
            },
            {
                duration: 2,
                opacity: 1,
                yPercent: 0,
                stagger: 0.3,
                // ease: "power1.out",
                ease: "ease",
                delay: 1,
                scrollTrigger: {
                    trigger: trigger,
                    scrub: 1,
                    start: "-=100 center",
                    // end: "bottom 50%",
                    toggleActions: "restart pause reverse pause",
                    immediateRender: false,
                    // markers: true,
                },
            }
        );
    });
};

objParallaxArray(".projects-home .col-lg-4", ".projects-home .col-lg-4");

const revealObj = () => {
    // usage:
    batch(".projects-home .col-lg-4", {
        interval: 0.1, // time window (in seconds) for batching to occur. The first callback that occurs (of its type) will start the timer, and when it elapses, any other similar callbacks for other targets will be batched into an array and fed to the callback. Default is 0.1
        batchMax: 3, // maximum batch size (targets)
        onEnter: (batch) =>
            gsap.to(batch, { autoAlpha: 1, stagger: 0.3, overwrite: true }),
        onLeave: (batch) => gsap.set(batch, { autoAlpha: 0, overwrite: true }),
        onEnterBack: (batch) =>
            gsap.to(batch, { autoAlpha: 1, stagger: 0.3, overwrite: true }),
        onLeaveBack: (batch) =>
            gsap.set(batch, { autoAlpha: 0, overwrite: true }),
        // you can also define things like start, end, etc.
    });

    // the magical helper function (no longer necessary in GSAP 3.3.1 because it was added as ScrollTrigger.batch())...
    function batch(targets, vars) {
        let varsCopy = {},
            interval = vars.interval || 0.1,
            proxyCallback = (type, callback) => {
                let batch = [],
                    delay = gsap
                        .delayedCall(interval, () => {
                            callback(batch);
                            batch.length = 0;
                        })
                        .pause();
                return (self) => {
                    batch.length || delay.restart(true);
                    batch.push(self.trigger);
                    vars.batchMax &&
                        vars.batchMax <= batch.length &&
                        delay.progress(1);
                };
            },
            p;
        for (p in vars) {
            varsCopy[p] =
                ~p.indexOf("Enter") || ~p.indexOf("Leave")
                    ? proxyCallback(p, vars[p])
                    : vars[p];
        }
        gsap.utils.toArray(targets).forEach((target) => {
            let config = {};
            for (p in varsCopy) {
                config[p] = varsCopy[p];
            }
            config.trigger = target;
            ScrollTrigger.create(config);
        });
    }
};

// revealObj();
