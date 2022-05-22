gsap.registerPlugin(ScrollTrigger);

        const pageContents = document.querySelector("#contents");

        const scroller = new LocomotiveScroll({
            el: pageContents,
            smooth: true
        });

        scroller.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(pageContents, {
            scrollTop(value) {
                return arguments.length ?
                    scroller.scrollTo(value, 0, 0) :
                    scroller.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return {
                    left: 0,
                    top: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            },
            pinType: pageContents.style.transform ? "transform" : "fixed"
        });


        window.addEventListener("load", function () {
            let sec2WrapWidth = document.querySelector(".sec2__wrap").offsetWidth;
            let horizontal2 = sec2WrapWidth - window.innerWidth;

            gsap.to("#section2 .sec2__wrap", {
                scrollTrigger: {
                    scroller: pageContents, 
                    scrub: true,
                    trigger: "#section2",
                    pin: true,
                    anticipatePin: 1,
                    start: "top top",
                    //end: sec2WrapWidth,
                    end: () => `+=${sec2WrapWidth}`,
                    markers: true,
                },
                x: -horizontal2,
                ease: "none"
            });

            ScrollTrigger.addEventListener("refresh", () => scroller.update());
            ScrollTrigger.refresh();
        });


        //-------팝업 모달창

        ;(function($) {
            $(function() {
                
                $('#my-button').bind('click', function(e) {
                    e.preventDefault();
                    $('#element_to_pop_up').bPopup({
                    });
                });
                
            });
        })(jQuery);

        ;(function($) {
            $(function() {
                
                $('#my-button2').bind('click', function(e) {
                    e.preventDefault();
                    $('#element_to_pop_up2').bPopup({
                    });
                });
                
            });
        })(jQuery);

        ;(function($) {
            $(function() {
                
                $('#my-button3').bind('click', function(e) {
                    e.preventDefault();
                    $('#element_to_pop_up3').bPopup({
                    });
                });
                
            });
        })(jQuery);

        ;(function($) {
            $(function() {
                
                $('#my-button4').bind('click', function(e) {
                    e.preventDefault();
                    $('#element_to_pop_up4').bPopup({
                    });
                });
                
            });
        })(jQuery);
        
        ;(function($) {
            $(function() {
                
                $('#my-button5').bind('click', function(e) {
                    e.preventDefault();
                    $('#element_to_pop_up5').bPopup({
                    });
                });
                
            });
        })(jQuery);




        //------spilt

        document.querySelectorAll(".split").forEach((desc) => {
        let splitText = desc.innerText;
        let splitWrap = splitText
          .split("")
          .join("</span><span aria-hidden='true'>");
        splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
        desc.innerHTML = splitWrap;
        desc.setAttribute("aria-label", splitText);
      });



      //----------타이틀 무한루프
        function title() {
            gsap.set(".title3 strong", { y: 80, opacity: 0 });
            gsap.set(".title3 em", { y: 90, opacity: 0 });
            gsap.set(".title4 strong", { y: 80, opacity: 0 });
            gsap.set(".title4 em", { y: 90, opacity: 0 });

            gsap.to(".title3 strong", { duration: 0.8, opacity: 1, y: 0, ease: "expo.out",});
            gsap.to(".title3 em", { duration: 0.9, opacity: 1, y: 0, delay: 0.1, ease: "expo.out",});
            gsap.to(".title3 strong", { duration: 0.8, opacity: 0, y: -80, delay: 1.9, ease: "expo.out",});
            gsap.to(".title3 em", { duration: 0.9, opacity: 0, y: -90, delay: 2.0, ease: "expo.out",});

            gsap.to(".title4 strong", { duration: 0.8, opacity: 1, y: 0, delay: 2.5, ease: "expo.out",});
            gsap.to(".title4 em", { duration: 0.9, opacity: 1, y: 0, delay: 2.6, ease: "expo.out",});
            gsap.to(".title4 strong", { duration: 0.8, opacity: 0, y: -80, delay: 4.4, ease: "expo.out",});
            gsap.to(".title4 em", { duration: 0.9, opacity: 0, y: -90, delay: 4.5, ease: "expo.out",});

            gsap.to(".title2 strong", { opacity: 0, y: 80, delay: 4.8 });
            gsap.to(".title2 em", { opacity: 0, y: 90, delay: 4.8 });
            gsap.to(".title2 strong", { duration: 0.8, opacity: 1, y: 0, delay: 5.0, ease: "expo.out",});
            gsap.to(".title2 em", { duration: 0.9, opacity: 1, y: 0, delay: 5.1, ease: "expo.out",});
            gsap.to(".title2 strong", { duration: 0.8, opacity: 0, y: -80, delay: 6.9, ease: "expo.out",});
            gsap.to(".title2 em", { duration: 0.9, opacity: 0, y: -90, delay: 7.0, ease: "expo.out",});
        }


        //--------시작화면에서 다 숨기도록

        gsap.set(".title1 strong", { y: 40, opacity: 0 });
        gsap.set(".title1 em", { y: 60, opacity: 0 });

        gsap.set("#header h1", { opacity: 0, y: -100 });
        gsap.set(".nav", { opacity: 0, y: -100 });

        gsap.set(".title2 strong", { y: 80, opacity: 0 });
        gsap.set(".title2 em", { y: 90, opacity: 0 });
        gsap.set(".title3 strong", { y: 80, opacity: 0 });
        gsap.set(".title3 em", { y: 90, opacity: 0 });
        gsap.set(".title4 strong", { y: 80, opacity: 0 });
        gsap.set(".title4 em", { y: 90, opacity: 0 });

        setTimeout(() => {
            gsap.to(".title1 strong", { duration: 0.85, opacity: 1, y: 0, delay: 0.5, ease: "expo.out",});
            gsap.to(".title1 em", { duration: 0.9, opacity: 1, y: 0, delay: 0.55, ease: "expo.out",});
            gsap.to(".title1 strong", { duration: 0.8, opacity: 0, y: -70, delay: 2.8, ease: "expo.out",});
            gsap.to(".title1 em", { duration: 0.9, opacity: 0, y: -70, delay: 2.9, ease: "expo.out",});

            gsap.to("#header h1", { duration: 0.4, opacity: 1, y: 0, delay: 3.2 });
            gsap.to(".nav", { duration: 0.4, opacity: 1, y: 0, delay: 3.45 });

            gsap.to(".title2 strong", { duration: 0.8, opacity: 1, y: 0, delay: 4.0, ease: "expo.out",});
            gsap.to(".title2 em", { duration: 0.9, opacity: 1, y: 0, delay: 4.1, ease: "expo.out",});
            gsap.to(".title2 strong", { duration: 0.8, opacity: 0, y: -90, delay: 6.9, ease: "expo.out",});
            gsap.to(".title2 em", { duration: 0.9, opacity: 0, y: -90, delay: 7.0, ease: "expo.out",});

            setInterval(function () {
            title();
            }, 7500);
        }, 2000);



        //intro 타이틀 이펙트
        gsap.set(".intro_tit_center > div.t1 span", {opacity: 1 });
        gsap.set(".intro_tit_center > div.t2 span", {opacity: 1 });
        gsap.set("#cont__01 .arrowdown", {opacity: 1 });

        gsap.to(".intro_tit_center > div.t1 span ", { opacity: 0, stagger: 0.05,  });
        gsap.to(".intro_tit_center > div.t2 span ", { opacity: 0, stagger: 0.05, });
        gsap.to("#cont__01 .arrowdown", {opacity: 0});

        gsap.from(".intro_tit_center > div.t1 span", {
                scrollTrigger: {
                    trigger: "div.t1 span",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                opacity: 0,
                // delay: 5,
                // ease: "power4.out",
                stagger: 0.05,
                duration: 0.85,

        });
        gsap.from(".intro_tit_center > div.t2 span", {
                scrollTrigger: {
                    trigger: "div.t2 span",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                opacity: 0,
                // delay: 5,
                // ease: "power4.out",
                stagger: 0.05,
                duration: 0.85,
        });
        gsap.from("#cont__01 .arrowdown", {
                scrollTrigger: {
                    trigger: ".arrowdown",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                opacity: 0,
                delay: 5,
                ease: "power4.out",
                duration: 0.85,
        });



        //intro 사진 이질감
        gsap.set(".intro .n1", {x: 50, y: -30});
        gsap.to(".intro .n1", {x: -10, y: 20});
        gsap.from(".intro .n1", {
                scrollTrigger: {
                    trigger: ".n1",
                    scroller: pageContents,
                    scrub: true,
                },
                x: -10,
                y: 20,
        });

        gsap.set(".intro .n2", {x: -50, y: -40});
        gsap.to(".intro .n2", {x: -10, y: 80});
        gsap.from(".intro .n2", {
                scrollTrigger: {
                    trigger: ".n2",
                    scroller: pageContents,
                    scrub: true,
                },
                x: -10,
                y: 80,
        });

        gsap.set(".intro .n3", {x: -50, y: 0});
        gsap.to(".intro .n3", {x: 0, y: 20});
        gsap.from(".intro .n3", {
                scrollTrigger: {
                    trigger: ".n3",
                    scroller: pageContents,
                    scrub: true,
                },
                x: 0,
                y: 20,
        });

        gsap.set(".intro .n4", {x: 60, y: -20});
        gsap.to(".intro .n4", {x: 10, y: 30});
        gsap.from(".intro .n4", {
                scrollTrigger: {
                    trigger: ".n4",
                    scroller: pageContents,
                    scrub: true,
                },
                x: 10,
                y: 30,
        });

        

        //about 자기소개 
        gsap.set(".about__cont__text01 > .t01_a1 > span", {y:0, ease: "expo.out" });
        gsap.set(".about__cont__text01 > .t01_a2 > span", {y:0, ease: "expo.out" });
        gsap.set(".about__cont__text01 > .t01_a3 > span", {y:0, ease: "expo.out" });
        gsap.to(".about__cont__text01 > .t01_a1 > span", { y:40});
        gsap.to(".about__cont__text01 > .t01_a2 > span", { y:40});
        gsap.to(".about__cont__text01 > .t01_a3 > span", { y:40});
        gsap.from(".about__cont__text01 > .t01_a1 > span", {
                scrollTrigger: {
                    trigger: ".about__cont__text01",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                y:40,
                // delay:5.0
        });
        gsap.from(".about__cont__text01 > .t01_a2 > span", {
                scrollTrigger: {
                    trigger: ".about__cont__text01",
                    scroller: pageContents,
                    scrub: true,
                },
                y:40,
                delay: 5.0
        });
        gsap.from(".about__cont__text01 > .t01_a3 > span", {
                scrollTrigger: {
                    trigger: ".about__cont__text01",
                    scroller: pageContents,
                    scrub: true,
                },
                y:40,
        });


        gsap.set(".about__cont__text > .t_a1 > span", {y:0 });
        gsap.set(".about__cont__text > .t_a2 > span", {y:0 });
        gsap.set(".about__cont__text > .t_a3 > span", {y:0 });
        gsap.set(".about__cont__text > .t_a4 > span", {y:0 });
        gsap.set(".about__cont__text > .t_a5 > span", {y:0 });
        gsap.set(".about__cont__text > .t_a6 > span", {y:0 });
        gsap.set(".about__cont__text > .t_a7 > span", {y:0 });
        gsap.set(".about__cont__text > .t_a8 > span", {y:0 });
        gsap.set(".about__cont__text > .t_a9 > span", {y:0 });
        gsap.to(".about__cont__text > .t_a1 > span", { y:20});
        gsap.to(".about__cont__text > .t_a2 > span", { y:20});
        gsap.to(".about__cont__text > .t_a3 > span", { y:20});
        gsap.to(".about__cont__text > .t_a4 > span", { y:20});
        gsap.to(".about__cont__text > .t_a5 > span", { y:20});
        gsap.to(".about__cont__text > .t_a6 > span", { y:20});
        gsap.to(".about__cont__text > .t_a7 > span", { y:20});
        gsap.to(".about__cont__text > .t_a8 > span", { y:20});
        gsap.to(".about__cont__text > .t_a9 > span", { y:20});
        gsap.from(".about__cont__text > .t_a1 > span", {
                scrollTrigger: {
                    trigger: ".about__cont__text",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                y:20,
                // delay:5.0
        });
        gsap.from(".about__cont__text > .t_a2 > span", {
                scrollTrigger: {
                    trigger: ".about__cont__text",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                y:20,
                // delay:5.0
        });
        gsap.from(".about__cont__text > .t_a3 > span", {
                scrollTrigger: {
                    trigger: ".about__cont__text",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                y:20,
                // delay:5.0
        });
        gsap.from(".about__cont__text > .t_a4 > span", {
                scrollTrigger: {
                    trigger: ".about__cont__text",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                y:20,
                // delay:5.0
        });
        gsap.from(".about__cont__text > .t_a5 > span", {
                scrollTrigger: {
                    trigger: ".about__cont__text",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                y:20,
                // delay:5.0
        });
        gsap.from(".about__cont__text > .t_a6 > span", {
                scrollTrigger: {
                    trigger: ".about__cont__text",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                y:20,
                // delay:5.0
        });
        gsap.from(".about__cont__text > .t_a7 > span", {
                scrollTrigger: {
                    trigger: ".about__cont__text",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                y:20,
                // delay:5.0
        });
        gsap.from(".about__cont__text > .t_a8 > span", {
                scrollTrigger: {
                    trigger: ".about__cont__text",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                y:20,
                // delay:5.0
        });
        gsap.from(".about__cont__text > .t_a9 > span", {
                scrollTrigger: {
                    trigger: ".about__cont__text",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                y:20,
                // delay:5.0
        });



        
        //project 타이틀 이펙트
        gsap.set("#cont__03 .tit__center > div.t1 span", {y:0 });
        gsap.set("#cont__03 .tit__sub > div.t1 span", {y:0 });
        gsap.set("#cont__03 .line__center > .line", {width: 1200, opacity: 1, duration: 1.5, ease: "expo.out", });

        gsap.from("#cont__03 .tit__center > div.t1 span", {
                scrollTrigger: {
                    trigger: "#cont__03 .tit__center",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                y: 110,
                // delay: 5,
                ease: "expo.out",
                stagger: 0.25,
                duration: 1.75,
        });
        gsap.from("#cont__03 .tit__sub > div.t1 span", {
                scrollTrigger: {
                    trigger: "#cont__03 .tit__sub > div.t1 span",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                y: 110,
                // delay: 5,
                ease: "expo.out",
                stagger: 0.25,
                duration: 1.75,
        });
        gsap.from("#cont__03 .line__center > .line", {
                scrollTrigger: {
                    trigger: "#cont__03 .tit__sub",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                // y: 110,
                // delay: 5,
                width: 0,
                opacity: 1,
                // stagger: 0.25,
        });


        //script 타이틀 이펙트
        gsap.set("#cont__04 .tit__center > div.t1 span", {y:0 });
        gsap.set("#cont__04 .tit__sub > div.t1 span", {y:0 });
        gsap.set("#cont__04 .line__center > .line", {width: 1200, opacity: 1, duration: 1.5, ease: "expo.out", });

        gsap.from("#cont__04 .tit__center > div.t1 span", {
                scrollTrigger: {
                    trigger: "#cont__04 .tit__center",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                y: 110,
                // delay: 5,
                ease: "expo.out",
                stagger: 0.25,
                duration: 1.75,
        });
        gsap.from("#cont__04 .tit__sub > div.t1 span", {
                scrollTrigger: {
                    trigger: "#cont__04 .tit__sub > div.t1 span",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                y: 110,
                // delay: 5,
                ease: "expo.out",
                stagger: 0.25,
                duration: 1.75,
        });
        gsap.from("#cont__04 .line__center > .line", {
                scrollTrigger: {
                    trigger: "#cont__04 .tit__sub",
                    scroller: pageContents,
                    scrub: true,
                        // start: "top bottom",
                        // end: "top top",

                },
                // y: 110,
                // delay: 5,
                width: 0,
                opacity: 1,
                // stagger: 0.25,
        });