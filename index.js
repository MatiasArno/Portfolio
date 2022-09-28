function fillHomePageContent(data) {

    const homeTitleEl = document.querySelector(".home__title");
    const homeSubtitleEl = document.querySelector(".home__subtitle");
    const homeEl = document.querySelector(".home");

    homeEl.style.backgroundImage = `url("${data.includes.Asset[1].fields.file.url}")`;
    homeTitleEl.innerHTML = data.items[0].fields.title;
    homeSubtitleEl.innerHTML = data.items[0].fields.subtitle;
}

function getHomePageInfo() {

    return fetch("https://cdn.contentful.com/spaces/sezd397y3ob3/environments/master/entries?access_token=d30jfPjygQpzALTd6rttnxuBwCL9oUdLRc2L_fSzyiQ")
        .then( resp => resp.json())
        .then( data => data);
}

function main() {

    getHomePageInfo().then( data => fillHomePageContent(data));
    
    const menuEl = document.querySelector(".menu");
    const contactEl = document.querySelector(".contact");
    const footerEl = document.querySelector(".footer");
    
    createHeader(menuEl);
    changeMenuStyle(menuEl);
    if(contactEl) { createContact(contactEl) }
    createFooter(footerEl);
}

main();