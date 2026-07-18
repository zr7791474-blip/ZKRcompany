document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.classList.add("reveal");
    });

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){
                entry.target.classList.add("active");
            }

        });

    },{
        threshold:0.15
    });

    document.querySelectorAll(".reveal").forEach(element=>{
        observer.observe(element);
    });

    const currentPage = location.pathname.split("/").pop();

    document.querySelectorAll(".nav a").forEach(link=>{

        const href = link.getAttribute("href");

        if(href === currentPage){
            link.classList.add("active");
        }

    });

    console.log("ZKRCompany initialized successfully.");
});