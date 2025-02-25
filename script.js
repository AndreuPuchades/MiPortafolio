document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger)

    const particles = document.querySelectorAll(".particle")
    particles.forEach((particle, index) => {
        gsap.set(particle, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
        })

        gsap.to(particle, {
            duration: Math.random() * 10 + 5,
            x: "+=100",
            y: "+=100",
            rotation: 360,
            repeat: -1,
            yoyo: true,
            ease: "none",
        })

        gsap.to(particle, {
            duration: Math.random() * 5 + 2,
            scale: Math.random() * 0.5 + 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        })
    })

    const header = document.querySelector("header")
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled")
        } else {
            header.classList.remove("scrolled")
        }
    })

    const heroTl = gsap.timeline()
    heroTl
        .from(".hero-title", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        })
        .from(".hero-subtitle", {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
        })
        .from(".cta-button", {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
        })

    gsap.to(".hero-bg", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
        },
    })

    gsap.from(".hero-content", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#hero",
            start: "top center",
            end: "center center",
            scrub: 1,
        },
    })

    const fadeInElements = gsap.utils.toArray([
        ".about-content",
        ".skills-grid",
        ".timeline-item",
        ".project-card",
        ".education-item",
        ".contact-content",
    ])

    fadeInElements.forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top bottom-=100px",
                toggleActions: "play none none reverse",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        })
    })

    const projects = [
        {
            title: "Facturacion_Frontend",
            description:
                "Creé una aplicación de gestión de facturas, clientes, proyectos, productos y empresas el fontend con Vue.",
            image: "/Facturacion_Frontend.png?height=300&width=500",
            link: "https://github.com/AndreuPuchades/Facturacion_Frontend",
        },
        {
            title: "Facturacion_Backend",
            description:
                "Creé una aplicación de gestión de facturas, clientes, proyectos, productos y empresas el backend con Laravel.",
            image: "/Facturacion_Backend.png?height=300&width=500",
            link: "https://github.com/FacturacionApp/Facturacion_Backend",
        },
        {
            title: "MarketPlace-Freelancer",
            description:
                "Creé una aplicación de un market place de freelancer que este fue mi proyecto final lo hice con PHP y Vue",
            image: "/MarketPlace.png?height=300&width=500",
            link: "https://github.com/orgs/MarketPlace-Freelancer/repositories",
        },
        {
            title: "BatoiBook-vue ",
            description:
                "Implementé un sistema de análisis de sentimientos en tiempo real para datos de redes sociales utilizando Python y Apache Kafka.",
            image: "/BatoiBooks-vue.png?height=300&width=500",
            link: "https://github.com/AndreuPuchades/batoibook-vue",
        },
        {
            title: "BatoiBooks-php",
            description: "Desarrollé una plataforma de comercio electrónico escalable utilizando React, Node.js y MongoDB.",
            image: "/BatoiBooks-php.png?height=300&width=500",
            link: "https://github.com/AndreuPuchades/BatoiBooks-php",
        },
    ]

    function renderProjects() {
        const projectsContainer = document.getElementById("projects-container")
        projects.forEach((project, index) => {
            const projectElement = document.createElement("div")
            projectElement.className = "project-card"
            projectElement.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <a href="${project.link}" class="project-link">Ver Proyecto</a>
                </div>
            `
            projectsContainer.appendChild(projectElement)
        })
    }

    gsap.from("#projects .section-title", {
        scrollTrigger: {
            trigger: "#projects",
            start: "top bottom-=100px",
            toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    })

    renderProjects()

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute("href"))
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth",
                })
            }
        })
    })

    const contactForm = document.querySelector(".contact-form")
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
        alert("Gracias por tu mensaje. Te contactaré pronto.")
        contactForm.reset()
    })

    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 20%",
                scrub: 1,
            },
        })
    })

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
})
