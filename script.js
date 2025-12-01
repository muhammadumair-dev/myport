new Typed("#typed-v2", {
    strings: ["AI SOFTWARE DEVELOPER", "WEB DEVELOPER", "MACHINE LEARNING ENGINEER"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    cursorChar: "_",
});

function setupNavbarV2() {
    const width = window.innerWidth;
    const links = document.querySelectorAll(".nav-v2 ul li a");
    const sections = document.querySelectorAll(".content-section-v2");
    const customBox = document.querySelector(".custom-box-v2");

    // Remove previous listeners
    links.forEach(link => {
        const clone = link.cloneNode(true);
        link.parentNode.replaceChild(clone, link);
    });

    const navLinks = document.querySelectorAll(".nav-v2 ul li a");

    // Desktop mode: switch sections
    if (width >= 1024) {
        navLinks.forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                navLinks.forEach(l => l.classList.remove("active-v2"));
                link.classList.add("active-v2");

                const target = link.getAttribute("href").substring(1);
                sections.forEach(sec => {
                    sec.classList.remove("active-section-v2");
                    if (sec.id === target) sec.classList.add("active-section-v2");
                });

                if (customBox) customBox.scrollTop = 0;
            });
        });
    }

    // Mobile + Tablet: smooth scroll
    else {
        navLinks.forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute("href"));
                if (target) {
                    const offsetTop = target.offsetTop - 60;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth"
                    });
                }
            });
        });
    }
}

window.addEventListener("load", setupNavbarV2);
window.addEventListener("resize", setupNavbarV2);


new Typed("#typed", {
    strings: ["AI SOFTWARE DEVELOPER", "WEB DEVELOPER", "MACHINE LEARNING ENGINEER"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    cursorChar: "_",
});

function setupNavbar() {
    const width = window.innerWidth;
    const links = document.querySelectorAll(".nav ul li a");
    const sections = document.querySelectorAll(".content-section");
    const customBox = document.querySelector(".custom-box");

    // Remove Previous Listeners
    links.forEach(link => {
        const clone = link.cloneNode(true);
        link.parentNode.replaceChild(clone, link);
    });

    const navLinks = document.querySelectorAll(".nav ul li a");

    //  DESKTOP MODE: 1024px and above = Section switching
    if (width >= 1024) {
        navLinks.forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                navLinks.forEach(l => l.classList.remove("active"));
                link.classList.add("active");

                const target = link.getAttribute("href").substring(1);
                sections.forEach(sec => {
                    sec.classList.remove("active-section");
                    if (sec.id === target) sec.classList.add("active-section");
                });

                if (customBox) customBox.scrollTop = 0;
            });
        });
    }

    //  MOBILE + TABLET: <1024px = Smooth Scroll
    else {
        navLinks.forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute("href"));
                if (target) {
                    const offsetTop = target.offsetTop - 60;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                }
            });
        });
    }
}

window.addEventListener("load", setupNavbar);
window.addEventListener("resize", setupNavbar);





new Typed("#name-typed", {
    strings: [,

        "Muhammad Umair",
        "Computer Vision Engineer",
        "Senior AI Engineer",
        "Machine Learning Developer"
    ],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
    cursorChar: "_",
});

// Data for each category
const images = {
    all: [
        {
            img: "./image/work-1img.jpg",
            button: "View More",
            text: "Poster generator with DALL-E prompts",


        },
        {
            img: "./image/work-2img.jpg",
            button: "View More2",
            text: "This is Work 2 description."
        }
        ,

        {
            img: "./image/work-1,3img.jpg",
            button: "See Website",
            text: "Another website project."
        }
        ,

        {
            img: "./image/work-1,4img.jpg",
            button: "See Website",
            text: "Another website project."
        }
        ,

        {
            img: "./image/work-3img.jpg",
            button: "See Website",
            text: "Another website project."
        }
        ,

        {
            img: "./image/work-1,5img.jpg",
            button: "See Website",
            text: "Another website project."
        }

    ],
    website: [
        {
            img: "./image/work-1img.jpg",
            button: "See Website",
            text: "Website project description."
        },
        {
            img: "./image/work-3img.jpg",
            button: "See Website",
            text: "Another website project."
        }
    ],
    software: [
        {
            img: "./image/work-1,3img.jpg",
            button: "Download",
            text: "Software project 1 details."
        },
        {
            img: "./image/work-1,5img.jpg",
            button: "Download",
            text: "Software project 2 details."
        }
    ],
    generator: [
        {
            img: "./image/work-2img.jpg",
            button: "Generate",
            text: "Generator project 1 description."
        },
        {
            img: "./image/work-3img.jpg",
            button: "Generate",
            text: "Generator project 2 description."
        }
    ],
    app: [
        {
            img: "./image/work-1,5img.jpg",
            button: "Generate",
            text: "Generator project 1 description."
        },
        {
            img: "./image/work-1,4img.jpg",
            button: "Generate",
            text: "Generator project 2 description."
        }
    ]
};

