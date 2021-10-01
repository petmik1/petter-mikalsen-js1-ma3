// q2
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=dfd99cacac374a65b64613f76d81598e";
const resultContainer = document.querySelector(".result");


async function calllRawgApi() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const facts = data.results;

    resultContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
      if (i === 8) {
        break;
      }

      resultContainer.innerHTML += `
        <div class="result">name: ${facts[i].name}</div>
        <div class="result">rating: ${facts[i].rating}</div>
        <div class="result">tags: ${facts[i].tags.length}<div>`
    }

  } catch (error) {
    htmlContainer.innerHTML = "an error occurred"
  }

}
calllRawgApi();