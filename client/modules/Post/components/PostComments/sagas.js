function fetchComments() {
  const response = fetch('https://jsonplaceholder.typicode.com/comments?_limit=5');
  return response.json();
}

export default fetchComments;

