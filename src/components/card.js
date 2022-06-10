import axios from 'axios'

// const test = {
//   headline: 'adsf',
//   authorPhoto: '',
//   authorName: 'asdfname'
// }

const Card = (article) => {
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorPhoto = document.createElement('img');
  const authorName = document.createElement('span');

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  headline.textContent = article.headline;
  authorPhoto.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(authorPhoto);

  card.addEventListener("click", () => {
    console.log(article.headline.textContent)
  })

  return card;

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

// console.log(Card(test))


const cardAppender = (selector) => {
  axios.get(`http://localhost:5001/api/articles`)
    .then(res => {
      const target = res.data.articles;
      // console.log(target);
      // console.log(Object.values(target))
      const targetValues = Object.values(target);
      targetValues.forEach(art => {
        // console.log(art)
        art.forEach(a => {
          document.querySelector(selector).appendChild(Card(a));
        })
      })
    })
    
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

// cardAppender('body')
// console.log(axios.get(`http://localhost:5001/api/articles`))

export { Card, cardAppender }
