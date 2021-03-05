let path = require('path');
let fs = require('fs');

let chirps = [
    {
        username: "Person 1",
        message: "Hi, I like Pie."
    },
    {
        username: "Person 2",
        message: "Hi, I like Cake."
    },
    {
        username: "Person 3",
        message: "Hi, I like Cookies."
    },
    {
        username: "Person 4",
        message: "Hi, I like Ice Cream."
    },
    {
        username: "Person 5",
        message: "Hi, I like Candy."
    }
]

fs.writeFile('chirps.json', JSON.stringify(chirps), function (err) {
    if (err) throw err;
    console.log('Saved!');
});

fs.readFile('chirps.json', function (err, data) {
    if (err) throw err;
    console.log(JSON.parse(data));
})