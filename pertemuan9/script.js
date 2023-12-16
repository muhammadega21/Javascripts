const mahasiswa = {
  nama: "Ega",
  kelas: "Sistem Informasi",
  alamat: "Padang",
};

function objMahasiswa(nama, kelas, alamat) {
  const mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.kelas = kelas;
  mahasiswa.alamat = alamat;
}

// console.log(objMahasiswa("Ega", "Sistem Informasi B", "Padang"));

const warung = {
  mie: {
    indomie: {
      harga: "Rp 3.500,00",
      stok: 99,
    },
    mie_sukses: {
      harga: "Rp 4.000,00",
      stok: "Habis",
    },
  },
};

// console.log(warung.mie.indomie.harga);

function objRoti(nama_roti, harga, stok) {
  const roti = {};
  roti.nama_roti = nama_roti;
  roti.harga = harga;
  roti.stok = stok;

  return roti;
}

console.log(objRoti("coy", "Rp 2.000,00", "99"));
