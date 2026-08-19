export const CARI_KANDIDAT_SKILLS = ["React", "Node.js", "TypeScript", "Python", "SQL", "UI/UX Design", "Project Management", "Digital Marketing"];

export interface SearchCandidate {
  id: string; nama: string; lokasi: string; rating: number; role: string; company: string; gaji: string;
  skills: string[]; pengalaman: string; ketersediaan: string; levelPekerjaan: string;
  email: string; phone: string; ringkasan: string; tanggalLahir: string; jenisKelamin: string; domisili: string; tipeKerja: string;
  riwayatKerja: { posisi: string; perusahaan: string; periode: string; deskripsi: string }[];
  pendidikanList: { jenjang: string; institusi: string; periode: string }[];
  sertifikasi: string[];
  portfolio: { platform: "github" | "linkedin"; url: string }[];
  catatan: { penulis: string; waktu: string; isi: string }[];
}

export const SEARCH_RESULT_CANDIDATES: SearchCandidate[] = [
  { id: "SC1", nama: "Siti Aminah", lokasi: "Bandung", rating: 4.5, role: "UX Researcher", company: "Gojek", gaji: "Rp 10-15 Juta / bulan", skills: ["User Research", "Interview", "Usability Test", "Wireframing", "Prototyping", "Figma", "Personas"], pengalaman: "3 Tahun", ketersediaan: "1 Bulan", levelPekerjaan: "Mid-Senior",
    email: "siti.aminah@email.com", phone: "+62 813 2345 6781", ringkasan: "UX Researcher dengan 3+ tahun pengalaman merancang riset pengguna untuk produk digital skala besar.", tanggalLahir: "12-04-1996", jenisKelamin: "Perempuan", domisili: "Bandung", tipeKerja: "Hybrid",
    riwayatKerja: [{ posisi: "UX Researcher", perusahaan: "Gojek", periode: "Jan 2022 - Sekarang", deskripsi: "Memimpin riset pengguna untuk fitur pembayaran, melakukan usability testing dengan 50+ partisipan." }],
    pendidikanList: [{ jenjang: "S1, Psikologi", institusi: "Universitas Padjadjaran", periode: "2015 - 2019" }],
    sertifikasi: ["Google UX Design Certificate"], portfolio: [{ platform: "linkedin", url: "linkedin.com/in/sitiaminah" }, { platform: "github", url: "github.com/sitiaminah" }],
    catatan: [{ penulis: "Aditya Rahardjo", waktu: "2j lalu", isi: "Portfolio riset sangat kuat, rekomendasi lanjut ke tahap interview." }] },
  { id: "SC2", nama: "Budi Pratama", lokasi: "Jakarta", rating: 4.5, role: "Product Designer", company: "Tokopedia", gaji: "Rp 12-15 Juta / bulan", skills: ["UI/UX", "Figma", "Wireframing", "Sketch", "Adobe XD", "Prototyping"], pengalaman: "7 Tahun", ketersediaan: "Segera", levelPekerjaan: "Senior",
    email: "budi.pratama@email.com", phone: "+62 812 3456 7891", ringkasan: "Product Designer dengan 7+ tahun pengalaman memimpin desain produk end-to-end di perusahaan e-commerce.", tanggalLahir: "24-08-1992", jenisKelamin: "Laki-laki", domisili: "Jakarta Selatan", tipeKerja: "Hybrid",
    riwayatKerja: [{ posisi: "Product Designer", perusahaan: "Tokopedia", periode: "Feb 2020 - Sekarang", deskripsi: "Memimpin desain fitur checkout dan onboarding penjual, meningkatkan konversi 18%." }],
    pendidikanList: [{ jenjang: "S1, Desain Komunikasi Visual", institusi: "Institut Teknologi Bandung", periode: "2011 - 2015" }],
    sertifikasi: ["Google UX Design Certificate", "Certified Scrum Product Owner"], portfolio: [{ platform: "linkedin", url: "linkedin.com/in/budipratama" }, { platform: "github", url: "github.com/budipratama" }],
    catatan: [{ penulis: "Sarah Wijaya", waktu: "Kemarin", isi: "Sangat berpengalaman, cocok untuk posisi lead designer." }] },
  { id: "SC3", nama: "Dina Larasati", lokasi: "Jakarta", rating: 4.5, role: "UI/UX Designer", company: "Ruangguru", gaji: "Rp 9-14 Juta / bulan", skills: ["UI Design", "Adobe XD", "Figma", "Product Design", "Wireframing"], pengalaman: "4 Tahun", ketersediaan: "2 Minggu", levelPekerjaan: "Mid-Senior",
    email: "dina.larasati@email.com", phone: "+62 811 2233 4455", ringkasan: "UI/UX Designer dengan pengalaman merancang produk edukasi untuk jutaan pengguna.", tanggalLahir: "03-11-1998", jenisKelamin: "Perempuan", domisili: "Jakarta Timur", tipeKerja: "Remote",
    riwayatKerja: [{ posisi: "UI/UX Designer", perusahaan: "Ruangguru", periode: "Jun 2021 - Sekarang", deskripsi: "Mendesain ulang aplikasi mobile, meningkatkan retensi pengguna sebesar 12%." }],
    pendidikanList: [{ jenjang: "S1, Desain Produk", institusi: "Universitas Bina Nusantara", periode: "2016 - 2020" }],
    sertifikasi: ["Adobe Certified Professional"], portfolio: [{ platform: "linkedin", url: "linkedin.com/in/dinalarasati" }, { platform: "github", url: "github.com/dinalarasati" }],
    catatan: [{ penulis: "Aditya Rahardjo", waktu: "3 hari lalu", isi: "Portofolio rapi, gaya desain sesuai brand kita." }] },
  { id: "SC4", nama: "Eko Nugroho", lokasi: "Jakarta", rating: 4.5, role: "Visual Designer", company: "Traveloka", gaji: "Rp 8-12 Juta / bulan", skills: ["Visual Design", "Illustrator", "Photoshop", "Branding", "Typography"], pengalaman: "6 Tahun", ketersediaan: "Segera", levelPekerjaan: "Senior",
    email: "eko.nugroho@email.com", phone: "+62 815 6677 8899", ringkasan: "Visual Designer dengan spesialisasi branding dan ilustrasi untuk kampanye marketing digital.", tanggalLahir: "19-01-1994", jenisKelamin: "Laki-laki", domisili: "Jakarta Barat", tipeKerja: "WFO",
    riwayatKerja: [{ posisi: "Visual Designer", perusahaan: "Traveloka", periode: "Mei 2019 - Sekarang", deskripsi: "Mengelola identitas visual kampanye promosi lintas platform." }],
    pendidikanList: [{ jenjang: "S1, Desain Grafis", institusi: "Universitas Trisakti", periode: "2013 - 2017" }],
    sertifikasi: ["Adobe Certified Expert"], portfolio: [{ platform: "linkedin", url: "linkedin.com/in/ekonugroho" }, { platform: "github", url: "github.com/ekonugroho" }],
    catatan: [{ penulis: "Sarah Wijaya", waktu: "1 minggu lalu", isi: "Gaya visual kuat dan konsisten dengan brand guideline." }] },
  { id: "SC5", nama: "Rina Kusuma", lokasi: "Surabaya", rating: 4.3, role: "Frontend Developer", company: "Shopee", gaji: "Rp 11-16 Juta / bulan", skills: ["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS"], pengalaman: "5 Tahun", ketersediaan: "1 Bulan", levelPekerjaan: "Mid-Senior",
    email: "rina.kusuma@email.com", phone: "+62 817 9988 7766", ringkasan: "Frontend Developer dengan 5+ tahun pengalaman membangun aplikasi web performa tinggi.", tanggalLahir: "07-06-1995", jenisKelamin: "Perempuan", domisili: "Surabaya", tipeKerja: "Remote",
    riwayatKerja: [{ posisi: "Frontend Developer", perusahaan: "Shopee", periode: "Agt 2021 - Sekarang", deskripsi: "Membangun komponen UI reusable dan optimasi performa halaman produk." }],
    pendidikanList: [{ jenjang: "S1, Teknik Informatika", institusi: "Institut Teknologi Sepuluh Nopember", periode: "2013 - 2017" }],
    sertifikasi: ["Meta Front-End Developer Certificate"], portfolio: [{ platform: "linkedin", url: "linkedin.com/in/rinakusuma" }, { platform: "github", url: "github.com/rinakusuma" }],
    catatan: [{ penulis: "Aditya Rahardjo", waktu: "5 hari lalu", isi: "Kode bersih, familiar dengan stack yang kita pakai." }] },
  { id: "SC6", nama: "Fajar Ramadhan", lokasi: "Bandung", rating: 4.2, role: "Data Analyst", company: "Bibit", gaji: "Rp 10-14 Juta / bulan", skills: ["Python", "SQL", "Data Analysis", "Machine Learning", "Tableau"], pengalaman: "4 Tahun", ketersediaan: "> 1 Bulan", levelPekerjaan: "Mid-Senior",
    email: "fajar.ramadhan@email.com", phone: "+62 818 1122 3344", ringkasan: "Data Analyst dengan pengalaman membangun dashboard dan model prediktif untuk keputusan bisnis.", tanggalLahir: "28-09-1997", jenisKelamin: "Laki-laki", domisili: "Bandung", tipeKerja: "Hybrid",
    riwayatKerja: [{ posisi: "Data Analyst", perusahaan: "Bibit", periode: "Jan 2021 - Sekarang", deskripsi: "Membangun dashboard analitik investasi dan model churn prediction." }],
    pendidikanList: [{ jenjang: "S1, Statistika", institusi: "Institut Pertanian Bogor", periode: "2015 - 2019" }],
    sertifikasi: ["Google Data Analytics Certificate"], portfolio: [{ platform: "github", url: "github.com/fajarramadhan" }, { platform: "linkedin", url: "linkedin.com/in/fajarramadhan" }],
    catatan: [{ penulis: "Sarah Wijaya", waktu: "2 minggu lalu", isi: "Kuat di analisis statistik, cocok untuk tim data." }] },
  { id: "SC7", nama: "Maya Puspitasari", lokasi: "Jakarta", rating: 4.1, role: "Digital Marketing Specialist", company: "Blibli", gaji: "Rp 8-11 Juta / bulan", skills: ["Digital Marketing", "SEO", "Content Strategy", "Copywriting", "Social Media", "Analytics"], pengalaman: "3 Tahun", ketersediaan: "Segera", levelPekerjaan: "Junior",
    email: "maya.puspitasari@email.com", phone: "+62 819 5566 7788", ringkasan: "Digital Marketing Specialist dengan fokus pada pertumbuhan organik dan strategi konten.", tanggalLahir: "15-02-1999", jenisKelamin: "Perempuan", domisili: "Jakarta Selatan", tipeKerja: "Hybrid",
    riwayatKerja: [{ posisi: "Digital Marketing Specialist", perusahaan: "Blibli", periode: "Mar 2022 - Sekarang", deskripsi: "Mengelola strategi SEO dan konten, meningkatkan trafik organik 40%." }],
    pendidikanList: [{ jenjang: "S1, Ilmu Komunikasi", institusi: "Universitas Indonesia", periode: "2017 - 2021" }],
    sertifikasi: ["Google Ads Certification"], portfolio: [{ platform: "linkedin", url: "linkedin.com/in/mayapuspitasari" }, { platform: "github", url: "github.com/mayapuspitasari" }],
    catatan: [{ penulis: "Aditya Rahardjo", waktu: "4 hari lalu", isi: "Hasil kerja SEO terukur jelas, layak dipertimbangkan." }] },
  { id: "SC8", nama: "Hendra Wijaya", lokasi: "Semarang", rating: 4.6, role: "Project Manager", company: "Grab", gaji: "Rp 15-20 Juta / bulan", skills: ["Project Management", "Agile", "Scrum", "Stakeholder Management"], pengalaman: "8 Tahun", ketersediaan: "2 Minggu", levelPekerjaan: "Lead",
    email: "hendra.wijaya@email.com", phone: "+62 821 3344 5566", ringkasan: "Project Manager dengan 8+ tahun pengalaman memimpin tim lintas fungsi di produk skala regional.", tanggalLahir: "05-05-1990", jenisKelamin: "Laki-laki", domisili: "Semarang", tipeKerja: "Hybrid",
    riwayatKerja: [{ posisi: "Project Manager", perusahaan: "Grab", periode: "Jul 2019 - Sekarang", deskripsi: "Mengelola roadmap produk logistik dan koordinasi tim 20+ orang lintas negara." }],
    pendidikanList: [{ jenjang: "S2, Manajemen", institusi: "Universitas Gadjah Mada", periode: "2016 - 2018" }],
    sertifikasi: ["PMP Certified", "Certified ScrumMaster"], portfolio: [{ platform: "linkedin", url: "linkedin.com/in/hendrawijaya" }, { platform: "github", url: "github.com/hendrawijaya" }],
    catatan: [{ penulis: "Sarah Wijaya", waktu: "1 hari lalu", isi: "Track record kepemimpinan proyek sangat kuat." }] },
  { id: "SC9", nama: "Putri Ayuningtyas", lokasi: "Jakarta", rating: 4.3, role: "Product Designer", company: "OVO", gaji: "Rp 9-13 Juta / bulan", skills: ["UI/UX Design", "Product Design", "Figma"], pengalaman: "2 Tahun", ketersediaan: "Segera", levelPekerjaan: "Junior",
    email: "putri.ayuningtyas@email.com", phone: "+62 822 6677 8899", ringkasan: "Product Designer muda dengan portfolio kuat di produk fintech.", tanggalLahir: "21-07-2000", jenisKelamin: "Perempuan", domisili: "Jakarta Utara", tipeKerja: "Remote",
    riwayatKerja: [{ posisi: "Product Designer", perusahaan: "OVO", periode: "Sep 2023 - Sekarang", deskripsi: "Mendesain fitur transfer dan pembayaran dalam aplikasi." }],
    pendidikanList: [{ jenjang: "S1, Desain Komunikasi Visual", institusi: "Universitas Multimedia Nusantara", periode: "2018 - 2022" }],
    sertifikasi: [], portfolio: [{ platform: "linkedin", url: "linkedin.com/in/putriayuningtyas" }, { platform: "github", url: "github.com/putriayuningtyas" }],
    catatan: [{ penulis: "Aditya Rahardjo", waktu: "6 hari lalu", isi: "Masih junior tapi progresnya cepat, worth interview." }] },
  { id: "SC10", nama: "Agus Setiawan", lokasi: "Surabaya", rating: 4.4, role: "Backend Engineer", company: "Dana", gaji: "Rp 14-18 Juta / bulan", skills: ["Node.js", "TypeScript", "SQL", "AWS", "Docker"], pengalaman: "6 Tahun", ketersediaan: "1 Bulan", levelPekerjaan: "Senior",
    email: "agus.setiawan@email.com", phone: "+62 823 4455 6677", ringkasan: "Backend Engineer dengan pengalaman membangun sistem pembayaran yang scalable dan aman.", tanggalLahir: "30-12-1993", jenisKelamin: "Laki-laki", domisili: "Surabaya", tipeKerja: "Hybrid",
    riwayatKerja: [{ posisi: "Backend Engineer", perusahaan: "Dana", periode: "Okt 2020 - Sekarang", deskripsi: "Mengembangkan layanan pembayaran dengan arsitektur microservices." }],
    pendidikanList: [{ jenjang: "S1, Teknik Informatika", institusi: "Universitas Airlangga", periode: "2012 - 2016" }],
    sertifikasi: ["AWS Certified Developer"], portfolio: [{ platform: "github", url: "github.com/agussetiawan" }, { platform: "linkedin", url: "linkedin.com/in/agussetiawan" }],
    catatan: [{ penulis: "Sarah Wijaya", waktu: "2 hari lalu", isi: "Solid di sistem pembayaran, cocok untuk tim inti." }] },
];

