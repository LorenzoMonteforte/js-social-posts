/* Array post */
const post = [
    {
        id : 1,
        nome : "Lorenzo Monteforte",
        foto : "img/user1.jpg",
        data : "2023-11-14",
        testo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        immagine : "img/immagine1.webp",
        like : 10
    },
    {
        id : 2,
        nome : "Alessio Tosoni",
        foto : "img/user2.webp",
        data : "2023-11-13",
        testo : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        immagine : "",
        like : 50
    },
    {
        id : 3,
        nome : "Andrea Bartoloni",
        foto : "img/user3.png",
        data : "2023-11-12",
        testo : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        immagine : "img/immagine3.avif",
        like : 100
    }
];
/* Post di esempio da generare con JS */
const container = document.getElementById("container");
for(let i=0; i<post.length; i++){
    const codiceHTML = `<div class="post">
                            <div class="post__header">
                                <div class="post-meta">                    
                                    <div class="post-meta__icon">
                                        <img class="profile-pic" src="${post[i].foto}" alt="">                    
                                    </div>
                                    <div class="post-meta__data">
                                        <div class="post-meta__author">${post[i].nome}</div>
                                        <div class="post-meta__time">${post[i].data}</div>
                                    </div>                    
                                </div>
                            </div>
                            <div class="post__text">${post[i].testo}</div>
                            <div class="post__image">
                                <img src="${post[i].immagine}" alt="">
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
                                        Piace a <b id="like-counter-1" class="js-likes-counter">${post[i].like}</b> persone
                                    </div>
                                </div> 
                            </div>            
                        </div>`;
    container.innerHTML +=  codiceHTML;
}