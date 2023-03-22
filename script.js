const aussenbereich = document.querySelector(".aussenbereich");
const innenbereich = document.querySelector(".innenbereich");

function changeIndexInnen() {
  innenbereich.classList.add("increase-Zindex");
  if (aussenbereich.classList.contains("increase-Zindex")) {
    aussenbereich.classList.remove("increase-Zindex");
  }
}
function changeIndexAussen() {
  aussenbereich.classList.add("increase-Zindex");
  if (innenbereich.classList.contains("increase-Zindex")) {
    innenbereich.classList.remove("increase-Zindex");
  }
}

// Für das togglen vom dropdown menu
let menuToggle = document.querySelector(".menuToggle");
let navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
  navigation.classList.toggle("active");
};

// Slideshow

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  const mySlides = document.querySelectorAll("#my-slides");
  console.log(mySlides.length);
  if (n > mySlides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = mySlides.length;
  }
  for (let i = 0; i < mySlides.length; i++) {
    mySlides[i].style.display = "none";
  }
  mySlides[slideIndex - 1].style.display = "block";
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lightbox wenn man auf ein Bild klickt
// Lightbox macht Div
const lightbox = document.createElement("div");
// Lightbox ID wird zugewiesen
lightbox.id = "lightbox";
// Div von der Lightbox wird dem Dokument hinzugefügt
document.body.appendChild(lightbox);

const images = document.querySelectorAll("img"); // Es werden die Elemente auf die es zutrifft ausgewählt (alle mit der ID)
images.forEach((image) => {
  // Für jedes Bild
  image.addEventListener("click", (e) => {
    // Es wird die Klick hinzugefügt und bei jedem Klick auf img
    lightbox.classList.add("active"); // wird lightbox active für das img
    const img = document.createElement("img"); // Während es aktiv ist wird ein Bild erzeugt
    img.src = image.src; // Macht, dass wenn man auf das Bild drückt, kommt genau dieses Bild
    while (lightbox.firstChild) {
      // Während die lightbox nh Kind hat
      lightbox.removeChild(lightbox.firstChild); // Wird das erste Kind abgegeben
    }
    lightbox.appendChild(img); // das erstellte Bild wird zur lightbox hinzugefügt
  });
});

lightbox.addEventListener("click", (e) => {
  // Wenn man klick
  if (e.target !== e.currentTarget) return; // man kommt nur zurück wenn es nicht das jetzige target is
  lightbox.classList.remove("active"); // wird die Klasse "Active" weggenommen"
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function openGalery() {
  window.open("galery/galery.html", "_self");
}
function openYtVideo() {
  window.open("https://www.youtube.com/watch?v=ssEM-NS5DH8");
}

function highlightContent() {
  const highlight = document.querySelectorAll(".accordion__item");
    highlight.forEach((e) => {
      e.classList.add("highlight");
      
      function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }
      
      delay(2000).then(() =>e.classList.remove("highlight"));
    });
}

const toggleModal = () => {
  const bodyClassList = document.body.classList;
  if (bodyClassList.contains("open")) {
    bodyClassList.remove("open");
    bodyClassList.add("closed");
  } else {
    bodyClassList.remove("closed");
    bodyClassList.add("open");
  }
};
