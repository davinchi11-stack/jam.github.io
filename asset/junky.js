

function init(){

    $(function () {
        $("button").click(function (e) { 
            e.preventDefault();
            
          $("button").removeClass("active");
           $(this).addClass("active");
        });
    });



}


init()


    
let tl = new TimelineMax()


// tl.fromTo(
//     ".junky-cover .logo ",
//     5,
//     {opacity:"0"},
//     {opacity:"1"},
//     0.3
// )

// tl.fromTo(
//     ".loading",
//     1,
//     {display:"none"},
//     {display:"block"},
//     5
// )

// tl.fromTo(
//     ".loading",
//     1,
//     {opacity:"0"},
//     {opacity:"1"},
//     5
// )

// tl.fromTo(
//     ".junky-cover",
//     0.5,
//     {y:"0"},
//     {y:"-100%", ease:Expo.EaseInOut},
//     7
// ).fromTo(
//     "body",
//     1,
//     {overflow:"hidden"},
//     {overflow:"visible"},
    

// )


// the body animation
tl.fromTo(
    "header .wrapper",
    0.5,
    {y:"-100"},
    {y:"0", ease:"bounce"},
    1
)


tl.fromTo(
    "header .wrapper",
    0.5,
    {y:"-100"},
    {y:"0", ease:"bounce"},
    1
)



tl.fromTo(
    ".main-slider-content h3",
    1,
    {opacity:"0"},
    {opacity:"1"},
    1.3
)

tl.fromTo(
    ".main-slider-content a",
    1,
    {opacity:"0"},
    {opacity:"1"},
    1.3
)


tl.fromTo(
    ".main-slider-content h1",
    1,
    {scale:"0.5"},
    {scale:"1"},
  
)

tl.fromTo(
    ".main-slider-content h1",
    1.5,
    {x:"-500"},
    {x:"0", ease:Expo.easeInOut},
    1.6
)


tl.fromTo(
    ".controller-pics",
    1.5,
    {x:"500"},
    {x:"0", ease:Expo.easeInOut},
    1.6
)


//  the scale effect


gsap.from(
    ".grp-box",{
        duration:1,
        scale:"0.5",
        opacity:"0",
        delay:"1.7",
        stagger:"0.4",
        ease:"elastic",
        force3D: true
    }    
)


tl.fromTo(
    ".products h1",
    1,
    {opacity:"0"},
    {opacity:"1"},
    3
)


gsap.from(
    ".filter",{
        duration:1,
        scale:"0.5",
        opacity:"0",
        delay:"3.2",
        stagger:"1",
        ease:"elastic",
        force3D: true
    }    
)






