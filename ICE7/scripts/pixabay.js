/**
 * Name: Andrew Mekhail
 * Date: March 8, 2024
 */
console.log('pixabay.js loaded');

// API Key for Pixabay
const PIXABAY_API_KEY = '42777428-06918c242c81f27e7b7cd4052'; // normally we would load a key through the .env file
// URL for Pixbay request
const PIXABAY_URL = 'https://pixabay.com/api/?key=' + PIXABAY_API_KEY;
// Constant for image count
const IMAGE_COUNT = 30;

/**
 * makePosts
 * Creates posts for pictures.
 */
const makePosts = (count) => {
    getPictures(count).then(pictures => {
        pictures.forEach(picture => {
            // make HTML elements for posts using jQuery, same number as images retrieving
            // use bootstrap cards and append to
            // i.e. https://getbootstrap.com/docs/5.2/components/card/#about
            let cardDiv = $(`<div class="col-sm-2"></div>`);
            // create card
            let card = $(`<div class="card"></div>`);
            // image
            let cardImg = $(`<img src="${picture.previewURL}" class="card-img-top" alt="${picture.tags}">`);
            card.append(cardImg);
            // card body 
            let cardBody = $(`<div class="card-body"></div>`);
            card.append(cardBody);
            // card title
            let cardTitle = $(`<h5 class="card-title">Posted by ${picture.user}</h5>`);
            cardBody.append(cardTitle);
             // card text
            let cardText = $(`<p class="card-text">Tags: ${picture.tags}</p>`);
            cardBody.append(cardText);
            
            cardDiv.append(card);
            $('.row').append(cardDiv);
        });
    })
    

};

/**
 * getPictures
 * retrieves the pictures from Pixabay API
 */
const getPictures = (count) => {
    // use fetch to get the pictures from the API
    return fetch(PIXABAY_URL + `&q=monkey&image_type=photo&orientation=horizontal&per_page=${count}`)
    .then(res => res.json())
    .then(body => body.hits)
    .catch(err => {
        // handle error(s) with .catch()
        console.log(err)
        return null;
    })
};

makePosts(IMAGE_COUNT);
