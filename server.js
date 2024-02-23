const http = require('http');

const fakeArticlesData = [
    {
        id: 1,
        date: '2024-01-25',
        image: 'https://picsum.photos/400?random=1',
        category: 'music',
        title: 'The Evolution of Rock Music',
        excerpt: 'Exploring the journey of rock music from the 1960s to the present day.',
    },
    {
        id: 2,
        date: '2024-02-01',
        image: 'https://picsum.photos/400?random=2',
        category: 'books',
        title: 'The Impact of Digitalization on Reading Habits',
        excerpt: 'A deep dive into how digital platforms have transformed our reading habits.',
    },
    {
        id: 3,
        date: '2024-01-20',
        image: 'https://picsum.photos/400?random=3',
        category: 'music',
        title: 'Top 10 Influential Jazz Musicians of All Time',
        excerpt: 'A list of jazz musicians who have significantly shaped the genre.',
    },
    {
        id: 4,
        date: '2024-02-10',
        image: 'https://picsum.photos/400?random=4',
        category: 'books',
        title: 'Modernist Literature: Characteristics and Key Figures',
        excerpt: 'An overview of the modernist movement in literature, focusing on its main characteristics and contributors.',
    },
    {
        id: 5,
        date: '2024-02-15',
        image: 'https://picsum.photos/400?random=5',
        category: 'music',
        title: 'The Rise of Electronic Music in the 21st Century',
        excerpt: 'Examining how electronic music has become a dominant genre in the music industry.',
    },
    {
        id: 6,
        date: '2024-03-05',
        image: 'https://picsum.photos/400?random=6',
        category: 'books',
        title: 'Exploring the World of Fantasy Literature',
        excerpt: 'A journey through the realms of fantasy literature and its evolution over the years.',
    },
    {
        id: 7,
        date: '2024-03-10',
        image: 'https://picsum.photos/400?random=7',
        category: 'music',
        title: 'The Global Influence of Hip-Hop Culture',
        excerpt: 'How hip-hop transcended its musical boundaries to impact fashion, language, and politics worldwide.',
    },
    {
        id: 8,
        date: '2024-03-15',
        image: 'https://picsum.photos/400?random=8',
        category: 'books',
        title: 'Non-Fiction Reads That Can Change Your Life',
        excerpt: 'Discover non-fiction books that have the power to shift your perspective and inspire growth.',
    },
    {
        id: 9,
        date: '2024-03-20',
        image: 'https://picsum.photos/400?random=9',
        category: 'music',
        title: 'The Unseen Struggles of Independent Musicians',
        excerpt: 'Shedding light on the challenges and rewards of pursuing a career as an independent artist in the music industry.',
    },
    {
        id: 10,
        date: '2024-03-25',
        image: 'https://picsum.photos/400?random=10',
        category: 'books',
        title: 'The Future of E-Books and Digital Reading',
        excerpt: 'An analysis of the digital reading trend and what it means for the future of books and publishing.',
    }
    
];
const PORT = 6010;

function requestHandler(req, res) {
    let content;
    let status;
    if (Math.random() > 0.1) {
        if (req.url === '/articles/music') {
            content = {articles: fakeArticlesData.filter(a => a.category === 'music')};
            status = 200;
        } else if (req.url === '/articles/books') {
            content = {articles: fakeArticlesData.filter(a => a.category === 'books')};
            status = 200;
        } else {
            content = {message: 'Not found'};
            status = 404;
        }
    } else {
        content = { message: 'Internal Server Error' };
        status = 500;
    }

    res.setHeader('Access-Control-Allow-Origin', '*'); // CORS * for simplicity
    res.setHeader('Content-Type', 'application/json'); // always json
    res.writeHead(status);
    res.end(JSON.stringify(content), 'utf-8');
}

http.createServer(requestHandler).listen(PORT, err => {
    if (err) {
        console.log('Error: ', err);
        return;
    }
    console.log(`Server is listening on port: ${PORT}`);
});
