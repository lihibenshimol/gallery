'use strict'

console.log('Starting up');

const STORAGE_KEY = 'projectsDB'

const gProjs = [
    {
        id: 'pacman',
        name: 'Pacman',
        title: 'The classic Pacman game',
        desc: 'As a part of the bootcamp we learned how to create different board games.',
        url: 'https://lihibenshimol.github.io/pacman-ca/',
        publishedAt: 1669118852000,
        lables: ['matirx', 'keyboard events', 'board games']
    },
    {
        id: 'book-shop',
        name: 'Book Shop',
        title: 'Create your own book shop!',
        desc: 'My own book-shop project as part of MVC lessons',
        url: 'https://lihibenshimol.github.io/book-shop/',
        publishedAt: 1670236232000,
        lables: ['mvc', 'data base']
    },
    {
        id: 'mine-sweeper',
        name: 'Mine Sweeper',
        title: 'The Classic Mine Sweeper in a new version',
        desc: 'My first sprint project as part of Coding Academy bootcamp.',
        url: 'https://lihibenshimol.github.io/mine-sweeper/',
        publishedAt: 1669559432000,
        lables: ['matrix', 'board games']
    },
    {
        id: 'todo',
        name: 'Todo List',
        title: 'Get all your TODOs all sort together',
        desc: 'A todo-list project I improved',
        url: 'https://lihibenshimol.github.io/TODO/',
        publishedAt: 1670254232000,
        lables: ['mvc', 'data base']
    },
    {
        id: 'guess-me',
        name: 'Guess Me',
        title: 'Let the gini read your mind',
        desc: 'The famous Akinator',
        url: 'https://lihibenshimol.github.io/Guess-me/',
        publishedAt:1670263819000,
        lables: ['mvc','data base']
    }
]

function getProj() {
    return gProjs
}


function getProjById(projId) {
    const project = gProjs.find(project => project.id === projId)
    return project
}

getDate(1670236232000)
function getDate(projTimestamp) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var date = new Date(projTimestamp)
    console.log('date = ', date)
    var month = date.getMonth()
    var year = date.getFullYear()
    var str = `${months[month]} ${year}`
    console.log('str = ', str)
        return str
}



function _saveProjToStoarge() {
    saveToStorage(STORAGE_KEY, gProjs)
}