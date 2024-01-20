document.querySelector('button').addEventListener('click', (e) => {
	console.log(e);
});

const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
	switch (e.code) {
		case 'ArrowUp':
			console.log('Tombol Arah Atas');
			break;
		case 'ArrowDown':
			console.log('Tombol Arah Bawah');
			break;
		case 'ArrowLeft':
			console.log('Tombol Arah Kiri');
			break;
		case 'ArrowRight':
			console.log('Tombol Arah Kanan');
			break;
		default:
			console.log('diabaikan');
	}
});

// input.addEventListener('keyup', () => {
// 	console.log('Tombol dirilis');
// });





// document.querySelector('button').addEventListener('click', (evt) => {
// 	console.log(evt);
// });

// const input = document.querySelector('input');
// input.addEventListener('keydown', () => {
// 	console.log('Tombol Ditekan')
// });


// input.addEventListener('keyup', () => {
// 	console.log('Tombol Dirilis')
// });