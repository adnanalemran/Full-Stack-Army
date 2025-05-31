const express = require('express');

const app = express();
const port = 8000;
app.listen(port, () => {
  console.log('Server is running on http://localhost:' + port);
});

app.get('/', (req, res) => {
  res.send('Server is running on port ' + port);
});

 
const books = [
    { id: 1, title: '1984', author: 'George Orwell', price: 9.99 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12.99 },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10.99 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', price: 11.99 },
    { id: 5, title: 'Fahrenheit 451', author: 'Ray Bradbury', price: 8.99 }
];


app.get('/books', (req, res) => {
    console.log(req.query.show);
    if (req.query.show === "all"){
        return res.json(books);
    }
    if (req.query.price == '10') {
        return res.json(books.filter(book => book.price <= 10));
    }
    const result = books;
    res.json(result);
});
