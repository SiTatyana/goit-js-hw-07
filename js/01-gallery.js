// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

//1.  Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
//2.  Реализация делегирования на div.gallery и получение url большого изображения.
//3.  Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
//4.  Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
//5.  Замена значения атрибута src элемента < img > в модальном окне перед открытием.Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
    
import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector(".gallery");

const markup = galleryItems
    .map((galleryIt) =>
        `<div class="gallery__item">
            <a class="gallery__link" href=${galleryIt.original}> 
                <img class="gallery__image" src =${galleryIt.preview} data-source=${galleryIt.original} alt="${galleryIt.description}"/>
            </a>
        </div>`)
    .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener('click', showImage);

function showImage(event) {
    event.preventDefault();
    if (event.target.classList.contains("gallery__image")) {
            basicLightbox.create(`
		<img src=${event.target.dataset.source}>
	`).show()
            return;
    }
}





// function showImage(event) {

//     event.preventDefault();

//     const instance = basicLightbox.create(`<img src=${event.target.dataset.source}>`);

//     if (event.key === "Escape") {
//         instance.close();
//         console.log (event.key)
//     }
//     if (event.target.classList.contains("gallery__image")) {
//         instance.show();
//         console.log (event)
//     }

//     return;
// }