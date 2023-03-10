//cara mengambil objeknya

const mahasiswa = {
    nama: "avita",
    nim: "123"
}

//Cara biasa

const namaMahasiswa =mahasiswa.nama;
console.log(namaMahasiswa);


//Destructuring
const {nama} = mahasiswa;
console.log(nama);