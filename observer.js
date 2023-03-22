const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if(currentScroll <= 0){
    body.classList.remove("scroll-up")
  }

  if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
  }

  if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
    body.classList.add("scroll-up")
    body.classList.remove("scroll-down")
  }

  lastScroll = currentScroll;
});

const hiddenElements = document.querySelectorAll(".hidden")
const hiddenRightElements = document.querySelectorAll(".hidden-right")

const options = {
  rootMargin: "-100px"
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    }
    // else {
    //   entry.target.classList.remove("show")
    // }
  })
})

hiddenElements.forEach((el) => observer.observe(el))
hiddenRightElements.forEach((el) => observer.observe(el))
