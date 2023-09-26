var rect = document.querySelector("#center");
rect.addEventListener("mousemove", function (detail) {
    var rectanglelocation = rect.getBoundingClientRect();          //2nd step we get mouse location fornusing this getBoundingClickRect(), console.log(rect.getBoundingClientRect())
    var insidevalue = detail.clientX - rectanglelocation.left;
    if (insidevalue < rectanglelocation.width / 2) {
        var redcolor = gsap.utils.mapRange(
            0, rectanglelocation.width / 2, 255, 0, insidevalue
        );
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease: Power4,
        });
    }
    else {
        var blurecolor = gsap.utils.mapRange(
            rectanglelocation.width / 2, rectanglelocation.width, 0, 255, insidevalue
        );
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blurecolor})`,
            ease: Power4,
        });

    }
})

rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "white",
    })
})
