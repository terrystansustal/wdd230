// First method works

// const images = document.querySelectorAll("[data-src]");

// const preLoadImage = function(img)
// {
//     const src = img.getAttribute("data-src");
//     if (!src)
//     {
//         return;
//     }

//     img.addEventListener("load", function() {
//         img.classList.add("loaded");
//     });

//     img.src = src;
// };

// const imgOptions = 
// {
//     threshold: 0,
//     rootMargin: "-10px"
// };

// const imgObserver = new IntersectionObserver((entries, imgObserver) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting)
//         {
//             return;
//         } else {
//             preLoadImage(entry.target);
//             imgObserver.unobserve(entry.target);
//         } 
//     });
// }, imgOptions);

// images.forEach(image => {
//     imgObserver.observe(image);
// });

// Second Method

let imagesToLoad = document.querySelectorAll("[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    }
}

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting)
            {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach(img =>
        {
            loadImages(img);
    });
}


