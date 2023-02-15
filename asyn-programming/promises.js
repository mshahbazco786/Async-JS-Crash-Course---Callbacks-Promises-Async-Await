const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output
    }, 1000);
}

function createPost(post) {
    // We use promise here and promise will take callback as parameter
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post); 

            const error = false; 

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }

    }, 2000);
    });
    
}

// createPost({title: 'Post Three', body: 'This is post Three'})
// .then(getPosts)
// .catch(err => console.log(err));


// Async / Await
// async function init() {
//    await createPost({title: 'Post Three', body: 'This is post Three'});

//    getPosts();
// }
// init();


// Async / Await / Fetch

async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

getUsers();

// Promise.all 
// const Promise1 = Promise.resolve('Hello World');
// const Promise2 = 10;

// const Promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'Goodbye');
// });

// const Promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json());

// Promise.all([Promise1, Promise2, Promise1, Promise4])
// .then(values => console.log(values));