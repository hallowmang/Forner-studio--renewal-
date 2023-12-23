Splitting();
gsap.registerPlugin(ScrollTrigger);

/* lenis 스크롤 스무스 */
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
lenis.stop();

$(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

const introTl = gsap.timeline();
const mIntroTl = gsap.timeline();

ScrollTrigger.matchMedia({
  "(max-width:767px)": function () {
    gsap.set(".m-logo-text .byr", {
      opacity:0,
      x:-10,
      y:-100,
    });
    gsap.set(".m-logo-text .edo", {
      opacity:0,
      x:10,
      y:100,
    });
    mIntroTl
    .to(".m-logo-text",{
      opacity:1,
    })
    .to(".m-logo-text .byr",{
      opacity:1,
      x:0
    },"mA")
    .to(".m-logo-text .edo", {
      opacity:1,
      x:0
    },"mA")
    .to(".m-logo-text .byr",{
      y:0,
      duration: 1,
      ease: "expo.inOut",
    },"mB")
    .to(".bg .text",{
      opacity:0,
      duration: 1,
    },"mB")
    .to(".m-logo-text .edo", {
      y:0,
      duration: 1,
      ease: "expo.inOut",
    },"mB")
    .to(".m-logo-text",{
      y:-200,
      duration: 1,
      ease: "expo.inOut",
    },"mC")
    .to(".bg",{
      height: "0%",
      duration: 1,
      ease: "expo.inOut",
      duration: 1,
      ease: "expo.inOut",
      onComplete: function () {
        $('.bg').hide();
        lenis.start(); //.bg가 다 끝나고 스크롤 시작
      },
    },"mC");
    gsap.to(".m-logo-text", {
      scale:0,
      opacity:0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".bg",
        start: "45% 45%",
        end: "bottom 45%",
        scrub: 0.5,
        toggleActions:"start none none reverse",
        markers:true
      },
    });
  },
  "(min-width:767px)": function () {
    introTl
      .to(".logo-text", {
        delay: 0.2,
        duration: 1,
        opacity: 1,
      })

      .to(
        ".logo-text .r",
        {
          x: 0,
          duration: 1,
          ease: "expo.inOut",
        },
        "a"
      )

      .to(
        ".logo-text .ed",
        {
          x: 0,
          duration: 1,
          ease: "expo.inOut",
        },
        "a"
      )

      .to(
        ".logo-text .ed",
        {
          y: 0,
          duration: 1,
          // delay:0.5,
          ease: "expo.inOut",
        },
        "b"
      )

      .to(
        ".logo-text .o",
        {
          y: 0,
          duration: 1,
          // delay:0.5,
          ease: "expo.inOut",
        },
        "b"
      )

      .to(
        ".text",
        {
          opacity: 0,
        },
        "b"
      )

      .to(
        ".bg",
        {
          height: "0%",
          duration: 1,
          ease: "expo.inOut",
          onComplete: function () {
            lenis.start(); //.bg가 다 끝나고 스크롤 시작
          },
        },
        "b"
      )

      .from(
        ".title-wrap",
        {
          opacity: 0,
          duration: 1,
          delay: 1,
          ease: "none",
        },
        "b"
      );
  },
});

/* introTl 끝 */
/* 스크롤시 로고 투명도,y축 변경 */
ScrollTrigger.matchMedia({
  "(max-width:1023px)": function () {
    gsap.to(".logo-text", {
      opacity: 0,
      ease: "power1.inOut",
      y: -100,
      scrollTrigger: {
        trigger: ".bg",
        start: "center 45%",
        end: "center 45%",
        scrub: 1,
      },
    });
  },
  "(min-width:1024px)": function () {
    gsap.to(".logo-text", {
      opacity: 0,
      ease: "none",
      scale: 0,
      scrollTrigger: {
        trigger: ".logo-text",
        start: "top top",
        end: "center top",
        scrub: 2,
        // markers:true,
      },
    });
  },
});

// gsap.to(".text",{
//   opacity:0,
//   ease:"none",
//   scrollTrigger:{
//     trigger:'.text',
//     start:'top 40%',
//     end:'bottom 40%',
//     scrub:1,
//     markers:true,
//   }
// });

