/* Array post */
const post = [
    {
        id : 1,
        nome : "Lorenzo Monteforte",
        foto : "img/user1.avif",
        data : "2023-11-14",
        testo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        immagine : "img/immagine1.webp",
        like : 10
    },
    {
        id : 2,
        nome : "Alessio Tosoni",
        foto : "img/user2.avif",
        data : "2023-11-13",
        testo : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        immagine : "",
        like : 50
    },
    {
        id : 3,
        nome : "Andrea Bartoloni",
        foto : "img/user3.avif",
        data : "2023-11-12",
        testo : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        immagine : "img/immagine3.avif",
        like : 100
    }
];
/* Post di esempio da generare con JS */
const container = document.getElementById("container");
const codiceHTML = `<div class="post">
                        <div class="post__header">
                            <div class="post-meta">                    
                                <div class="post-meta__icon">
                                    <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
                                </div>
                                <div class="post-meta__data">
                                    <div class="post-meta__author">Phil Mangione</div>
                                    <div class="post-meta__time">4 mesi fa</div>
                                </div>                    
                            </div>
                        </div>
                        <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
                        <div class="post__image">
                            <img src="https://unsplash.it/600/300?image=171" alt="">
                        </div>
                        <div class="post__footer">
                            <div class="likes js-likes">
                                <div class="likes__cta">
                                    <a class="like-button  js-like-button" href="#" data-postid="1">
                                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                        <span class="like-button__label">Mi Piace</span>
                                    </a>
                                </div>
                                <div class="likes__counter">
                                    Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                                </div>
                            </div> 
                        </div>            
                    </div>`;
container.innerHTML = codiceHTML;