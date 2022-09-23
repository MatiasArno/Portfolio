function main() {
    
    const menuEl = document.querySelector(".menu");
    const contactEl = document.querySelector(".contact");
    const footerEl = document.querySelector(".footer");
    
    createHeader(menuEl);
    changeMenuStyle(menuEl);
    if(contactEl) { createContact(contactEl) }
    createFooter(footerEl);
}

main();