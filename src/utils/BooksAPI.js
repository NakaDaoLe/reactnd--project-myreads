
const api = "https://reactnd-books-api.udacity.com"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)
  console.log(token)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const get = async (bookId) => {
  let res = await fetch(`${api}/books/${bookId}`,{headers});
  let data = await res.json();
  return data.books;
}

export const getAll = async () => {
  let res = await fetch(`${api}/books`,{headers});
  let data = await res.json();
  return data.books;
}

export const update = async(book,shelf) => {
  let res = await fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({shelf})
    });
  return await res.json();
}

export const search = async(query) =>{
  let res = await fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  });
  let data = await res.json();
  return data.books;
}