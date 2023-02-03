document.addEventListener("DOMContentLoaded", () => {

    const aboutLink = document.querySelector("a.about")
    const projectsLink = document.querySelector("a.projects")
    const clientsLink = document.querySelector("a.clients")
    const contactLink = document.querySelector("a.contact")
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

    const portuguese = {
        h2: "Olá, eu sou Diego 👋🏻",
        h3Subtitle: "Sou um Desenvolvedor Frontend com fortes habilidades em UX design e SEO. Projetei e programei websites usados por milhares de pessoas.",
        h3Projects: "Alguns dos meus projetos",
        cv: "currículo",
        aboutMe:"Sobre mim",
        textAboutMe: "<p>Eu sou um <strong>engenheiro de software</strong> com fortes habilidades em design. Minhas habilidades em <strong>UX design</strong> me permitem converter ideias em protótipos elegantes e minhas habilidades em programação me permitem codificar esses protótipos em produtos reais. Eu criei sites usados por <strong>milhares de pessoas todos os anos</strong>. Minhas habilidades em marketing digital me ajudaram a alcançar excelentes resultados usando técnicas de <strong>SEO</strong> para diversos clientes..</p> <p>Como um desenvolvedor de software, sou especializado em <strong>Desenvolvimento Frontend</strong> e interfaces centradas no usuário. Eu comecei a minha carreira em programação como freelancer criando e codificando sites junto com a minha carreira em marketing e design.</p> <p> A experiência que tenho <strong>liderando times</strong> em marketing me deu habilidades valiosas, como empreendedorismo, relacionamento interpessoal, compromisso e empatia. </p>",
        clients: "Clientes",
        beverage: "Bebidas",
        education: "Educação",
        eletronics: "Tecnologia",
        gov: "Governo",
        nonProfit: "ONG",
        retail: "Varejo",
        telecom: "Telefonia",
        projects: "Projetos",
        contact: "Contato",
        download: "Baixe o meu",
        skills: "Habilidades",
        textDev: "<p>Eu trabalho com <strong>HTML</strong>, <strong>CSS</strong> e <strong>Javascript</strong> no dia a dia. Em apenas 12 dias criei um <a href='https://github.com/dsnovaes/bubble-gram' title='Repo link'>clone do Instagram</a> usando <strong>Rails</strong> para o backend e <strong>React</strong>, <strong>React Hooks</strong> e <strong>Redux</strong> no frontend.</p>",
        textDesigner: "<p>Como um <strong>UX/UI designer</strong> Eu crio wireframes, protótipos e layouts usando o <strong>Figma</strong> e/ou os aplicativos da <strong>Adobe Creative Suite</strong>. Todos os meus projetos têm como foco o design centrado no usuário.</p>",
        h3Clients: "Marcas com as quais já trabalhei",
        years: "anos criando produtos digitais",
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
        document.querySelectorAll(".resume").forEach(res => res.innerHTML = portuguese.cv)
        document.querySelectorAll(".about").forEach(res => res.innerHTML = portuguese.aboutMe)
        document.querySelector("#about .textContent").innerHTML = portuguese.textAboutMe
        document.querySelector("#skills .frontenddev p").innerHTML = portuguese.aboutMe
        document.querySelector("h3.projects").innerText = portuguese.h3Projects
        document.querySelector("#skills h3").innerText = portuguese.skills
        document.querySelector("#skills .highlight span").innerText = portuguese.years
        document.querySelector("#skills .frontenddev h4").innerText = portuguese.title.split("-")[0]
        document.querySelector("#skills .frontenddev p").innerHTML = portuguese.textDev
        document.querySelector("#skills .designer p").innerHTML = portuguese.textDesigner
        document.querySelector("a.projects").innerText = portuguese.projects
        document.querySelector("a.clients").innerText = portuguese.clients
        document.querySelectorAll(".beverage").forEach(res => res.innerHTML = portuguese.beverage)
        document.querySelectorAll(".education").forEach(res => res.innerHTML = portuguese.education)
        document.querySelectorAll(".eletronics").forEach(res => res.innerHTML = portuguese.eletronics)
        document.querySelectorAll(".gov").forEach(res => res.innerHTML = portuguese.gov)
        document.querySelectorAll(".non-profit").forEach(res => res.innerHTML = portuguese.nonProfit)
        document.querySelectorAll(".retail").forEach(res => res.innerHTML = portuguese.retail)
        document.querySelectorAll(".telecom").forEach(res => res.innerHTML = portuguese.telecom)
        document.querySelector("#clients h3").innerText = portuguese.h3Clients
        document.querySelector("a.contact").innerText = portuguese.contact
        document.querySelector("#intro p span").innerText = portuguese.download
        document.querySelector("#projects p span").innerText = portuguese.viewProjects
        document.querySelector("#projects p a").innerText = portuguese.labelProjects
        document.querySelector("footer h3").innerText = portuguese.footer
        document.querySelector("html").setAttribute("lang", "pt-BR")
        document.querySelector(".languageSwitch a").innerText = portuguese.language
        document.querySelector(".languageSwitch a").setAttribute("hreflang","en")
        document.querySelector(".languageSwitch a").setAttribute("lang","en")
        document.querySelector(".languageSwitch a").setAttribute("href","https://diegonovaes.com")
        document.title = portuguese.title
    }

})