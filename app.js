const express = require('express')
const  app = express()
const courses = [
    {id: 1, name:'edu101'},
    {id: 2, name:'stp101'},
    {id: 3, name:'stm 101'},
];


app.get('/', (req, res) => {
    res.send("Hello World");

});

// app.get('/api/courses', (req, res) => {
//     res.send([1, 2, 3]);

// });

// app.get('/api/courses/1', (req, res) => {
//     res.send(req.params.id);

// });

// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.params);

// });

// app.get('/api/posts/:year/:month/:day', (req, res) => {
//     res.send(req.params);

// });

// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.query);

// });

app.get('/api/courses', (req, res) => {
    res.send(courses);

});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found')
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`)); 