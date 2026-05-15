function PostData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((post) => displayPost(post));
}


/*
1. create a section for show data
2. select the container where put the data elements

*/

function displayPost(posts) {
  const postContainer = document.getElementById("post-container");


  for ( const post of posts) {
    const createPostDiv = document.createElement('div');
    createPostDiv.classList.add('post');
    createPostDiv.innerHTML = `
  <h4> User Id: ${post.userId}</h4>
  <h5> Post: ${post.title}</h5>
  <p>Post Description: ${post.body}</p>
  `;
  postContainer.appendChild(createPostDiv);
  }
}
PostData();
