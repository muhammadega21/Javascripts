let alamat = [
  "Indonesia",
  "Jepang",
  "Konoha",
  ["Sumatera Utara", "Sunda Empire", "Sumatera Barat", "Bali", "Papua"],
  [
    "Padang",
    "Surabaya",
    "Pariaman",
    "Payakumbuh",
    ["Lubuk Bagalung", "Padang Tinggi Piliang", "Koto Baru"],
  ],
  ["Jl. M. Syafei", "Jl. Kamboja"],
];

console.log(
  `Nama saya Muhammad Ega Dermawan. Saya beralamat di Negara ${alamat[0]}, Provinsi ${alamat[3][2]}, Kota ${alamat[4][3]}, Kecamatan ${alamat[4][4][1]}, ${alamat[5][0]}`
);
