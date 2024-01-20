const jokes = document.querySelectorAll('#jokes');
const button = document.querySelector('button');

const addJoke = async () => {
	const jokeText = await getJokes();
	const newLI = document.createElement('LI');
	newLI.append(jokeText);
	document.querySelector('#jokes')
	.append(newLI);
}



const getJokes = async () => {
	try {
		const config = {
			headers: {
				Accept: 'application/json',
			},
		};
		const res = await axios.get('https://icanhazdadjoke.com123/', config);
		return res.data.joke;
	} catch (error) {
		return 'oops! something went wrong';
	}
};	


button.addEventListener('click', addJoke);