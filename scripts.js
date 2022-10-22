AOS.init();

// JS FOR PROJECT IMAGES ON FRONT PAGE

const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const link4 = document.querySelector('.link4');
const link5 = document.querySelector('.link5');
const link6 = document.querySelector('.link6');
const link7 = document.querySelector('.link7');
const link8 = document.querySelector('.link8');
const link9 = document.querySelector('.link9');
const link10 = document.querySelector('.link10');
const link11 = document.querySelector('.link11');
const link12 = document.querySelector('.link12');
const link13 = document.querySelector('.link13');
const link14 = document.querySelector('.link14');
const greyBg = document.querySelector('.bg-color');

function showImage(link, num) {
    link.addEventListener('mouseover', function () {
        document.querySelector('.project' + num).style.opacity = 1;
        greyBg.style.opacity = 0;
    })

    link.addEventListener('mouseout', function () {
        document.querySelector('.project' + num).style.opacity = 0;
        greyBg.style.opacity = 1;
    })
}

showImage(link1, 1);
showImage(link2, 2);
showImage(link3, 3);
showImage(link4, 4);
showImage(link5, 5);
showImage(link6, 6);
showImage(link7, 7);
showImage(link8, 8);
showImage(link9, 9);
showImage(link10, 10);
showImage(link11, 11);
showImage(link12, 12);
showImage(link13, 13);
showImage(link14, 14);