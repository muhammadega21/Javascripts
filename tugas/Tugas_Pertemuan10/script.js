function gaji_karyawan(tahun_kerja, proyek) {
  const gaji_perbulan = 2500000;
  const tunjangan_pertahun = 600000 * tahun_kerja;
  const bonus = 400000;

  const gaji = {};
  gaji.gaji_pertahun = 12 * gaji_perbulan * tahun_kerja;
  gaji.bonus = bonus * proyek;

  const total_gaji = gaji.gaji_pertahun + tunjangan_pertahun + gaji.bonus;

  return total_gaji;
}

total_gaji = gaji_karyawan(6, 7);

console.log(`Gaji bersih anda selama 6 tahun adalah Rp.${total_gaji}`);
