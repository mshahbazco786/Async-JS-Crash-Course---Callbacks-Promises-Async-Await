/**
 * 
 *  getPost with 1 sec and create post with 2 sec. By the time we ran this create post. 
 *  it was the DOM already painted so we can't do anything beyond that point. So this where async programming
 *  comes in and this is the callbacks come in which is one way to handle it. To deal with we use callback param
 * 
 */

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

function createPost(post, callback) {
    setTimeout(() => {
       posts.push(post); 
       callback();
    }, 2000);
}

createPost({title: 'Post Three', body: 'This is post Three'}, getPosts);


