document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger)

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
            title: "E-commerce Platform",
            description: "Desarrollé una plataforma de comercio electrónico escalable utilizando React, Node.js y MongoDB.",
            image: "/placeholder.svg?height=300&width=500",
            link: "#",
        },
        {
            title: "Análisis de Datos de Redes Sociales",
            description:
                "Implementé un sistema de análisis de sentimientos en tiempo real para datos de redes sociales utilizando Python y Apache Kafka.",
            image: "/placeholder.svg?height=300&width=500",
            link: "#",
        },
        {
            title: "Aplicación de Gestión de Tareas",
            description:
                "Creé una aplicación de gestión de tareas con sincronización en tiempo real utilizando Vue.js y Firebase.",
            image: "/placeholder.svg?height=300&width=500",
            link: "#",
        },
        {
            title: "Dashboard de Visualización de Datos",
            description:
                "Diseñé y desarrollé un dashboard interactivo para visualizar grandes conjuntos de datos utilizando D3.js y React.",
            image: "/placeholder.svg?height=300&width=500",
            link: "#",
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

    gsap.from('#projects .section-title', {
        scrollTrigger: {
            trigger: '#projects',
            start: 'top bottom-=100px',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

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
})
