const books = [
    {
       title: 'Bride',
       author: 'Ali Hazelwoo',
       cover: 'https://cdn.thestorygraph.com/ehrbiakjao7wmiatslignzup2q7y',
       genre: 'fiction fantasy romance',
       pace: 'medium-paced', 
    },
    {
       title: 'Fourth Wing',
       author: 'Rebecca Yarros',
       cover: 'https://cdn.thestorygraph.com/95moek15iljsn3q13lu92vpdq983',
       genre: 'fiction fantasy romance',
       pace: 'medium-paced', 
    },
    {
       title: 'Dune',
       author: 'Frank Herbert',
       cover: 'https://cdn.thestorygraph.com/t4vtqdw261p6ltp5x9zt5ybngkda',
       genre: 'fiction classics science-fiction',
       pace: 'slow-paced', 
    },
    {
       title: 'Divine Rivals',
       author: 'Rebecca Ross',
       cover: 'https://cdn.thestorygraph.com/jli17skz7ldshxyujxrr4qxo0m4j',
       genre: 'fiction fantasy romance young-adult',
       pace: 'medium-paced', 
    },
    {
       title: 'The Women',
       author: 'Kristin Hannah',
       cover: 'https://cdn.thestorygraph.com/to6ga3a2zl5dcknzl4jgcdgpkwal',
       genre: 'fiction historical',
       pace: 'medium-paced', 
    },
    {
       title: 'The Teacher',
       author: 'Freida McFadden',
       cover: 'https://cdn.thestorygraph.com/82g9z8ib0d32u3mmybws7j1zwex3',
       genre: 'fiction thriller',
       pace: 'fast-paced', 
    },
    {
       title: 'The Seven Husbands of Evelyn Hugo',
       author: 'Taylor Jenkins Reid',
       cover: 'https://cdn.thestorygraph.com/sycdd8nb73va8mcltcvng5on2sbr',
       genre: 'fiction fantasy romance',
       pace: 'medium-paced', 
    },
    {
       title: 'Yellowface',
       author: 'R.F. Kuang',
       cover: 'https://cdn.thestorygraph.com/sfs35j4v2y88qrk4hv2hsldi5zxa',
       genre: 'fiction contemporary literary thriller',
       pace: 'fast-paced', 
    },
    {
       title: 'One Dark Window',
       author: 'Rachel Gillig',
       cover: 'https://cdn.thestorygraph.com/p1db33z3sdeuerjnvz1ku848enmw',
       genre: 'fiction fantasy romance',
       pace: 'medium-paced', 
    },
    {
       title: 'First Lie Wins',
       author: 'Ashley Elston',
       cover: 'https://cdn.thestorygraph.com/sil55l13hpfo4kf5bu4sm3em27mm',
       genre: 'fiction thriller',
       pace: 'fast-paced', 
    }
];
   
const printBooks = (books) => {
    const bookSection = document.querySelector(".bookSelection");
    bookSection.innerHTML = '';
   
    for (const book of books) {
   
        const divBooks = document.createElement('div');
        const imgCover = document.createElement('img');
        const h3Title = document.createElement('h3');
        const pAuthor = document.createElement('p');
        const pGenre = document.createElement('p');
        const pPace = document.createElement('p');
   
        imgCover.src = book.cover;
        h3Title.innerText = book.title;
        pAuthor.innerText = book.author;
        pGenre.innerText = book.genre;
        pPace.innerText = book.pace;
   
        divBooks.appendChild(imgCover);
        divBooks.appendChild(h3Title);
        divBooks.appendChild(pAuthor);
        divBooks.appendChild(pGenre);
        divBooks.appendChild(pPace);
   
        bookSection.appendChild(divBooks);
    }
};
   
printBooks(books);

const filterBooks = () => {
    const selectedGenre = document.querySelector('.filter select:nth-child(2)').value;
    const selectedPace = document.querySelector('.filter select:nth-child(4)').value;

    const filteredBooks = books.filter(book => {
        const genreMatch = selectedGenre === '' || book.genre.includes(selectedGenre);
        const paceMatch = selectedPace === '' || book.pace.toLowerCase() === selectedPace;
        return genreMatch && paceMatch;
    });

    printBooks(filteredBooks);

    const bookSection = document.querySelector(".bookSelection");
    if (filteredBooks.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'No matches found.';
        bookSection.appendChild(message);
    }
};

const createSelectGenre = () => {
    const divFilter = document.querySelector('.filter');
   
    const h2 = document.createElement('h2');
    h2.textContent = 'Find the perfect genre';
    divFilter.appendChild(h2);
   
    const selectGenre = document.createElement('select');
    const genreOption = document.createElement('option');
    selectGenre.appendChild(genreOption);
   
    const genres = [];
   
    books.forEach(book => {
        const bookGenres = book.genre.split(' ');
        bookGenres.forEach(genre => {
            if (!genres.includes(genre)) {
                genres.push(genre);
            }
        });
    });
   
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.textContent = genre;
        selectGenre.appendChild(option);
    });
   
    divFilter.appendChild(selectGenre);

    selectGenre.addEventListener('change', () => {
        filterBooks();
    });
};

createSelectGenre();

const createSelectPace = () => {
    const divFilter = document.querySelector('.filter');
   
    const h2 = document.createElement('h2');
    h2.textContent = 'Find the perfect pace';
    divFilter.appendChild(h2);
   
    const selectPace = document.createElement('select');
    const paceOption = document.createElement('option');
    selectPace.appendChild(paceOption);
   
    const paces = [];
   
    books.forEach(book => {
        const pace = book.pace.toLowerCase();
        if (!paces.includes(pace)) {
            paces.push(pace);
        }
    });
   
    paces.forEach(pace => {
        const option = document.createElement('option');
        option.textContent = pace;
        selectPace.appendChild(option);
    });
   
    divFilter.appendChild(selectPace);

    selectPace.addEventListener('change', () => {
        filterBooks();
    });
};

createSelectPace();

const clearFilters = () => {
    document.querySelector('.filter select:nth-child(2)').value = '';
    document.querySelector('.filter select:nth-child(4)').value = '';

    filterBooks();
};

const createClearButton = () => {
    const divFilter = document.querySelector('.filter');

    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear Filters';
    clearButton.addEventListener('click', clearFilters);

    divFilter.appendChild(clearButton);
};

createClearButton();