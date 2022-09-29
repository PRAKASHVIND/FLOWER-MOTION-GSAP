var aj=gsap.timeline();
aj.from("#center-circle,#center-circle2",{
    x:"400%",
    duration:3,
    stagger:3,
    ease:"expo.easeInOut",
    delay:0.04,
},)
aj.to("#center-circle",{
    stagger:2,
    scale:1.2,
    ease:"expo.easeInOut",
},"-=4")
aj.to("#center-circle",{
    stagger:4,
    scale:1,

},"-=3.5")
aj.to("#center-circle2",{
    stagger:2,
    scale:1.2,
    delay:3.5,
    ease:"expo.easeInOut",
},"-=3.5")
aj.to("#center-circle2",{
    stagger:4,
    scale:1,
    delay:3.5,
},"-=3.5")
aj.to("#center-circle2",{
    x:"-600%",
    ease:"expo.easeInOut",
    delay:3.5,
},"-=3.4")
aj.to("#center-circle,#img2",{
    x:"-500%",
    duration:1.5,
    // opacity:0,
},"-=4.5")


