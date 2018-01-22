'use strict';

const bookTitles = ['rebecca',
    'blind_owl',
    'hamlet',
    'iliad_odiseh',
    'little_prince',
    'harrypotter_chamber_secrets',
    'school_boss',
    'god_father',
    'les_miserables',
    'daddy_long_leg'
];

const bookInfo = {
    rebecca: {
        title: 'horror_romance',
        language: 'english',
        author: 'Dafne Dumourier'
    },
    blind_owl: {
        title: 'philisofic',
        language: 'persian',
        author: 'Sadegh Hedayat'
    },
    hamlet: {
        title: 'dramatic',
        language: 'english',
        author: 'William Shakespiere'
    },
    iliad_odiseh: {
        title: 'essential',
        language: 'greek',
        author: 'Homers'
    },
    little_prince: {
        title: 'fantasy',
        language: 'russian',
        author: 'Antuine Saint Exoperry'
    },
    harrypotter_chamber_secrets: {
        title: 'fantasy',
        language: 'english',
        author: 'J.K. Rowling'
    },
    school_boss: {
        title: 'Romance',
        language: 'persian',
        author: 'Jalal Alahmad'
    },
    god_father: {
        title: 'horror',
        language: 'english',
        author: 'Mario Gianluigi Puzo'
    },
    les_miserables: {
        title: 'romance',
        language: 'english',
        author: 'Victor Hugo'
    },
    daddy_long_leg: {
        title: 'comedic',
        language: 'english',
        author: 'Jane Webster'
    }
};

const bookCover = {
    rebecca: "img/rebecca.jpg",
    blind_owl: "img/boof.jpg",
    hamlet: "img/hamlet.jpg",
    iliad_odiseh: "img/iliad.jpg",
    little_prince: "img/Littleprince.jpg",
    harrypotter_chamber_secrets: "img/harry.jpg",
    school_boss: "img/modir.jpg",
    god_father: "img/god.jpg",
    les_miserables: "img/victor.jpeg",
    daddy_long_leg: "img/daddy.jpg"
};



let myRoot = document.getElementById('root');

alert("WELCOME TO THE WORLD OF ELMIRA'S BOOKS!");

function render() {

    for (let i = 0; i < bookTitles.length; i++) {
        let bookId = bookTitles[i];
        let myUl = document.createElement('ul');
        let myLi = document.createElement('li');
        let myH3 = document.createElement('h3');
        let myH4 = document.createElement('h4');
        let myP = document.createElement('p');

        myUl.appendChild(myLi);
        myLi.appendChild(myP);
        myLi.appendChild(myH3);
        myLi.appendChild(myH4);
        myRoot.appendChild(myUl);
        myH3.innerHTML = bookTitles[i];
        let myImg = document.createElement('img');
        myImg.setAttribute('src', bookCover[bookId]);
        myLi.appendChild(myImg);
        myH4.innerHTML = bookInfo[bookId].title;
        myP.innerHTML = 'This book is written by ' + bookInfo[bookId].author + ' in language ' + bookInfo[bookId].language;
    }

}
render();