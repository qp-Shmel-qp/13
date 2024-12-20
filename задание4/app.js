function fetchPosts() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Posts fetched');
    }, 2000);
  });
}

function fetchComments() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Comments fetched');
    }, 3000);
  });
}

Promise.all([fetchPosts(), fetchComments()]).then(results => {
  console.log(results);
});