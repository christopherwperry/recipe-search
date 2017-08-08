let button = document.getElementById("searchButton");
console.log(button);

let proxy = 'http://recipepuppyproxy.herokuapp.com/api/?i=';

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
        console.log(data.results[1].thumbnail)
        for(let i = 0; i < data.results.length; i++){
          let thumbnail = data.results[i].thumbnail;
          let title = data.results[i].title;
          let link = data.results[i].href;
          let ingred = data.results[i].ingredients;
          let new_box = document.createElement("div");
          new_box.setAttribute("class", "box");
          let template = `
          <img src="${thumbnail}">
          <p>${title}</p>
          <p>Ingredients: ${ingred}</p>
          <p><a href="${link}">Recipe</a></p>
          `
          new_box.innerHTML = template
          let box = document.querySelector(".content-boxes");
          box.appendChild(new_box);
        }
      });
    })
});
