document.addEventListener("DOMContentLoaded", () => {
    const portuguese = {
        h2: "Olá, eu sou Diego 👋🏻",
        h3Subtitle: "Sou um Desenvolvedor Frontend com fortes habilidades em UX design e SEO. Projetei e programei websites usados por milhares de pessoas.",
        h3Projects: "Alguns dos meus projetos",
        cv: "currículo",
        aboutMe:"Sobre mim",
        projects: "projetos",
        contact: "contato",
        download: "Baixe o meu",
        viewProjects: "Veja todos os meus",
        labelProjects: "projetos no Github",
        footer: "Vamos trabalhar juntos?",
        language: "I also speak english",
        title: "Desenvolvedor Frontend - Diego Novaes"
    }
    const tld = window.location.origin.split('.').pop();
    if (tld === "br") {
        document.querySelector("h2").innerText = portuguese.h2
        document.querySelector("h3").innerText = portuguese.h3Subtitle
        const resumes = document.querySelectorAll(".resume")
        resumes.forEach(res => res.innerHTML = portuguese.cv)
        document.querySelector("h3.projects").innerText = portuguese.h3Projects
        document.querySelector("a.about").innerText = portuguese.projects
        document.querySelector("a.projects").innerText = portuguese.projects
        document.querySelector("a.contact").innerText = portuguese.contact
        document.querySelector(".intro p span").innerText = portuguese.download
        document.querySelector(".projects p span").innerText = portuguese.viewProjects
        document.querySelector(".projects p a").innerText = portuguese.labelProjects
        document.querySelector("footer h3").innerText = portuguese.footer
        document.querySelector("html").setAttribute("lang", "pt-BR")
        document.querySelector(".languageSwitch a").innerText = portuguese.language
        document.querySelector(".languageSwitch a").setAttribute("hreflang","en")
        document.querySelector(".languageSwitch a").setAttribute("lang","en")
        document.querySelector(".languageSwitch a").setAttribute("href","https://diegonovaes.com")
        document.title = portuguese.title
    }
    const aboutLink = document.querySelector(".about")
    const projectsLink = document.querySelector(".projects")
    const clientsLink = document.querySelector(".clients")
    const contactLink = document.querySelector(".contact")
    aboutLink.addEventListener("click",(e)=>{
        e.preventDefault();
        document.getElementById("about").scrollIntoView()
    })
    projectsLink.addEventListener("click",(e)=>{
        e.preventDefault();
        document.getElementById("projects").scrollIntoView()
    })
    clientsLink.addEventListener("click",(e)=>{
        e.preventDefault();
        document.getElementById("clients").scrollIntoView()
    })
    contactLink.addEventListener("click",(e)=>{
        e.preventDefault();
        document.querySelector("footer").scrollIntoView()
    })


})