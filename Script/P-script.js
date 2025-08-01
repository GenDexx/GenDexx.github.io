let menuIcon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
s
        if(top >= offset && top < offset + height){
            navLinks.forEach( links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



//////////circle-skill/////////

const circles = document.querySelectorAll('.circle-2');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = ("");
    var rotate = 360 / dots;


    for(let i = 0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
})

///////prallax//////

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-items");
      } else {
        entry.target.classList.remove("show-items");
      }
    });
  });
  
  const scrollScaleElements = document.querySelectorAll(".scroll-Scale");
  const scrollBottomElements = document.querySelectorAll(".scroll-Bottom");
  const scrollTopElements = document.querySelectorAll(".scroll-Top");
  
  scrollScaleElements.forEach((el) => observer.observe(el));
  scrollBottomElements.forEach((el) => observer.observe(el));
  scrollTopElements.forEach((el) => observer.observe(el));
  
