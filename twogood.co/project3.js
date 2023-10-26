
function locomotiveaminmation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locomotiveaminmation()
function navanimation(){
    
gsap.to(".nav1 svg",{
    transform:"translateY(-100%)",
    scrollTrigger:{
        trigger:".page1",
        scroller: ".main",
        // markers:true,
        start:"top 0",
        end: "top -5%",
        scrub: true,
    }
})
gsap.to(".nav2 .link",{
    transform:"translateY(-100%)",
    opacity:0,
    scrollTrigger:{
        trigger:".page1",
        scroller: ".main",
        // markers:true,
        start:"top 0",
        end: "top -5%",
        scrub: true,
    }
})
gsap.from(".nav1 svg",{
    transform:"translateY(-100%)",
    scrollTrigger:{
        trigger:".page6",
        scroller: ".main",
        // markers:true,
        start:"top 0%",
        end: "top -5%",
        scrub: true,
    }
})
}
navanimation()

function loadinganimation(){
    gsap.from(".page1 h1",{
        y:100,
        opacity:0,
        delay:0.2,
        duration:0.5,
        stagger:0.3
    })
    gsap.from(".page1 .video-container",{
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration: 0.3,
    })
    gsap.from(".page5 .divimg1",{
        opacity:0,
        scale:"0.5",
        scrollTrigger:{
            trigger:".page5",
            scroller: ".main",
            // markers:true,    
            start: "top 50%",
            end: "top 50%",
            // scrub: true,

        }
    })
    gsap.from(".page5 .divimg2",{
        opacity:0,
        scale:"0.5",
        delay:0.2,
        scrollTrigger:{
            trigger:".page5",
            scroller: ".main",
            // markers:true,    
            start: "top 50%",
            end: "top 50%",
            // scrub: true,

        }
    })
    gsap.from(".page6 .leftdiv",{
        y:100,
        opacity:0,
        delay:0.2,
        // duration:0.5,
        // stagger:0.3,
        scrollTrigger:{
            trigger:".page6",
            scroller: ".main",
            // markers:true,    
            start: "top 50%",
            end: "top 50%",
            scrub: true,

        }
    })
    gsap.from(".page6 .rightdiv",{
        y:100,
        opacity:0,
        delay:0.2,
        // duration:0.5,
        // stagger:0.3,
        scrollTrigger:{
            trigger:".page6",
            scroller: ".main",
            // markers:true,    
            start: "top 50%",
            end: "top 50%",
            scrub: true,

        }
    })
    gsap.from(".page6 img",{
        z:100,
        opacity:0,
        delay:0.2,
        // duration:0.5,
        // stagger:0.3,
        scrollTrigger:{
            trigger:".page6",
            scroller: ".main",
            // markers:true,    
            start: "top 50%",
            end: "top 50%",
            scrub: true,

        }
    })
    gsap.from(".pri",{
        x:100,
        opacity:0,
        delay:0.2,
        // duration:0.5,
        // stagger:0.3,
        scrollTrigger:{
            trigger:".pri",
            scroller: ".main",
            // markers:true,    
            start: "top 50%",
            end: "top 50%",
            scrub: true,

        }
    })
    gsap.from(".lastp p",{
        x:100,
        opacity:0,
        delay:0.2,
        // duration:0.5,
        // stagger:1,
        scrollTrigger:{
            trigger:".pri",
            scroller: ".main",
            // markers:true,    
            start: "top 50%",
            end: "top 50%",
            scrub: true,

        }
    })
}
loadinganimation()

function cursor(){

    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y
        })
    })
    
   
    document.querySelectorAll(".child").forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(1)',
            });
        });
        elem.addEventListener("mouseleave",function(){
            gsap.to("#cursor",{
                transform: 'translate(-50%,-50%) scale(0)',
                });
            });
    
    });
    var child1 = document.getElementById("child2");
    child1.addEventListener('mouseenter',function(){
        gsap.to("#cursor",{
            background:'burlywood',
        })
    })
    var child1 = document.getElementById("child2");
    child1.addEventListener('mouseleave',function(){
        gsap.to("#cursor",{
            background:'blanchedalmond',
        })
    })
    var child1 = document.getElementById("child3");
    child1.addEventListener('mouseenter',function(){
        gsap.to("#cursor",{
            background:'beige',
        })
    })
    var child1 = document.getElementById("child3");
    child1.addEventListener('mouseleave',function(){
        gsap.to("#cursor",{
            background:'cornsilk',
        })
    })
    var child1 = document.getElementById("child4");
    child1.addEventListener('mouseenter',function(){
        gsap.to("#cursor",{
            background:'cornsilk',
        })
    })
    var child1 = document.getElementById("child4");
    child1.addEventListener('mouseleave',function(){
        gsap.to("#cursor",{
            background:'burlywood',
        })
    })
    
}
cursor()

const text = document.querySelector(".text p");
text.innerHTML = text.innerText.split("").map((char, i) => `<span style ="transform:rotate(${i*10}deg)">
${char}</span>`).join("");


