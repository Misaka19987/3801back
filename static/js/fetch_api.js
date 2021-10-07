document.getElementById('button1').addEventListener('click', getExternal);

// Get external API data
function getExternal() {
  fetch('https://www.breakingbadapi.com/api/characters')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      // This is an array so we have to loop through it
      let output = '';

      data.forEach(function(character){
        output += `
        <div class="col">
        <div class="card text-center border-0">
          <div class="card-img-top" style="
            background-image: url(${character.img});
            background-size: cover;
            width: 100%;
            height: 500px;
          "></div>
          <h4 class="card-header">
            ${character.name} (${character.nickname})
          </h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${character.portrayed}</li>
            <li class="list-group-item">${character.occupation}</li>
          </ul>
        </div>

          <div class="card shadow-sm">
          </div>
        </div>
        
        `;
      });
      document.getElementById('output').innerHTML = output; 

    })
    .catch(function(err){
      console.log(err);
    });
}