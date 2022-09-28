function fillHomePageContent(data) {

    const homeTitleEl = document.querySelector(".home__title");
    const homeSubtitleEl = document.querySelector(".home__subtitle");
    const homeEl = document.querySelector(".home");

    homeEl.style.backgroundImage = `url("${data.includes.Asset[1].fields.file.url}")`;
    homeTitleEl.innerHTML = data.items[0].fields.title;
    homeSubtitleEl.innerHTML = data.items[0].fields.subtitle;
}

function fillAboutmePageContent(data) {

    const aboutmeImageEl = document.querySelector(".about-me__image");
    const aboutmeTitleEl = document.querySelector(".about-me__title");
    const aboutmeTextEl = document.querySelector(".about-me__text");
    const aboutmeHashtagsArr = document.querySelectorAll(".about-me__hashtag");

    aboutmeImageEl.style.backgroundImage = `url("${data.includes.Asset[0].fields.file.url}")`;
    aboutmeTitleEl.innerHTML = data.items[1].fields.title;
    aboutmeTextEl.innerHTML = data.items[1].fields.text;
    aboutmeHashtagsArr.forEach((hashtag, i) => hashtag.innerHTML = data.items[1].fields.hashtags[i]);
}

function getCmsData() {

    return fetch("https://cdn.contentful.com/spaces/sezd397y3ob3/environments/master/entries?access_token=d30jfPjygQpzALTd6rttnxuBwCL9oUdLRc2L_fSzyiQ")
        .then( resp => resp.json())
        .then( data => data);
}

function main() {

    getCmsData().then( data => {

        fillHomePageContent(data);
        fillAboutmePageContent(data);
    });
    
    const menuEl = document.querySelector(".menu");
    const contactEl = document.querySelector(".contact");
    const footerEl = document.querySelector(".footer");
    
    createHeader(menuEl);
    changeMenuStyle(menuEl);
    if(contactEl) { createContact(contactEl) }
    createFooter(footerEl);
}

main();