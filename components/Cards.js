// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const entryPointCards = document.querySelector('.cards-container')

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        console.log('response by axios', res)
        const javascriptArticles = res.data.articles.javascript
        javascriptArticles.forEach(function(article){
            const javascriptCards = cardMaker(article)
            entryPointCards.append(javascriptCards)
        })
        const bootstrapArticles = res.data.articles.bootstrap
        bootstrapArticles.forEach(function(article){
        const bootstrapCards = cardMaker(article)
            entryPointCards.append(bootstrapCards)
        })
        const jqueryArticles = res.data.articles.jquery
        jqueryArticles.forEach(function(article){
        const jqueryCards = cardMaker(article)
            entryPointCards.append(jqueryCards)
        })
        const technologyArticles = res.data.articles.technology
        technologyArticles.forEach(function(article){
        const technologyCards = cardMaker(article)
            entryPointCards.append(technologyCards)
        })
        const nodeArticles = res.data.articles.node
        nodeArticles.forEach(function(article){
        const nodeCards = cardMaker(article)
            entryPointCards.append(nodeCards)
        })

        const cardClick = document.querySelectorAll('.card')
        cardClick.forEach(card => {
            card.addEventListener('click', function(event){
                console.log(event.target.textContent)
            })
        })
    })
    .catch(err => {
        console.log(err)
        debugger
    })
    
function cardMaker(data){
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imageContainer = document.createElement('div')
    const image = document.createElement('img')
    const authorName = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imageContainer.classList.add('img-container')

    headline.textContent = data.headline
    image.src = data.authorPhoto
    authorName.textContent = `By ${data.authorName}`

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imageContainer)
    author.appendChild(authorName)
    imageContainer.appendChild(image)

    return card
}

