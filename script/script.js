gsap.registerPlugin({ScrollSmoother:{
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
}});

// ScrollSmoother.create({"#main": {
//     smooth: 1,
//     effects: true,
//     smoothTouch: 0.1,
//   }});

//first we have to create the timeline for the website
var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: "true",
    // markers: true,
}})

tl.to("#fanta", {
    top: "125%",
    left: "-5%"
}, orange)
tl.to("#orangecut", {
    top: "155%",
    left: "18%"
}, orange)
tl.to("#orange", {
    width: "15%",
    top: "165%",
    left: "70%",
}, orange)
tl.to("#orangeLeaf", {
    width: "15%",
    top: "110%",
    left: "80%",
    rotate: ('120deg'),
}, orange)

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 85%",
    end: "50% 50%",
    scrub: "true",
    // markers: "true" 
}})

tl2.from(".orange-behind1",{
    rotate: "360deg",
    left: "-70%",
    top: "110%",
}, 'lemon')
tl2.from("#sprite-can", {
    rotate: "360",
    left: "-50%",
    top: "40%"
}, 'appear')

tl2.from(".orange-behind2", {
    rotate: "360deg",
    right: "-50%",
    top: "110%"
}, 'lemon')
tl2.from("#coke-can", {
    rotate: "360deg",
    right: "-50%",
    top: "40%"
}, 'appear')



tl2.to("#orangecut", {
    rotate: "-360deg",
    width: "25%",
    left: "37%",
    top: "187%",
}, 'lemon')
tl2.to("#fanta", {
    rotate: "-360deg",
    width: "33%",
    left: "33%",
    top: "208%",
}, 'appear')