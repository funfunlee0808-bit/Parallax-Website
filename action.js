// Select the class bubble
time = document.getElementsByClassName('bubbles')[0];

// starting scroll offsets for desktop
var fish1start = 100;
var fish2start = 300;
var fish3start = 700;
var fish4start = 1100;

if (screen.width < 400) {

    //Change transformation duration and translatey for mobile view
    time.style.setProperty('--transform-duration', '15s')
    time.style.setProperty('--transform-y', '-700vh')

    // start offsets for mobile
    fish1start = 250;
    fish2start = 600;
    fish3start = 1200;
    fish4start = 1800;
}

const fishConfigs = [
    { element: fish1, baseTop: 5, baseLeft: 5, startOffset: () => fish1start, verticalSpeed: 0.35, horizontalSpeed: 0.35 },
    { element: fish2, baseTop: 20, baseLeft: 20, startOffset: () => fish2start, verticalSpeed: 0.3, horizontalSpeed: 0.3 },
    { element: fish3, baseTop: 35, baseLeft: 35, startOffset: () => fish3start, verticalSpeed: 0.25, horizontalSpeed: 0.25 },
    { element: fish4, baseTop: 50, baseLeft: 50, startOffset: () => fish4start, verticalSpeed: 0.2, horizontalSpeed: 0.2 }
];



window.addEventListener('scroll', function () {

    let value = window.scrollY;   //Get Scroll Value (Mobile - High)

    text.style.top = 50 + value * -0.2 + '%';
    cloud.style.left = value * 2 + 'px';

    bird1.style.top = value * 0.1 + 'px';
    bird1.style.left = value * 1 + 'px';

    bird2.style.top = value * -0.1 + 'px';
    bird2.style.left = value * -2 + 'px';

    explore.style.marginTop = value * 1.5 + 'px';

    rocks.style.top = value * -0.14 + 'px';

    forest.style.top = value * 0.4 + 'px';
    sky.style.top = value * 0.25 + 'px';
    mountains.style.top = value * 0.25 + 'px';

    header.style.top = value * 0.7 + 'px';
    sun.style.top = value * 1 + 'px';

    //To prevent splash to move above sea water
    if (value < 380) {
        splash.style.top = 20 + value * -0.3 + 'px';
    }

    //Move fishes diagonally from top-left to bottom-right
    const moveFishDiagonally = (config) => {
        const progress = Math.max(0, value - config.startOffset());
        config.element.style.top = `calc(${config.baseTop}% + ${progress * config.verticalSpeed}px)`;
        config.element.style.left = `calc(${config.baseLeft}% + ${progress * config.horizontalSpeed}px)`;
    };

    fishConfigs.forEach(moveFishDiagonally);
})


// Contains the link for all social media handles
var links = document.getElementsByClassName("social-media");

links[0].addEventListener("click", () => { openlink(1) });
links[1].addEventListener("click", () => { openlink(2) });
links[2].addEventListener("click", () => { openlink(3) });
links[3].addEventListener("click", () => { openlink(4) });

function openlink(x) {
    if (x == 1) {
        window.open("https://www.instagram.com/_.vini._02_/", "_blank");
    }
    if (x == 2) {
        window.open("https://www.linkedin.com/in/vineet-kumar-gupta-2833ab196/", "_blank");
    }
    if (x == 3) {
        window.open("https://github.com/VineetKumar02", "_blank");
    }
    if (x == 4) {
        window.open("https://vineet-portfolio-site.netlify.app/", "_blank");
    }
}