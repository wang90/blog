/* TO DO
	- [fofurização] estilizar botão de reload
	- [improvement] start bg sound from the beginning
	- [?] colocar um pokemon diferente em cada pokebola
*/

console.clear();

(()=> {
	const bgSound    = document.querySelector(`#bg-sound`);
	const catchSound = document.querySelector(`#capture`);
	const btnReload  = document.querySelector(`.reload`);
	const canvas     = document.querySelector(`.canvas`);
	const pokeballs  = document.querySelectorAll(`.ball`);
	const pokemons   = [
		`charmander`,
		`squirtle`,
		`bulbasaur`,
		`pikachu`
	];

	function exibePokemon () {
		const pokemonSorteado = pokemons[Math.floor(Math.random() * pokemons.length)];
		canvas.innerHTML += `<div class="${pokemonSorteado}"></div>`;

		if (!bgSound.paused) bgSound.pause();
		catchSound.play();
	}

	function sorteiaPokeball () {
		const quantPokeballs = pokeballs.length;

		sorteada = pokeballs[Math.floor(Math.random() * quantPokeballs)]
		sorteada = sorteada.getAttribute(`class`).replace(`ball `, ``);
	}

	function abrePokeball () {
		this.classList.toggle(`open`);

		if (!this.classList.contains(sorteada)) return;
		exibePokemon();
	}

	function reloadPage () {
		document.location.href += ``;
		bgSound.play();
	}

	bgSound.currentTime = 13;

	sorteiaPokeball();
	pokeballs.forEach(pokeball => pokeball.addEventListener(`click`, abrePokeball));
	// btnReload.addEventListener(`click`, reloadPage);
})();