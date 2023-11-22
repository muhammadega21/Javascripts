let nama = prompt("Masukkan Nama Anda");

if (nama == "salma") {
  alert(
    "Halo " +
      nama +
      " , anda mengambil kelas Javascript. Kelas anda berada di labor 103, kelas dimulai jam 10.00"
  );
} else if (nama == "andre") {
  alert(
    "Halo " +
      nama +
      ", anda mengambil kelas Design Grafis. Kelas anda berada di labor 101, kelas dimulai jam 13.00"
  );
} else {
  alert("Maaf " + nama + " , anda belum mengambil kelas di Kafekoding");
}
