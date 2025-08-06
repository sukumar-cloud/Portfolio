function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "navig"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "navig";
    }
  }

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */

  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.my-img',{delay: 200})
sr.reveal('.full',{delay: 200})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.cv',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })

  const srRightone = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })

  


  srLeft.reveal('.contact-info',{delay: 100})
  srRightone.reveal('.contact-two',{delay:100})
  
  srLeft.reveal('.intro',{delay: 100})
//   srLeft.reveal('.contact-info',{delay: 100})


  /* -- Education INFO & CONTACT INFO -- */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.edu-intro',{delay: 100})
//   srRight.reveal('.contact-info',{delay: 100})








