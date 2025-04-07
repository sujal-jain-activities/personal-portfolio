// Force video to play on page load
// document.addEventListener('DOMContentLoaded', function() {
//     const video = document.querySelector('.background');
//     video.play().catch(function(error) {
//         console.log("Video play failed:", error);
//     });
// });
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({
    // Enable ScrollTrigger to update on mobile resize
    autoRefreshEvents: "DOMContentLoaded, load, resize"
  });

  
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function () {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          ScrollTrigger.refresh(); // Refresh GSAP ScrollTrigger
        }, 500); // Adjust delay based on animation duration
      }
    });
  });

let lastScrollY = window.scrollY;
    const nav = document.getElementById("nav");

    window.addEventListener("scroll", () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        nav.style.top = "-110px"; // Hides the navbar
      } else {
        // Scrolling up
        nav.style.top = "0"; // Shows the navbar instantly
      }
      lastScrollY = window.scrollY; // Update scroll position
    });

var body = document.querySelector("body");
var cursor = document.querySelector('.cursor');
body.addEventListener("mousemove", function(dets) {
    gsap.to(cursor,{
    x: dets.x,
    y: dets.y,
    ease: "sine.out",
    duration: 0.5
})
});
// var nav = document.querySelector("nav");
// let lastScrollTop = 0;
// window.addEventListener('scroll', function() {
//     let scrollTop = window.scrollY || document.documentElement.scrollTop;
//     if (scrollTop > lastScrollTop) {
//         // Scroll down
//         nav.style.top = '-100px'; // Adjust this value based on your navbar height
//     } else {
//         // Scroll up
//         nav.style.top = '0';
//     }
//     lastScrollTop = scrollTop;
// });

function page1(){
var tl = gsap.timeline();
tl.from("nav , .menu",{
    y: "-100%",
    duration: 1,
    ease: "power3.out",
    opacity: 0,
    stagger: 0.6
})
tl.from(".background video",{
    y: "10%",
    duration: 1,
    opacity: 0, 
    ease: "power3.out",
})
tl.from(".background h3",{
    x: "-10%",
    duration: .5,
    opacity: 0, 
    ease: "power3.out",
})
tl.from(".profilpic",{
    x: "10%",
    duration: 0.3,
    opacity: 0, 
    ease: "power3.out",
})
tl.from(".page1btn",{
    y: "10%",
    duration: 0.3,
    opacity: 0, 
    ease: "power3.out",
})
}
 page1()
var page = document.querySelector(".page2");
function page2() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#elem", 
            start: "top 90%",
            end: "top -50%",
            scrub: 1,
            // markers: true,
        }
    });
    tl2.from(".page2h2,.page2p", {
        x: "-10%",
        duration: 1,
        ease: "power3.out",
        opacity: 0,
        stagger: 0.6
    })
    tl2.from(".page2leftcard", {
        x: "-30%",
        duration: 1,
        ease: "power3.out",
        opacity: 0,
    },"too");
    tl2.from(".page2rightcard", {
        x: "30%",
        duration: 1,
        ease: "power3.out",
        opacity: 0,
    },"too");
}
page2();
function horizontalScroll(){
    window.addEventListener("wheel",function(dets){
        if(dets.deltaY > 0){
            gsap.to(".move",{
                transform: "translateX(-200%)",
                duration: 3,
                ease:"none",
                // repeat: -1, 
            })
        }
        else{
            gsap.to(".move",{
                transform: "translateX(0%)",
                duration: 3,
                ease:"none",
            })
        }
    })
}
horizontalScroll()

var pages = document.getElementById("elem2");
function page3() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".project", 
            start: "top 90%",
            end: "top 20%",
            scrub: 1,
            // markers: true,
            onComplete: function() {
                // Play the video when animation completes
                document.getElementById('nikewebsite').play();
            }
        }
    });
    tl3.from(".page3 h2", {
        x: "-10%",
        duration: 2,
        ease: "power3.out",
        opacity: 0,
        stagger: 0.6
    })
    tl3.from(".page3 h3,.page3 h5", {
        x: "-30%",
        duration: 2,
        ease: "power3.out",
        opacity: 0,
    },"too");
    tl3.from("#nikewebsite", {
        x: "30%",
        duration: 2,
        ease: "power3.out",
        opacity: 0,
        onComplete: function() {
            // Play the video when this specific animation completes
            document.getElementById('nikewebsite').play();
        }
    },"too");
}
page3()

function footer() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "footer", 
            start: "top 90%",
            end: "top 20%",
            scrub: 1,
            // markers: true,
        }
    });
    tl4.from("footer h4", {
        x: "-10%",
        duration: 2,
        ease: "power3.out",
        opacity: 0,
        stagger: 0.6
    })
    tl4.from("footer h2", {
        y: "20%",
        duration: 2,
        ease: "power3.out",
        opacity: 0,
        stagger: 0.6
    })
    tl4.from("footer p", {
        y: "-30%",
        duration: 2,
        ease: "power3.out",
        opacity: 0,
        stagger: 0.6
    })

    tl4.from(".leftcard", {
        x: "30%",
        duration: 2,
        ease: "power3.out",
        opacity: 0,
    },"too");
    tl4.from(".rightcard", {
        x: "-30%",
        duration: 2,
        ease: "power3.out",
        opacity: 0,
    },"too");
    tl4.from(".social",{
        y:"30%",
        duration: 2,
        ease: "power3.out",
        opacity: 0,
        stagger: 0.6
    })
}
footer()



