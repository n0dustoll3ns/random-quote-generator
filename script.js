function generate() {
  const options = {
    method: 'GET',
  };
  fetch('https://api.quotable.io/random', options)
    .then(response => response.json())
    .then(response => {
      document.getElementById("quote").innerHTML = response.content;
      document.getElementById("author").innerHTML = response.author;
    })
    .catch(err => {
      document.getElementById("quote").innerHTML = "Carrier pigeon with a message lost on the way";
      document.getElementById("author").innerHTML = "";
    });
}

