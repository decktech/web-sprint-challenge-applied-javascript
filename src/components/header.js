



const Header = (title, date, temp) => {
  const headerEl = document.createElement('div');
  const dateEl = document.createElement('span');
  const titleEl = document.createElement('h1');
  const tempEl = document.createElement('span');

  headerEl.classList.add('header');
  dateEl.classList.add('date');
  dateEl.textContent = date;
  titleEl.textContent = title;
  tempEl.classList.add('temp');
  tempEl.textContent = temp;

  headerEl.appendChild(dateEl);
  headerEl.appendChild(titleEl);
  headerEl.appendChild(tempEl);

  return headerEl;
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}
// console.log(Header('tile', 'date', 'temp'))


const headerAppender = (selector) => {
  const newHeader = document.querySelector(selector).appendChild(Header());
  return newHeader;
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
