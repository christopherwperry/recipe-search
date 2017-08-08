let button = document.getElementById("searchButton");
console.log(button);

let proxy = 'http://recipepuppyproxy.herokuapp.com/api/?q=';

button.addEventListener("click", function(){
  let search_term = document.getElementById("top_box").value;
  let searchUrl = proxy + search_term;
  console.log(searchUrl);
  fetch(searchUrl)
    .then(function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
      response.json().then(function(data) {
        for(let i = 0; i < data.results.length; i++){
          let thumbnail = data.results[i].thumbnail;
          let title = data.results[i].title;
          let link = data.results[i].href;
          let new_box = document.createElement("div");
          new_box.setAttribute("class", "box");
          let template = `
          <img src="${thumbnail}">
          <p>Title: ${title}</p>
          <p>Link: ${link}</p>
          `
          new_box.innerHTML = template
          let box = document.querySelector(".content-boxes");
          box.appendChild(new_box);
        }
      });
    })
});