export interface CariKandidatFilterValues {
  skill: string[]; pengalaman: string[]; pendidikan: string[]; lokasi: string[]; levelPekerjaan: string[];
  usiaMin: string; usiaMax: string; durasiPengalaman: string[]; gajiMin: string; gajiMax: string; bidangPekerjaan: string[]; keahlian: string[];
  lokasiKota: string[]; lokasiKabupaten: string[]; lokasiKecamatan: string[];
}
export const EMPTY_CARI_KANDIDAT_FILTERS: CariKandidatFilterValues = {
  skill: [], pengalaman: [], pendidikan: [], lokasi: [], levelPekerjaan: [],
  usiaMin: "", usiaMax: "", durasiPengalaman: [], gajiMin: "", gajiMax: "", bidangPekerjaan: [], keahlian: [],
  lokasiKota: [], lokasiKabupaten: [], lokasiKecamatan: [],
};

export const CARI_KANDIDAT_DURASI_OPTIONS = ["Belum ada pengalaman", "Kurang dari 1 tahun", "1-3 Tahun", "3-5 Tahun", "5-10 Tahun", "Lebih dari 10 tahun"];
export const CARI_KANDIDAT_BIDANG_OPTIONS = ["Design", "Engineering", "Data", "Product", "Marketing", "Project Management", "Human Resources"];
export const CARI_KANDIDAT_KOTA_OPTIONS = ["Jakarta Selatan", "Jakarta Pusat", "Bandung", "Surabaya", "Medan", "Semarang", "Yogyakarta"];
export const CARI_KANDIDAT_KABUPATEN_OPTIONS = ["Kabupaten Bandung", "Kabupaten Bogor", "Kabupaten Bekasi", "Kabupaten Sleman", "Kabupaten Sidoarjo"];
export const CARI_KANDIDAT_KECAMATAN_OPTIONS = ["Kebayoran Baru", "Setiabudi", "Tebet", "Coblong", "Sukajadi", "Depok", "Gubeng"];

export const SEARCH_QUOTA_LIMIT = 3;
