"use strict";

// render place
const ROOT_BLOG_BLOCK = document.querySelector('#user-stories__articles-wrapper');

// random number
function getRandomArticles() {
    const result = [];

    do {
        const randomNum = Math.floor(Math.random() * catalog.length);

        if (!result.includes(randomNum)) {
            result.push(randomNum);
        }
    } while (result.length < 3);

    return result;
}

// render function
function render() {
    let htmlCatalog = '';

    const filteredNumbers = getRandomArticles();

    const filteredCatalog = catalog.filter((_, index) => {
        return filteredNumbers.includes(index);
    });



    filteredCatalog.forEach(({ id, img, title, labelTime, labelReaders, articleLink }) => {

        htmlCatalog += `
        <article class="stories-blog-card">
            <a class="stories-blog-card__link" href="${articleLink}">
                <img src="${img}" alt="${title}" class="stories-blog-card__img" loading="lazy" />
                <h3 class="title-h3 title-h3_article">${title}</h3>
                <div class="stories-blog-card__label-wrapper">
                    <div class="block-label">На чтение: ${labelTime} мин</div>
                    <div class="block-label block-label_blue">Просмотров: ${labelReaders}</div>
                </div>
            </a>
        </article>
        `;
    });

    const html = `
        ${htmlCatalog}
    `;

    ROOT_BLOG_BLOCK.innerHTML = html;
}

render();




