const galleryImages = [
    {
        src: 'images/Ap1.png',
        alt: 'Apollo',
        title: 'Apollo 1',
    }, {
        src: 'images/ApAth1.png',
        alt: 'Apollo and Athena 1',
        title: 'Apollo & Athena 1',
    }, {
        src: 'images/Ap2.png',
        alt: 'Apollo 2',
        title: 'Apollo 2',
    }, {
        src: 'images/ApAth2.png',
        alt: 'Apollo and Athena 2',
        title: 'Apollo & Athena 2',
    }, {
        src: 'images/Ap3.png',
        alt: 'Apollo 3',
        title: 'Apollo 3',
    }, {
        src: 'images/ApAth4.png',
        alt: 'Apollo and Athena 4',
        title: 'Apollo & Athena 4',
    }, {
        src: 'images/Ap4.png',
        alt: 'Apollo 4',
        title: 'Apollo 4',
    }, {
        src: 'images/ApAth3.png',
        alt: 'Apollo and Athena 3',
        title: 'Apollo & Athena 3',
    }, {
        src: 'images/Ap5.png',
        alt: 'Apollo 5',
        title: 'Apollo 5',
    }, {
        src: 'images/ApAth5.png',
        alt: 'Apollo and Athena 5',
        title: 'Apollo & Athena 5',
    }, {
        src: 'images/Ap6.png',
        alt: 'Apollo 6',
        title: 'Apollo 6',
    }, {
        src: 'images/Ath1.png',
        alt: 'Athena 1',
        title: 'Athena 1',
    }, {
        src: 'images/ApAth6.png',
        alt: 'Apollo and Athena 6',
        title: 'Apollo & Athena 6',
    }, {
        src: 'images/Ap7.png',
        alt: 'Apollo 7',
        title: 'Apollo 7',
    }, {
        src: 'images/ApAth7.png',
        alt: 'Apollo and Athena 7',
        title: 'Apollo & Athena 7',
    }, {
        src: 'images/Ap8.png',
        alt: 'Apollo 8',
        title: 'Apollo 8',
    }, {
        src: 'images/ApAth8.png',
        alt: 'Apollo and Athena 8',
        title: 'Apollo & Athena 8',
    }, {
        src: 'images/Ap9.png',
        alt: 'Apollo 9',
        title: 'Apollo 9',
    }, {
        src: 'images/ApAth9.png',
        alt: 'Apollo and Athena 9',
        title: 'Apollo & Athena 9',
    }, {
        src: 'images/ApAth10.png',
        alt: 'Apollo and Athena 10',
        title: 'Apollo & Athena 10',
    }, {
        src: 'images/Ath2.png',
        alt: 'Athena 2',
        title: 'Athena 2',
    }, {
        src: 'images/Ap11.png',
        alt: 'Apollo 11',
        title: 'Apollo 11',
    }
]

const imageGalleryContainer = document.getElementById('imageGalleryContainer');
    const likedImagesListContainer = document.getElementById('likedImageListContainer');
    const likedImagesList = likedImagesListContainer.querySelector('ol');

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    galleryImages.forEach((image, index) => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.title = image.title;

        const imgCaption = document.createElement('h4');
        imgCaption.classList.add('img-caption');
        imgCaption.textContent = image.title;

        const likeBtn = document.createElement('span');
        likeBtn.classList.add('like-btn');
        likeBtn.innerHTML = `<i class="fa-solid fa-heart"></i>`;

        likeBtn.addEventListener('click', function() {
           this.classList.toggle('active');
           updatedLikedImagesList(image.title, this.classList.contains('active')); 
        });
        
        imgContainer.appendChild(img);
        imgContainer.appendChild(imgCaption);
        imgContainer.appendChild(likeBtn);
        imageGalleryContainer.appendChild(imgContainer);

        const fromLeft = index % 2 === 0;
        const initialX = fromLeft ? -100 : 100;

        gsap.fromTo(imgContainer,
            { autoAlpha: 0, x: initialX, scale: 0.5},
            {
                duration: 1.5,
                autoAlpha: 1,
                x: 0,
                scale: 1,
                scrollTrigger: {
                    trigger: imgContainer,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play reverse play reverse',
                    markers: false,
                }
            }
        );
    });
});

function updatedLikedImagesList(title, isActive) {
    console.log("Updated List: ", title, isActive);
    const existingItem = Array.from(likedImagesList.children).find(li => li.textContent === title);

    if (isActive && !existingItem) {
        const listItem = document.createElement('li');
        listItem.textContent = title;
        likedImagesList.appendChild(listItem);
    } else if (!isActive && existingItem) {
        likedImagesList.removeChild(existingItem);
    };

    toggleLikedImagesContainerVisibility();
};

const toggleLikedImagesContainerVisibility = () => {
    const likedImageListContainer = document.getElementById('likedImageListContainer');
    if (likedImagesList.children.length > 0) {
        likedImageListContainer.classList.add('active');
    } else {
        likedImageListContainer.classList.remove('active');
    }
}