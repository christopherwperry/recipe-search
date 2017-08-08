fetch('https://www.recipepuppy.com/api/')
  .then(function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

    });

    /*


    response.json().then(function(data) {


    */// variable for search term and concat to end of url

    //for each item we need a thumbnail, title, and link to href