// Function to render items
function renderItems(category) {
    const container = document.getElementById("worksContainer");
    container.innerHTML = "";

    images[category].forEach(item => {
        const div = document.createElement("div");
        div.classList.add("work-item");
        div.innerHTML = `
        <img src="${item.img}" alt="">
        <button class="work-btn">${item.button}</button>
        <p class="work-text">${item.text}</p>
      `;
        container.appendChild(div);
    });
}

// Initial load
renderItems("all");

// Filter click
document.querySelectorAll(".filter li").forEach(btn => {
    btn.addEventListener("click", function () {
        document.querySelectorAll(".filter li").forEach(el => el.classList.remove("active"));
        this.classList.add("active");

        let category = this.getAttribute("data-filter");
        renderItems(category);
    });
});

// Blog data
const blogPosts = {
    all: [
        {

            img: "./image/work-1,4img.jpg",
            button: "Read More",
            text: 
                "First Blog Post: Tech world update"
          
        },
        {
            img: "./image/work-1,4img.jpg",
            button: "Read More",
            text: "First Blog Post: Tech world update"
        },
        {
            img: "./image/work-1,4img.jpg",
            button: "Read More",
            text: "First Blog Post: Tech world update"
        },
        {
            img: "./image/work-1,4img.jpg",
            button: "Read More",
            text: "First Blog Post: Tech world update"
        }
    ],
    tech: [
        {
            img: "./image/work-1,4img.jpg",
            button: "Read More",
            text: "First Blog Post: Tech world update"
        }
    ],
    design: [
        {
            img: "./image/work-1,4img.jpg",
            button: "Read More",
            text: "First Blog Post: Tech world update"
        },
        {
            img: "./image/work-1,4img.jpg",
            button: "Read More",
            text: "First Blog Post: Tech world update"
        }
    ],
    tips: [
        {
            img: "./image/work-1,5img.jpg",
            button: "Read More",
            text: "Third Blog Post: Tips for developers"
        },
        {
            img: "./image/work-1,4img.jpg",
            button: "Read More",
            text: "First Blog Post: Tech world update"
        },
        {
            img: "./image/work-1,4img.jpg",
            button: "Read More",
            text: "First Blog Post: Tech world update"
        }
    ]
};

// Render blog posts
function renderBlog(category) {
    const container = document.getElementById("blogContainer");
    container.innerHTML = "";

    blogPosts[category].forEach(post => {
        const div = document.createElement("div");
        div.classList.add("work-item");
        div.innerHTML = `
        <img src="${post.img}" alt="">
        <button class="work-btn">${post.button}</button>
        <p class="work-text">${post.text}</p>
      `;
        container.appendChild(div);
    });
}

// Initial load
renderBlog("all");

// Filter click for blog
document.querySelectorAll(".blog-filter li").forEach(btn => {
    btn.addEventListener("click", function () {
        document.querySelectorAll(".blog-filter li").forEach(el => el.classList.remove("active"));
        this.classList.add("active");

        let category = this.getAttribute("data-filter");
        renderBlog(category);
    });
});

// Select all slides, dots and progress bar
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const progressBar = document.getElementById('progressBar');

// Show slide function
function showSlide(index) {
    // hide/show slides
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    // update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    // update progress bar
    progressBar.style.width = ((index + 1) / slides.length) * 100 + '%';
}

// dots click event
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.dataset.slide);
        showSlide(index);
    });
});

// (optional) auto-slide after 5 sec
let currentSlide = 0;
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Start at first slide
showSlide(0);