const tlmain = gsap.timeline();

gsap.set(".img-group img", {
  scale: 1.2,
  yPercent: -5,
});

tlmain
  .to(".text-group", {
    opacity: 1,
    ease: "none",

    scrollTrigger: {
      trigger: ".sc-info",
      stagger: 1,
      start: "top center",
      end: "top center",
      scrub: 1,
    },
  })

  .to(".img-group img", {
    opacity: 1,
    stagger: 0.2,
    "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",

    scrollTrigger: {
      trigger: ".sc-info",
      start: "top 40%",
      end: "top 40%",
      scrub: 2,
    },
    scale: 1,
    yPercent: 0,
    ease: "none",
  })

  .to(".desc", {
    opacity: 1,
    ease: "none",
    duration: 3,
    stagger: 1,

    scrollTrigger: {
      trigger: ".sc-info",
      start: "60% center",
      end: "60% center",
      scrub: 1,
    },
  })

  .from(".dash .line", {
    width: "0",
    ease: "none",
    duration: 3,
    stagger: 1,

    scrollTrigger: {
      trigger: ".sc-info",
      start: "65% center",
      end: "65% center",
      scrub: 1,
    },
  });

/* photo-textwrap의 sticky */
ScrollTrigger.matchMedia({
  /* 1024px 이상일때 */
  "(min-width:1024px)": function () {
    ScrollTrigger.create({
      trigger: ".photo-textwrap",
      start: "top",
      endTrigger: ".baby-photo",
      end: "bottom 31%",
      pin: true,
      onUpdate: (self) => {
        bar = self.progress.toFixed(3) * 100;
        if (bar >= 80) {
          $(".sc-photos .photo-textbottom .rolltext-wrap").removeClass(
            "a1 a2 a3 a4"
          );
          $(".sc-photos .photo-textbottom .rolltext-wrap").addClass("a4");
        } else if (bar >= 60) {
          $(".sc-photos .photo-textbottom .rolltext-wrap").removeClass(
            "a1 a2 a3 a4"
          );
          $(".sc-photos .photo-textbottom .rolltext-wrap").addClass("a3");
        } else if (bar >= 40) {
          $(".sc-photos .photo-textbottom .rolltext-wrap").removeClass(
            "a1 a2 a3 a4"
          );
          $(".sc-photos .photo-textbottom .rolltext-wrap").addClass("a2");
        } else if (bar >= 5) {
          $(".sc-photos .photo-textbottom .rolltext-wrap").removeClass(
            "a1 a2 a3 a4"
          );
          $(".sc-photos .photo-textbottom .rolltext-wrap").addClass("a1");
        } else {
          $(".sc-photos .photo-textbottom .rolltext-wrap").removeClass(
            "a1 a2 a3 a4"
          );
        }
      },
      // markers:true,
    });
  },
});

gsap.set(".sc-photos .big-photo img", {
  scale: 1.3,
  yPercent: -5,
});

gsap.to(".sc-photos .big-photo img", {
  scrollTrigger: {
    trigger: ".sc-photos .big-photo",
    start: "0% 100%",
    end: "100% 0%",
    // markers:true,
    scrub: 0,
  },
  scale: 1,
  yPercent: 0,
});

gsap.set("[data-scroll-opacity]", {
  opacity: 0,
  y: 30,
});

ScrollTrigger.batch("[data-scroll-opacity]", {
  start: "0% 85%",
  end: "100% 0%",
  // markers:true,
  onEnter: (batch) => {
    gsap.to(batch, {
      opacity: 1,
      y: 0,
    });
  },
  onLeaveBack: (batch) => {
    gsap.to(batch, {
      opacity: 0,
      y: 30,
    });
  },
});

$(document).mousemove(function (e) {
  // values: e.clientX, e.clientY, e.pageX, e.pageY
  gsap.to(".cursor", {
    x: e.clientX,
    y: e.clientY,
    stagger: 0.1,
  });
});

$(".sc-slide .img-box a").hover(
  function () {
    $(".cursor").addClass("on");
  },
  function () {
    $(".cursor").removeClass("on");
  }
);

