

function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
       
}

locomotiveAnimation()

function videoAnimation(){
    var bannervid = document.querySelector(".banner-video")
    let playbtn = document.querySelector("#play")
    
    bannervid.addEventListener("mouseenter", function(){
        gsap.to(playbtn,{
            opacity: 1,
            scale : 1
        })
    });
    
    bannervid.addEventListener("mouseleave", function(){
        gsap.to(playbtn,{
            opacity: 0,
            scale : 0
        })
    });
    
    bannervid.addEventListener("mousemove", function(dets){
        gsap.to(playbtn,{
            left:dets.x-50,
            top:dets.y-80
        })
    });
}

videoAnimation()



function loadingAnimation(){
    gsap.from(".banner h1 span", {
        y:300,
        opacity: 0,
        duration: 0.8,
        stagger:0.4
    })

    gsap.from(".banner-video ", {
        y:300,
        opacity: 0,
        scale:0.9,
        duration: 1
    })
}

loadingAnimation()


  $(document).ready(function(){
    $(".product-content").hover(function(){
      $(this).find(".hover-content").slideToggle(300);
    });
  });

function cursuranimation (){

    let circlearrow =  document.querySelector("#arrow")
  
    document.addEventListener("mousemove", function(dets){
      gsap.to( circlearrow,{
          left:dets.x,
          top:dets.y
      })
    })
  
  
    document.querySelectorAll(".main-product .grid-item").forEach(function(elem){
      elem.addEventListener("mouseenter", function(){
          gsap.to("#arrow", {
              transform : 'translate(-50%, -50%) scale(1)',
          });
      });
  
      elem.addEventListener("mouseleave", function(){
          gsap.to("#arrow", {
              transform : 'translate(-50%, -50%) scale(0)'
          });
      });
    })


}

cursuranimation();

gsap.to(".site-logo a", {
    transform: "translatey(-100%)",
    scrollTrigger:{
        trigger:".site-logo a",
        scroller:"#main",
        // markers: true,
        start: "top 0",
        end: "top -5%",
        scrub: true
    }
})

gsap.to(".site-menu ul", {
    transform: "translatey(-100px)",
    scrollTrigger: {
      trigger: ".site-menu ul",
      scroller: "#main",
    //   markers:true,
      start: "top 0%",
      end: "top -10%",
      scrub: 1,
    },
  });

  $(document).ready(function(){
    $(".toggle-menu").click(function(){
      $("body").toggleClass("header-toggle");
    });
  });

  // $(document).ready(function(){
  //   $(".toggle-menu").click(function(){
  //     gsap.to(".mobile-header", {
  //       transform:"translateY(0)",
  //       duration: 0.4
  //     })
  //   });
  // });

  // $(document).ready(function(){
  //   $(".closed-menu").click(function(){
  //     gsap.to(".mobile-header", {
  //       transform:"translateY(-100%)",
  //       duration: 0.4
  //     })
  //   });
  // });

  $(document).ready(function(){
    $(".toggle-menu").click(function(){
      $(".mobile-header").slideToggle(500);
    });
  });