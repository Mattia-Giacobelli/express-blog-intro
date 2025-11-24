const { log } = require('console')
const express = require('express')
const app = express()
const port = 3000

const posts = [
    {
        title: 'ciambellone',
        content: 'un classico della colazione',
        img: '/public/img/ciambellone.jpeg',
        tags: ['dolce', 'colazione']
    },
    {
        title: 'cracker barbabietola',
        content: 'un cracker salato alla barbabietola',
        img: '/public/img/cracker_barbabietola.jpeg',
        tags: ['salato', 'snack']
    },
    {
        title: 'pane fritto dolce',
        content: 'un pane fritto dolce',
        img: '/public/img/pane_fritto_dolce.jpeg',
        tags: ['dolce', 'snack']
    },
    {
        title: 'pasta barbabietola',
        content: 'una pasta con barbabietola',
        img: '/public/img/pasta_barbabietola.jpeg',
        tags: ['salato', 'primo']
    },
    {
        title: 'trota paesana',
        content: 'una torta paesana',
        img: '/public/img/torta_paesana.jpeg',
        tags: ['dolce', 'colazione']
    }
]


app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    res.json(posts)
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})