/* soto 슬라이드 */
ScrollTrigger.matchMedia({
  "(min-width:1024px)": function () {
    slideImg = gsap.timeline({
      scrollTrigger: {
        trigger: "main .sc-slide .inner",
        start: "0% 0%",
        end: "100% 100%",
        // markers:true,
        scrub: 1,
      },
    });

    slideImg.to(".sc-slide .img-box a:nth-child(1)", { height: 0 }, "a");
    slideImg.to(".sc-slide .slide-title a", { yPercent: -100 }, "a");

    slideImg.to(".sc-slide .img-box a:nth-child(2)", { height: 0 }, "b");
    slideImg.to(".sc-slide .slide-title a", { yPercent: -200 }, "b");

    slideImg.to(".sc-slide .img-box a:nth-child(3)", { height: 0 }, "c");
    slideImg.to(".sc-slide .slide-title a", { yPercent: -300 }, "c");

    slideImg.to(".sc-slide .img-box a:nth-child(4)", { height: 0 }, "d");
    slideImg.to(".sc-slide .slide-title a", { yPercent: -400 }, "d");
  },
});

/* soto 슬라이드 모바일 */
gsap.utils.toArray(".content-img-box img").forEach((img) => {
  gsap.set(img, {
    scale: 1.2,
    yPercent: -5,
  });

  gsap.to(img, {
    scale: 1,
    yPercent: 0,
    scrollTrigger: {
      trigger: img.closest(".sc-contents-mo .content-img-box"),
      start: "0% center",
      end: "100% 30%",
      // markers: true,
      scrub: 1,
    },
  });
});

gsap.utils.toArray(".content-title, .title-num").forEach((titleNum) => {
  gsap.set(titleNum, {
    x: 30,
    opacity: 0,
  });

  gsap.to(titleNum, {
    x: 0,
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: titleNum.closest(".content-title"),
      start: "top 80%",
      end: "top 80%",
      // markers: true,
      // scrub: 1,
      toggleActions: "play none none reverse",
      onLeaveBack: () => {
        gsap.to(titleNum, {
          x: 30,
          opacity: 0,
          duration: 0.5,
        });
      },
    },
  });
});

/* sc-all clipPathAnimation */
let clipPathAnimation = gsap.to(".hovered-img", {
  paused: true,
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  ease: "power2.inOut",
  stagger: {
    from: "random",
    amount: 0.7,
  },
});

let scAllTitle = $(".sc-all .inner .all-title .all-name");
scAllTitle.hover(
  function () {
    clipPathAnimation.play();
  },
  function () {
    clipPathAnimation.reverse();
  }
);

/* 푸터 parallax */
ScrollTrigger.matchMedia({
  "(max-width:767px)": function () {
    gsap.to(".contect-wrap", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".footer-img",
        start: "center bottom", // the default values
        end: "bottom top",
        scrub: true,
        // markers:true
      },
    });
  },
  "(max-width:1023px)": function () {
    gsap.to(".contect-wrap", {
      yPercent: -130,
      ease: "none",
      scrollTrigger: {
        trigger: ".footer-img",
        start: "center bottom", // the default values
        end: "bottom top",
        scrub: true,
        // markers:true
      },
    });
  },
  "(min-width:1024px)": function () {
    gsap.to(".contect-wrap", {
      yPercent: -70,
      ease: "none",
      scrollTrigger: {
        trigger: ".footer-img",
        start: "center bottom", // the default values
        end: "bottom top",
        scrub: true,
        // markers:true
      },
    });
  },
});

/* 푸터 SNS Split */
gsap.to(".split", {
  y: "0%",
  duration: 3,
  ease: "none",
  stagger: 1,
  opacity: 1,

  scrollTrigger: {
    trigger: ".footer-bottom",
    start: "top 60%",
    end: "top 60%",
    scrub: 3,
    // markers:true
  },
});

gsap.to(".footer-logo .char", 1, {
  y: 9,
  opacity: 1,
  stagger: 0.06,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".footer",
    start: "center 60%",
    end: "center 60%",
    scrub: 3,
    // markers:true
  },
});
