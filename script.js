const charactersList = document.getElementById('charactersList');
const search = document.getElementById('searchBar').value;
let hpCharacters = [];


const loadCharacters = async (a) => {
    try {
        if(a==undefined){
          a="a";
        }
        const res = await fetch('https://www.superheroapi.com/api.php/2554361714879560/search/'+a);
        hpCharacters = await res.json();
        displayCharacters(hpCharacters.results);
        console.log(hpCharacters.results);
    } catch (err) {
        console.error(err);
    }
};
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    loadCharacters(searchString);
});
const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2><a id='anchor-tag' href="info.html?abc=@${character.id}" data-heroId="${character.id}">${character.name}</a></h2>
                <button type="button">Add To Favourites</button>
                <img src="${character.image.url}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();

// <a href="result">uk</a>
// anchor-tag.addEventListener("click", function() {
//   var json = JSON.stringify({
//     id: parseInt(this.dataset.heroId),
//   });
  // var elem = document.getElementById('anchor-tag');
  // var typeId = elem.getAttribute('data-heroId');
  // console.log(id);
// });
