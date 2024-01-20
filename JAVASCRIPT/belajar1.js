// let hari = prompt("Masukan hari!").toLowerCase();

// if (hari === "senin") {
//     console.log("Selamat Bekerja Kawan")
// } else if (hari === "selasa") {
//     console.log("Selamat Bekerja Kawan")
// } else if (hari === "rabu") {
//     console.log("Selamat Bekerja Kawan")
// } else if (hari === "kamis") {
//     console.log("Selamat Bekerja Kawan")
// } else if (hari === "jumat") {
//     console.log("Selamat Bekerja Kawan")
// } else if (hari === "sabtu") {
//     console.log("Selamat Bekerja Kawan")
// } else {
//     console.log("Hari ini bukan hari kerja")
// }

// let dataMahasiswa = [
//     {
//     namaMahasiswa   : "SYERA AL-FARIDZI",
//     umur            : 18,
//     prodi           : "Teknik Informatika",
//     fakultas        : "Fakultas Sains Dan Teknologi",
//     universitas     : "Universitas Muhammadiyah Kalimantan Timur"
//     }

// ]


// const pilihan = 'abcd';
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}. Soal Nomor ${i}:`);
//     for (let j = 0; j < pilihan.length; j++) {
//         console.log(`   ${pilihan[j]}. Pilihan Jawaban `);
//     }
// }

// const studentRow = [
//     ['syera', 'sigit', 'riyan', 'budi'],
//     ['jo', 'atta', 'dede', 'nanda'],
//     ['rifqi', 'wahyu', 'joko', 'rofil']
// ]

// for (let i = 0; i < studentRow.length; i++) {
//     const row = studentRow[i];
//     console.log(`Seat Row #${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         const seat = row[j];
//         console.log(` ${seat}`);
//     }
// }

// let num = 0;

// // for (num = 0; num <=10; num++) {
// //     console.log(num);
// // }


// while(num <= 10) {
//     console.log(num);
//     num++;
// }

// const PASSWORD = 'Pass123';

// let guess = prompt('Masukan Password')

// while (guess !== PASSWORD) {
//     guess = prompt('enter the password')
// }

// alert('congrats! you have entered the right password')


// let input = prompt('hei, say something');
// while(true) {
//     input = prompt(input);
//     if(input.toLowerCase() === 'stop') break;
// }
// alert("oke")

// for (i = 0; i <= 100; i++) {
//     console.log(i);
//     if(i === 10) {
//         break;
//     }
// }

// function nyanyi() {
//     console.log('Test....');
//     console.log('Do Re Mi...');
// }

// nyanyi();

// function penjumlahan(a, b) {
//     const total = a + b;
//     return total
// }

// penjumlahan(10, 20);

// const hasil = penjumlahan(1, 4)

// let bahasa = 'HTML'

// function bahasaPemrograman() {
//     let bahasa = 'JavaScript';
//     console.log(bahasa);
// }

// console.log(bahasa);
// bahasaPemrograman();



// function lamaKerja() {
//     let jabatan = 'programmer';

//     function orangDalam() {
//         let kenalan = `orang dalam bisa masuk ${jabatan}`
//         console.log(kenalan)
//     }

//     orangDalam()
// }

// function perpangkatan(nilai) {
//     return nilai * nilai;
// }

// let hasil = perpangkatan(5)

// const hasilPerpangkatan = function perpangkatan(nilai) {
//     return nilai * nilai;
// }


// function duaKali(func) {
//     func()
//     func()
// }

// function lemparDadu() {
//     const hasil = Math.floor(Math.random() * 6) + 1;
//     console.log(hasil)
// }


// function hasilnyaAdalahFunction() {
//     const rand = Math.random();
//     if (rand > 0.10) {
//         return function() {
//             console.log("Selamat, Angkanya lebih besar!");
//         };
//     } else {
//         return function() {
//             console.log("Maaf, Angkanya lebih kecil!");
//         };
//     }
// }

// const aritmatika = {
//     perkalian: function (x,y) {
//         return x * y 
//     },
//     pembagian: function (x,y) {
//         return x / y
//     },
//     penjumlahan: function (x,y) {
//         return x + y
//     },
//     pengurangan: function (x,y) {
//         return x - y
//     }
// }

// const saya = {
//     nama: "SYERA AL-FARIDZI",
//     umur: 18,
//     kenalan: function() {
//         return `saya ${this.nama} dan berumur ${this.umur} tahun`
//     }
// }


// function teriak(msg) {
//     try {
//         console.log(msg.toUpperCase());
//     } catch (error) {
//         console.log(error);
//         console.log("Masukan tipe data string pada argument teriak()")
//     }
// }

// const animes = [
//     {
//         title: "Naruto",
//         rating: 9,
//     },
//     {
//         title: "One Piece",
//         rating: 10,
//     },
//     {
//         title: "Dragon Ball",
//         rating: 8,
//     }
// ]

// animes.forEach(function(anime){
//     console.log(`Judul ${anime.title} dengan rating ${anime.rating} / 10`)
// })

// const angka = [1,2,3,4,5,6,7,8,9,10];
// const angkaDouble = angka.map(function(num){
//     return num * 2 ;
// });

// const random = () => {
//     return Math.floor(Math.random() * 1000);
// };

// const random = () => (
//     Math.floor(Math.random() * 1000)
// );

// const add = (a,b) => a + b

// const subTotal = [1000,2000,3000,4000];

// const total = subTotal.reduce((currentTotal, singleSubtotal) => {
//     return currentTotal + singleSubtotal;
// })

// const user = {
//     nama: "al",
//     email: "alfrdzi1203@gmail.com",
// };

// const credential = {
//     password: "alfrdzi1203",
//     confirmPassword: "alfrdzi1203",
// };

// const userBaru = {...user, ...credential};

// const sumAll = (...nums) => {
//     return nums.reduce((total,el) => total + el);
// };

const user = {
    nama: "al",
    email: "alfrdzi1203@gmail.com",
    role: "Admin"
};

const userAndRole = ({nama, role}) => {
    return `${nama},dan role ${role}`;
}


