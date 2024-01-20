// const form = document.querySelector('#form');
// const input = document.querySelector('input');
// const list = document.querySelector('#notes');

// input.addEventListener('input', (e) => {
// 	document.querySelector('h1').innerText = input.value;
// 	console.log('Nilai berhasil diinput')
// })

// form.addEventListener('submit', function (e) {
// 	e.preventDefault();
// 	const noteValue = input.value;
// 	const newList = document.createElement('li');
// 	newList.innerText = noteValue;
// 	list.append(newList);
// 	input.value = '';
// });

const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

button.addEventListener("click", function (e) {
	container.style.backroundColor = generateRandomColor();
	e.stopPropagation();
});


container.addEventListener("click", function () {
	container.classList.toggle("hide");
});



const generateRandomColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	return `rgb(${r}, ${g}, ${b})`;
};