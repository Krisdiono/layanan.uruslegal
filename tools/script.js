// knowledgeBase data with icons (tetap sama)
const knowledgeBase = {
    "Badan Usaha": {
        icon: '🏢',
        services: {
            "Pendirian PT Perorangan (UMKM)": {
                icon: '<i class="fas fa-user"></i>',
                definisi: "Untuk usaha mikro dan kecil (UMK) yang ingin legalitas kuat dengan satu pendiri. <br><br>Dasar hukum utama PT Perorangan diatur dalam <a href='https://kalteng.kemenkum.go.id/adm-hukum-umum/wasiat?view=article&id=645:perseroan-perorangan&catid=57' target='_blank' class='text-[#008080] hover:underline'>halaman resmi Kemenkumham tentang Perseroan Perorangan</a>.",
                pentingnya: "Memberikan perlindungan hukum yang kuat (pemisahan aset pribadi dan perusahaan), meningkatkan kredibilitas di mata klien/investor, dan mempermudah akses ke pembiayaan formal.",
                proses: ["Pengisian Pernyataan Pendirian secara elektronik", "Pendaftaran nama perusahaan", "Pengesahan di Kemenkumham. Tidak memerlukan akta notaris fisik."],
                peran: "UrusLegal memandu pengisian pernyataan pendirian, pendaftaran nama, hingga mendapatkan SK Pengesahan dari Kemenkumham, semua dilakukan online.",
                timeline: "2 Jam Selesai",
                biayaEstimasi: "999000", // Ini tetap estimasi total untuk referensi, tidak ditampilkan langsung di ringkasan baru
                biayaJasa: "999000", // Biaya Jasa UrusLegal (Fix)
                biayaPemerintahEstimasi: "249000", // Estimasi Biaya Pemerintah (untuk referensi internal, tidak ditampilkan langsung)
                yangDidapat: ["Sertifikat SK Pendirian", "NPWP", "NIB"], // Diubah menjadi array
                caraAjuan: "Online via Website UrusLegal.id, atau Offline dengan datang ke kantor UrusLegal.",
                catatan: "",
                metrics: { Kecepatan: 10, Kompleksitas: 2, Biaya: 2 } // Biaya di sini adalah skor, bukan harga
            },
            "Pendirian PT Biasa (Non-Perorangan)": {
                icon: '<i class="fas fa-users"></i>',
                definisi: "Solusi lengkap untuk perusahaan dengan lebih dari satu pendiri dan struktur yang lebih besar.",
                pentingnya: "Ideal untuk bisnis skala menengah hingga besar, memberikan perlindungan hukum maksimal, mempermudah penggalangan dana dari investor, dan memiliki struktur manajemen yang jelas.",
                proses: ["Pengecekan dan pemesanan nama", "Pembuatan Akta Pendirian oleh Notaris", "Pengesahan SK Kemenkumham", "Pendaftaran NPWP Badan", "Pengurusan NIB"],
                peran: "UrusLegal memfasilitasi seluruh proses dari pengecekan nama, penyusunan akta notaris, pengesahan Kemenkumham, hingga pengurusan NPWP dan NIB.",
                timeline: "3 hari kerja",
                biayaEstimasi: "3999000",
                biayaJasa: "2500000",
                biayaPemerintahEstimasi: "1499000",
                yangDidapat: ["Akta Notaris", "SK", "NPWP", "NIB"], // Diubah menjadi array
                caraAjuan: "Online via Website UrusLegal.id, atau Offline dengan datang ke kantor UrusLegal.",
                catatan: "‼️ Seluruh Pemegang Saham Wajib Hadir Akad - Atau via Online",
                metrics: { Kecepatan: 7, Kompleksitas: 6, Biaya: 5 }
            },
            "Pendirian CV": {
                icon: '<i class="fas fa-handshake"></i>',
                definisi: "Bentuk usaha yang lebih sederhana dari PT, cocok untuk fleksibilitas dan legalitas dasar.",
                pentingnya: "Pilihan yang lebih sederhana dan cepat dari PT, cocok untuk usaha kecil dan menengah yang tidak memerlukan pemisahan aset pribadi secara penuh seperti PT, namun tetap memiliki legalitas.",
                proses: ["Pembuatan Akta Pendirian oleh Notaris", "Pendaftaran di Kemenkumham", "Pengurusan NIB"],
                peran: "UrusLegal membantu penyusunan akta notaris, pendaftaran di Kemenkumham, dan pengurusan NIB untuk CV Anda.",
                timeline: "3 hari kerja",
                biayaEstimasi: "3999000",
                biayaJasa: "2500000",
                biayaPemerintahEstimasi: "1499000",
                yangDidapat: ["Akta Notaris", "SK", "NPWP", "NIB"], // Diubah menjadi array
                caraAjuan: "Online via Website UrusLegal.id, atau Offline dengan datang ke kantor UrusLegal.",
                catatan: "",
                metrics: { Kecepatan: 7, Kompleksitas: 4, Biaya: 4 }
            },
            "Pendirian PT PMA (Asing)": {
                icon: '<i class="fas fa-globe-americas"></i>',
                definisi: "Layanan khusus bagi investor asing yang ingin mendirikan perusahaan di Indonesia.",
                pentingnya: "Wajib bagi investor asing yang ingin berinvestasi dan menjalankan bisnis di Indonesia sesuai regulasi penanaman modal.",
                proses: ["Memiliki persyaratan modal minimum yang lebih tinggi", "Perizinan khusus dari BKPM", "Kepatuhan terhadap daftar negatif investasi (DNI) atau Daftar Prioritas Investasi"],
                peran: "UrusLegal memberikan konsultasi mendalam mengenai regulasi PMA, membantu penyusunan dokumen, pengurusan akta notaris, hingga perizinan di BKPM dan instansi terkait.",
                timeline: "3 hari kerja",
                biayaEstimasi: "7999000",
                biayaJasa: "5000000",
                biayaPemerintahEstimasi: "2999000",
                yangDidapat: ["Akta Notaris", "SK", "NPWP", "NIB"], // Diubah menjadi array
                caraAjuan: "Online via Website UrusLegal.id, atau Offline dengan datang ke kantor UrusLegal.",
                catatan: "‼️ Seluruh Pemegang Saham Wajib Hadir Akad - Atau via Online",
                metrics: { Kecepatan: 6, Kompleksitas: 9, Biaya: 9 }
            },
            "Pendirian Yayasan": {
                icon: '<i class="fas fa-heart"></i>',
                definisi: "Untuk badan hukum nirlaba dengan tujuan sosial, agama, atau kemanusiaan.",
                pentingnya: "Memberikan status hukum yang jelas untuk kegiatan nirlaba, mempermudah penggalangan dana, dan memastikan pengelolaan aset sesuai tujuan sosial.",
                proses: ["Pembuatan Akta Pendirian oleh Notaris", "Pengesahan di Kemenkumham", "Pendaftaran di instansi terkait lainnya"],
                peran: "UrusLegal membantu penyusunan akta notaris dan pengesahan Yayasan Anda di Kemenkumham.",
                timeline: "3 hari kerja",
                biayaEstimasi: "4999000",
                biayaJasa: "3000000",
                biayaPemerintahEstimasi: "1999000",
                yangDidapat: ["Akta Notaris", "SK", "NPWP", "NIB"], // Diubah menjadi array
                caraAjuan: "Online via Website UrusLegal.id, atau Offline dengan datang ke kantor UrusLegal.",
                catatan: "‼️ Seluruh Anggota Wajib Hadir Akad - Atau via Online",
                metrics: { Kecepatan: 6, Kompleksitas: 6, Biaya: 6 }
            },
            "Pendirian Perkumpulan": {
                icon: '<i class="fas fa-users"></i>', // Ikon diperiksa dan dikonfirmasi valid
                definisi: "Bagi Anda yang ingin membentuk badan hukum nirlaba tanpa pembagian keuntungan.",
                pentingnya: "Memberikan legalitas pada organisasi berbasis keanggotaan dengan tujuan nirlaba, mempermudah kegiatan kolektif.",
                proses: ["Pembuatan Akta Pendirian oleh Notaris", "Pengesahan di Kemenkumham"],
                peran: "UrusLegal membantu penyusunan akta notaris dan pengesahan Perkumpulan Anda di Kemenkumham.",
                timeline: "3 hari kerja",
                biayaEstimasi: "7999000",
                biayaJasa: "5000000",
                biayaPemerintahEstimasi: "2999000",
                yangDidapat: ["Akta Notaris", "SK", "NPWP", "NIB"], // Diubah menjadi array
                caraAjuan: "Online via Website UrusLegal.id, atau Offline dengan datang ke kantor UrusLegal.",
                catatan: "‼️ Seluruh Anggota Wajib Hadir Akad - Atau via Online",
                metrics: { Kecepatan: 6, Kompleksitas: 5, Biaya: 5 }
            },
            "Pendirian Koperasi": {
                icon: '<i class="fas fa-hand-holding-dollar"></i>',
                definisi: "Membantu proses pendirian koperasi sesuai peraturan yang berlaku.",
                pentingnya: "Mendapatkan legalitas untuk badan usaha koperasi, memungkinkan akses ke program pemerintah, dan membangun kepercayaan anggota.",
                proses: ["Rapat Anggota Pembentukan", "Penyusunan Anggaran Dasar", "Pengesahan di Kemenkumham"],
                peran: "UrusLegal memandu seluruh proses pendirian koperasi, dari persiapan dokumen hingga pengesahan di Kemenkumham.",
                timeline: "3 hari kerja",
                biayaEstimasi: "3999000",
                biayaJasa: "2500000",
                biayaPemerintahEstimasi: "1499000",
                yangDidapat: ["Akta Notaris", "SK", "NPWP", "NIB"], // Diubah menjadi array
                caraAjuan: "Hubungi kami untuk konsultasi awal. Siapkan data calon anggota dan tujuan koperasi Anda.",
                catatan: "",
                metrics: { Kecepatan: 6, Kompleksitas: 7, Biaya: 5 }
            },
            "Pembubaran PT": {
                icon: '<i class="fas fa-trash-can"></i>',
                definisi: "Proses legal untuk mengakhiri status hukum suatu Perseroan Terbatas (PT) dan melikuidasi asetnya.",
                pentingnya: "Memastikan semua kewajiban hukum dan finansial terpenuhi saat mengakhiri bisnis, menghindari masalah di masa depan, dan membersihkan nama perusahaan.",
                proses: ["Rapat Umum Pemegang Saham (RUPS) untuk keputusan pembubaran", "Penunjukan likuidator", "Pemberesan aset dan kewajiban", "Pengumuman pembubaran", "Pencabutan status badan hukum di Kemenkumham"],
                peran: "UrusLegal memandu seluruh proses pembubaran PT, mulai dari persiapan RUPS, penunjukan likuidator, pemberesan aset, hingga pencabutan status badan hukum di Kemenkumham.",
                timeline: "Berdasarkan konsultasi",
                biayaEstimasi: "Minta Penawaran",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran",
                yangDidapat: ["Akta Pembubaran PT", "Pengumuman Pembubaran", "Pencabutan SK Kemenkumham."], // Diubah menjadi array
                caraAjuan: "Hubungi kami untuk konsultasi mengenai prosedur dan persyaratan pembubaran PT Anda.",
                catatan: "",
                metrics: { Kecepatan: 3, Kompleksitas: 8, Biaya: 7 }
            }
        }
    },
    "Digital Asisten": {
        icon: '🤖',
        services: {
            "Asisten Pajak & Pembukuan Bulanan": {
                icon: '<i class="fas fa-calculator"></i>',
                definisi: "Bantuan profesional untuk pelaporan pajak dan pencatatan keuangan rutin.",
                pentingnya: "Memastikan kepatuhan pajak dan pencatatan keuangan yang akurat.",
                proses: ["Proses rutin sesuai kebutuhan bulanan"],
                peran: "UrusLegal menyediakan ahli pajak dan pembukuan untuk membantu Anda.",
                timeline: "5 hari kerja",
                biayaEstimasi: "750000",
                biayaJasa: "750000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Laporan Pajak Bulanan", "Laporan Keuangan (sesuai kesepakatan)."], // Diubah menjadi array
                caraAjuan: "Sampaikan kebutuhan asistensi pajak dan pembukuan Anda. Kami akan menyesuaikan layanan.",
                catatan: "",
                metrics: { Kecepatan: 6, Kompleksitas: 5, Biaya: 5 }
            },
            "Pelaporan LKPM (Laporan Kegiatan Penanaman Modal)": {
                icon: '<i class="fas fa-file-invoice"></i>',
                definisi: "Membantu penyusunan dan pelaporan kegiatan investasi Anda sesuai regulasi.",
                pentingnya: "Memenuhi kewajiban pelaporan investasi kepada pemerintah.",
                proses: ["Pengumpulan data investasi", "Penyusunan laporan", "Pelaporan ke instansi terkait"],
                peran: "UrusLegal membantu Anda menyusun dan melaporkan LKPM.",
                timeline: "3 hari kerja",
                biayaEstimasi: "1000000",
                biayaJasa: "1000000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Dokumen LKPM yang telah dilaporkan."], // Diubah menjadi array
                caraAjuan: "Berikan data investasi perusahaan Anda. Kami akan mengurus penyusunan dan pelaporannya.",
                catatan: "",
                metrics: { Kecepatan: 7, Kompleksitas: 4, Biaya: 4 }
            },
            "Paket Kepatuhan Tahunan": {
                icon: '<i class="fas fa-calendar-check"></i>',
                definisi: "Memastikan semua kewajiban pelaporan dan pembaruan data dasar perusahaan Anda terpenuhi setiap tahun.",
                pentingnya: "Menjaga status legalitas dan kepatuhan perusahaan Anda secara berkelanjutan.",
                proses: ["Verifikasi data perusahaan", "Penyusunan laporan tahunan", "Pengajuan ke instansi terkait"],
                peran: "UrusLegal mengelola semua kewajiban kepatuhan tahunan Anda.",
                timeline: "5 hari kerja",
                biayaEstimasi: "2000000",
                biayaJasa: "2000000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Perusahaan tetap patuh hukum", "pengurusan laporan tahunan."], // Diubah menjadi array
                caraAjuan: "Daftarkan perusahaan Anda untuk paket kepatuhan tahunan. Kami akan mengingatkan dan mengurus kewajiban Anda.",
                catatan: "",
                metrics: { Kecepatan: 6, Kompleksitas: 6, Biaya: 6 }
            },
            "Asisten Legal On-Demand": {
                icon: '<i class="fas fa-headset"></i>',
                definisi: "Konsultasi cepat dan review dokumen singkat kapan pun Anda butuh panduan hukum.",
                pentingnya: "Memberikan akses cepat ke panduan hukum untuk keputusan bisnis mendesak.",
                proses: ["Sesi konsultasi singkat atau review dokumen sesuai permintaan"],
                peran: "UrusLegal menyediakan konsultan legal yang siap sedia.",
                timeline: "30 menit",
                biayaEstimasi: "250000",
                biayaJasa: "250000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Nasihat hukum cepat", "review dokumen singkat."], // Diubah menjadi array
                caraAjuan: "Hubungi kami via WhatsApp atau telepon untuk konsultasi mendesak.",
                catatan: "",
                metrics: { Kecepatan: 10, Kompleksitas: 3, Biaya: 3 }
            },
            "Media Release / Pengumuman Koran": {
                icon: '<i class="fas fa-newspaper"></i>',
                definisi: "Publikasi resmi berita atau pengumuman perusahaan di media massa.",
                pentingnya: "Meningkatkan visibilitas, kredibilitas, dan menjangkau audiens yang lebih luas.",
                proses: ["Penyusunan draf", "Persetujuan", "Distribusi ke media", "Monitoring."],
                peran: "UrusLegal membantu penyusunan draf yang efektif dan distribusi ke jaringan media.",
                timeline: "3-5 hari kerja",
                biayaEstimasi: "1500000",
                biayaJasa: "1500000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Publikasi di media massa (koran/online).."], // Diubah menjadi array
                caraAjuan: "Sampaikan informasi yang ingin diumumkan.",
                catatan: "",
                metrics: { Kecepatan: 7, Kompleksitas: 6, Biaya: 6 }
            },
            "Pendaftaran NIB": {
                icon: '<i class="fas fa-id-card"></i>',
                definisi: "Nomor Induk Berusaha sebagai identitas usaha tunggal.",
                pentingnya: "Wajib untuk legalitas dan memulai kegiatan usaha.",
                proses: ["Pendaftaran online melalui sistem OSS."],
                peran: "UrusLegal memandu proses pendaftaran NIB di OSS.",
                timeline: "1 hari kerja",
                biayaEstimasi: "850000",
                biayaJasa: "850000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["NIB."], // Diubah menjadi array
                caraAjuan: "Online via Website UrusLegal.id.",
                catatan: "Layanan ini juga tersedia di kategori Perizinan.",
                metrics: { Kecepatan: 9, Kompleksitas: 3, Biaya: 3 }
            },
            "Pendaftaran PSE": {
                icon: '<i class="fas fa-laptop-code"></i>',
                definisi: "Pendaftaran Penyelenggara Sistem Elektronik ke Kominfo.",
                pentingnya: "Wajib bagi platform digital untuk beroperasi legal di Indonesia.",
                proses: ["Pengajuan permohonan melalui sistem OSS", "Melengkapi data."],
                peran: "UrusLegal membantu persiapan dokumen dan proses pendaftaran PSE.",
                timeline: "1 hari kerja",
                biayaEstimasi: "1000000",
                biayaJasa: "1000000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Tanda Daftar Penyelenggara Sistem Elektronik (TD PSE).."], // Diubah menjadi array
                caraAjuan: "Sampaikan detail sistem elektronik Anda.",
                catatan: "Layanan ini juga tersedia di kategori Teknologi Digital.",
                metrics: { Kecepatan: 5, Kompleksitas: 5, Biaya: 4 }
            }
        }
    },
    "Kekayaan Intelektual": {
        icon: '©️',
        services: {
            "Pendaftaran Merk Dagang": {
                icon: '<i class="fas fa-tag"></i>',
                definisi: "Daftarkan nama atau logo bisnis Anda agar tidak bisa ditiru orang lain. <br><br>Dasar hukumnya adalah <a href='https://peraturan.bpk.go.id/Details/37595/uu-no-20-tahun-2016' target='_blank' class='text-[#008080] hover:underline'>Undang-Undang Nomor 20 Tahun 2016 tentang Merek dan Indikasi Geografis</a>.",
                pentingnya: "Melindungi identitas bisnis Anda dari penjiplakan, membangun nilai merek, dan memberikan dasar hukum untuk menuntut pihak yang melanggar.",
                proses: ["Penelusuran merek", "Pengajuan permohonan ke DJKI", "Pemeriksaan substantif", "Penerbitan sertifikat merek"],
                peran: "UrusLegal melakukan penelusuran merek, membantu penyusunan dokumen permohonan, pengajuan ke DJKI, dan memantau proses hingga merek terdaftar.",
                timeline: "3 hari kerja",
                biayaEstimasi: "1500000",
                biayaJasa: "1500000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Sertifikat Pendaftaran Merek Dagang."],
                caraAjuan: "Sampaikan nama/logo merek Anda. Kami akan melakukan penelusuran dan pendaftaran.",
                catatan: "",
                metrics: { Kecepatan: 7, Kompleksitas: 5, Biaya: 5 }
            },
            "Pendaftaran Hak Cipta": {
                icon: '<i class="fas fa-copyright"></i>',
                definisi: "Lindungi karya kreatif Anda (buku, musik, software, dll.) secara hukum. <br><br>Dasar hukumnya adalah <a href='https://id.wikisource.org/wiki/Undang-Undang_Republik_Indonesia_Nomor_28_Tahun_2014' target='_blank' class='text-[#008080] hover:underline'>Undang-Undang Nomor 28 Tahun 2014 tentang Hak Cipta</a>.",
                pentingnya: "Melindungi karya kreatif Anda dari plagiarisme dan memberikan bukti kepemilikan yang kuat.",
                proses: ["Pengajuan permohonan ke DJKI", "Melampirkan contoh ciptaan", "Penerbitan surat pencatatan ciptaan"],
                peran: "UrusLegal membantu persiapan dokumen, pengajuan permohonan hak cipta ke DJKI, dan memantau prosesnya.",
                timeline: "2 hari kerja",
                biayaEstimasi: "750000",
                biayaJasa: "750000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Surat Pencatatan Hak Cipta."],
                caraAjuan: "Berikan detail karya kreatif Anda. Kami akan membantu proses pencatatannya.",
                catatan: "",
                metrics: { Kecepatan: 8, Kompleksitas: 2, Biaya: 2 }
            },
            "Pendaftaran PATEN": {
                icon: '<i class="fas fa-lightbulb"></i>',
                definisi: "Amankan hak eksklusif atas penemuan atau inovasi teknologi Anda. <br><br>Dasar hukumnya adalah <a href='https://penelitian.ugm.ac.id/wp-content/uploads/sites/295/2021/01/UU-Nomor-13-Tahun-2016.pdf' target='_blank' class='text-[#008080] hover:underline'>Undang-Undang Nomor 13 Tahun 2016 tentang Paten</a>.",
                pentingnya: "Melindungi penemuan atau inovasi teknologi Anda dari penggunaan tanpa izin, memberikan keunggulan kompetitif, dan mendorong inovasi.",
                proses: ["Penelusuran paten", "Penyusunan deskripsi invensi yang detail", "Pengajuan ke DJKI", "Pemeriksaan substantif", "Penerbitan sertifikat paten"],
                peran: "UrusLegal memberikan konsultasi awal, membantu penelusuran paten, menyusun deskripsi invensi, dan memandu proses pengajuan paten yang kompleks.",
                timeline: "5 hari kerja",
                biayaEstimasi: "5000000",
                biayaJasa: "5000000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Sertifikat Paten."],
                caraAjuan: "Diskusikan penemuan Anda dengan tim ahli kami. Kami akan membantu menyusun dokumen paten yang komprehensif.",
                catatan: "",
                metrics: { Kecepatan: 6, Kompleksitas: 9, Biaya: 9 }
            },
            "Pendaftaran Desain Industri": {
                icon: '<i class="fas fa-brush"></i>',
                definisi: "Lindungi tampilan atau bentuk unik dari produk Anda. <br><br>Dasar hukumnya adalah <a href='https://jdih.dgip.go.id/produk_hukum/view/id/12/t/undangundang+nomor+31+tahun+2000+tentang+desain+industri' target='_blank' class='text-[#008080] hover:underline'>Undang-Undang Nomor 31 Tahun 2000 tentang Desain Industri</a>.",
                pentingnya: "Melindungi tampilan visual unik dari produk Anda, memberikan nilai estetika, dan mencegah peniruan desain.",
                proses: ["Pengajuan permohonan ke DJKI", "Melampirkan gambar desain", "Pemeriksaan substantif", "Penerbitan sertifikat desain industri"],
                peran: "UrusLegal membantu persiapan dokumen dan gambar desain, pengajuan permohonan desain industri ke DJKI, dan memantau prosesnya.",
                timeline: "3 hari kerja",
                biayaEstimasi: "1200000",
                biayaJasa: "1200000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Sertifikat Desain Industri."],
                caraAjuan: "Sediakan gambar desain produk Anda. Kami akan bantu proses pendaftarannya.",
                catatan: "",
                metrics: { Kecepatan: 7, Kompleksitas: 4, Biaya: 4 }
            },
            "Perpanjangan Merk": {
                icon: '<i class="fas fa-redo"></i>',
                definisi: "Proses memperpanjang masa berlaku pendaftaran merek dagang.",
                pentingnya: "Mempertahankan hak eksklusif atas merek dan mencegah merek menjadi milik umum.",
                proses: ["Pengajuan permohonan perpanjangan ke DJKI sebelum masa berlaku habis."],
                peran: "UrusLegal membantu persiapan dokumen dan pengajuan perpanjangan merek.",
                timeline: "3 hari kerja",
                biayaEstimasi: "1000000",
                biayaJasa: "1000000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Sertifikat Perpanjangan Merek Dagang."],
                caraAjuan: "Sediakan sertifikat merek lama.",
                catatan: "",
                metrics: { Kecepatan: 7, Kompleksitas: 3, Biaya: 3 }
            }
        }
    },
    "Ketenagakerjaan": {
        icon: '👷',
        services: {
            "Pembuatan Perjanjian Kerja (PKWT/PKWTT)": {
                icon: '<i class="fas fa-file-contract"></i>',
                definisi: "Susun kontrak kerja yang sah dan adil untuk karyawan Anda.",
                pentingnya: "Memberikan kejelasan hukum dalam hubungan kerja, melindungi hak-hak kedua belah pihak, dan mencegah perselisihan.",
                proses: ["Penyusunan draf perjanjian sesuai UU Ketenagakerjaan", "Negosiasi", "Penandatanganan"],
                peran: "UrusLegal membantu penyusunan draf perjanjian kerja yang sesuai hukum dan kebutuhan perusahaan Anda.",
                timeline: "2 hari kerja",
                biayaEstimasi: "800000",
                biayaJasa: "800000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Draf Perjanjian Kerja (PKWT/PKWTT) yang sah."],
                caraAjuan: "Sampaikan kebutuhan kontrak kerja Anda. Kami akan menyusun draf yang sesuai.",
                catatan: "",
                metrics: { Kecepatan: 8, Kompleksitas: 4, Biaya: 4 }
            },
            "Penyusunan Peraturan Perusahaan (PP)": {
                icon: '<i class="fas fa-building"></i>',
                definisi: "Buat aturan internal perusahaan yang jelas dan mengikat.",
                pentingnya: "Menjadi pedoman bagi karyawan dan perusahaan, menciptakan lingkungan kerja yang teratur, dan memenuhi kewajiban hukum.",
                proses: ["Penyusunan draf PP", "Sosialisasi kepada karyawan", "Pengesahan/pelaporan ke instansi terkait"],
                peran: "UrusLegal membantu penyusunan draf Peraturan Perusahaan yang komprehensif dan sesuai dengan regulasi ketenagakerjaan.",
                timeline: "5 hari kerja",
                biayaEstimasi: "2500000",
                biayaJasa: "2500000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Dokumen Peraturan Perusahaan yang telah disahkan."],
                caraAjuan: "Diskusikan kebijakan internal perusahaan Anda. Kami akan membantu menyusun Peraturan Perusahaan.",
                catatan: "",
                metrics: { Kecepatan: 6, Kompleksitas: 7, Biaya: 6 }
            },
            "Konsultasi Hukum Ketenagakerjaan": {
                icon: '<i class="fas fa-comments"></i>',
                definisi: "Dapatkan panduan ahli untuk berbagai isu terkait karyawan dan hubungan industrial.",
                pentingnya: "Memberikan pemahaman dan solusi hukum atas permasalahan karyawan, PHK, hak-hak pekerja, sengketa, atau kepatuhan regulasi.",
                proses: ["Sesi konsultasi (online/offline) dengan ahli hukum"],
                peran: "UrusLegal menyediakan konsultan legal yang siap sedia.",
                timeline: "30 menit",
                biayaEstimasi: "300000",
                biayaJasa: "300000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Nasihat dan solusi hukum terkait ketenagakerjaan."],
                caraAjuan: "Jadwalkan sesi konsultasi dengan tim legal kami untuk masalah ketenagakerjaan Anda.",
                catatan: "",
                metrics: { Kecepatan: 10, Kompleksitas: 3, Biaya: 3 }
            },
            "Pembuatan Perjanjian Outsource": {
                icon: '<i class="fas fa-user-tie"></i>',
                definisi: "Penyusunan kontrak kerja sama dengan pihak ketiga untuk penyediaan tenaga kerja.",
                pentingnya: "Memastikan legalitas hubungan outsourcing, melindungi hak dan kewajiban para pihak.",
                proses: ["Konsultasi kebutuhan", "Penyusunan draf perjanjian", "Negosiasi", "Penandatanganan."],
                peran: "UrusLegal membantu menyusun perjanjian outsourcing yang sesuai hukum dan melindungi kepentingan Anda.",
                timeline: "3 hari kerja",
                biayaEstimasi: "1500000",
                biayaJasa: "1500000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Draf Perjanjian Kerja Sama Outsourcing yang sah."],
                caraAjuan: "Sampaikan detail kebutuhan outsourcing Anda.",
                catatan: "",
                metrics: { Kecepatan: 7, Kompleksitas: 6, Biaya: 5 }
            },
            "Pembuatan Surat PHK": {
                icon: '<i class="fas fa-user-slash"></i>',
                definisi: "Penyusunan surat resmi pemberhentian hubungan kerja.",
                pentingnya: "Memastikan proses PHK sesuai prosedur hukum, menghindari sengketa di kemudian hari.",
                proses: ["Konsultasi kasus", "Penyusunan draf surat PHK", "Perhitungan hak-hak karyawan."],
                peran: "UrusLegal membantu menyusun surat PHK yang memenuhi ketentuan hukum dan meminimalkan risiko.",
                timeline: "1 hari kerja",
                biayaEstimasi: "750000",
                biayaJasa: "750000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Draf Surat PHK yang sesuai hukum."],
                caraAjuan: "Sampaikan detail kasus PHK.",
                catatan: "",
                metrics: { Kecepatan: 9, Kompleksitas: 5, Biaya: 4 }
            }
        }
    },
    "Notariat": {
        icon: '📝',
        services: {
            "Pembuatan Akta Kuasa": {
                icon: '<i class="fas fa-gavel"></i>',
                definisi: "Buat akta resmi untuk memberikan wewenang kepada pihak lain.",
                pentingnya: "Memberikan kekuatan hukum yang sah dan mengikat pada pemberian kuasa, melindungi semua pihak yang terlibat.",
                proses: ["Penyiapan data pemberi dan penerima kuasa", "Tujuan kuasa", "Tanda tangan di hadapan Notaris"],
                peran: "UrusLegal membantu penyusunan draf akta kuasa dan memfasilitasi penandatanganan di hadapan Notaris mitra.",
                timeline: "1 hari kerja",
                biayaEstimasi: "500000",
                biayaJasa: "500000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Akta Kuasa yang telah disahkan Notaris."], // Diubah menjadi array
                caraAjuan: "Sampaikan detail pemberian kuasa yang Anda inginkan. Kami akan siapkan aktanya.",
                catatan: "",
                metrics: { Kecepatan: 9, Kompleksitas: 3, Biaya: 3 }
            },
            "Pembuatan Akta Perjanjian Umum": {
                icon: '<i class="fas fa-handshake"></i>',
                definisi: "Susun perjanjian seperti sewa-menyewa, kerjasama, atau jual beli yang disahkan notaris.",
                pentingnya: "Memberikan kepastian hukum, kekuatan pembuktian yang sempurna, dan perlindungan bagi para pihak yang terikat perjanjian.",
                proses: ["Penyiapan draf perjanjian", "Identitas para pihak", "Tanda tangan di hadapan Notaris"],
                peran: "UrusLegal membantu penyusunan draf perjanjian sesuai kebutuhan Anda dan memfasilitasi penandatanganan di hadapan Notaris mitra.",
                timeline: "1 hari kerja",
                biayaEstimasi: "1000000",
                biayaJasa: "1000000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Akta Perjanjian Umum (sewa-menyewa, kerjasama, dll.) yang disahkan Notaris."],
                caraAjuan: "Diskusikan jenis perjanjian yang Anda butuhkan. Kami akan menyusun dan memfasilitasi penandatanganan.",
                catatan: "",
                metrics: { Kecepatan: 9, Kompleksitas: 5, Biaya: 5 }
            },
            "Legalisir Dokumen": {
                icon: '<i class="fas fa-stamp"></i>',
                definisi: "Pastikan salinan dokumen Anda sah dan diakui secara hukum oleh notaris.",
                pentingnya: "Memberikan kekuatan hukum tambahan pada dokumen dan salinannya, seringkali diperlukan untuk keperluan resmi.",
                proses: ["Penyerahan dokumen asli dan/atau salinan kepada Notaris untuk proses legalisir/waarmerking"],
                peran: "UrusLegal memfasilitasi proses legalisir dan waarmerking dokumen Anda oleh Notaris mitra.",
                timeline: "30 menit",
                biayaEstimasi: "150000",
                biayaJasa: "150000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Salinan dokumen yang telah dilegalisir Notaris."],
                caraAjuan: "Bawa dokumen asli yang ingin dilegalisir ke kantor kami atau kirimkan via kurir.",
                catatan: "",
                metrics: { Kecepatan: 10, Kompleksitas: 2, Biaya: 2 }
            },
            "Akta Hibah / Akta Pengakuan / Pengesahan Anak": {
                icon: '<i class="fas fa-child"></i>',
                definisi: "Proses pengalihan aset sebagai hadiah secara resmi melalui notaris atau legalisasi status anak di mata hukum.",
                pentingnya: "Memberikan kepastian hukum atas pengalihan aset atau status anak, menghindari sengketa di kemudian hari.",
                proses: ["Penyiapan dokumen terkait (akta lahir, KTP orang tua)", "Tanda tangan di hadapan Notaris"],
                peran: "UrusLegal membantu penyusunan draf akta hibah atau akta pengakuan/pengesahan anak dan memfasilitasi penandatanganan di hadapan Notaris mitra.",
                timeline: "2 hari kerja",
                biayaEstimasi: "1500000",
                biayaJasa: "1500000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Akta Hibah atau Akta Pengakuan/Pengesahan Anak yang disahkan Notaris."],
                caraAjuan: "Sampaikan kebutuhan Anda terkait hibah atau legalisasi status anak. Kami akan memandu prosesnya.",
                catatan: "",
                metrics: { Kecepatan: 8, Kompleksitas: 6, Biaya: 6 }
            },
            "Perubahan KBLI": {
                icon: '<i class="fas fa-industry"></i>',
                definisi: "Perubahan Klasifikasi Baku Lapangan Usaha Indonesia (KBLI) pada akta perusahaan.",
                pentingnya: "Menyesuaikan legalitas perusahaan dengan kegiatan usaha yang sebenarnya atau yang baru.",
                proses: ["RUPS", "Akta Perubahan Notaris", "Pengesahan Kemenkumham", "Update OSS."],
                peran: "UrusLegal memfasilitasi seluruh proses perubahan KBLI.",
                timeline: "2-3 hari kerja",
                biayaEstimasi: "2000000",
                biayaJasa: "2000000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Akta Perubahan KBLI", "SK Kemenkumham", "NIB terbaru."],
                caraAjuan: "Sampaikan KBLI lama dan baru.",
                catatan: "",
                metrics: { Kecepatan: 7, Kompleksitas: 6, Biaya: 5 }
            },
            "Perubahan Struktur Direksi": {
                icon: '<i class="fas fa-users-gear"></i>',
                definisi: "Perubahan susunan direksi dan/atau komisaris perusahaan.",
                pentingnya: "Memperbarui data legal perusahaan sesuai dengan perubahan manajemen.",
                proses: ["RUPS", "Akta Perubahan Notaris", "Pemberitahuan/Pengesahan Kemenkumham."],
                peran: "UrusLegal membantu penyusunan akta perubahan dan pengurusan di Kemenkumham.",
                timeline: "2-3 hari kerja",
                biayaEstimasi: "2500000",
                biayaJasa: "2500000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Akta Perubahan Direksi/Komisaris", "SK Kemenkumham."],
                caraAjuan: "Sampaikan detail perubahan struktur direksi/komisaris.",
                catatan: "",
                metrics: { Kecepatan: 7, Kompleksitas: 6, Biaya: 5 }
            },
            "Peralihan Saham": {
                icon: '<i class="fas fa-chart-line"></i>',
                definisi: "Proses pengalihan kepemilikan saham dari satu pihak ke pihak lain.",
                pentingnya: "Melegalkan perubahan kepemilikan saham dan hak-hak yang melekat padanya.",
                proses: ["Akta Notaris Peralihan Saham", "Pencatatan dalam Daftar Pemegang Saham."],
                peran: "UrusLegal memfasilitasi pembuatan akta peralihan saham dan pencatatannya.",
                timeline: "1-2 hari kerja",
                biayaEstimasi: "1500000",
                biayaJasa: "1500000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Akta Peralihan Saham yang sah."],
                caraAjuan: "Sampaikan detail pihak yang mengalihkan dan menerima saham.",
                catatan: "",
                metrics: { Kecepatan: 8, Kompleksitas: 5, Biaya: 5 }
            },
            "Perubahan Akta": {
                icon: '<i class="fas fa-scroll"></i>',
                definisi: "Perubahan pada anggaran dasar dan/atau anggaran rumah tangga perusahaan yang memerlukan akta notaris baru.",
                pentingnya: "Menyesuaikan legalitas perusahaan dengan keputusan strategis atau perubahan internal.",
                proses: ["RUPS", "Akta Perubahan Notaris", "Pengesahan/Pemberitahuan Kemenkumham."],
                peran: "UrusLegal membantu penyusunan akta perubahan dan pengurusan di Kemenkumham.",
                timeline: "2-3 hari kerja",
                biayaEstimasi: "2000000",
                biayaJasa: "2000000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Akta Perubahan", "SK Kemenkumham."],
                caraAjuan: "Sampaikan jenis perubahan yang diinginkan pada akta.",
                catatan: "",
                metrics: { Kecepatan: 7, Kompleksitas: 7, Biaya: 6 }
            },
            "Perubahan Modal Dasar": {
                icon: '<i class="fas fa-coins"></i>',
                definisi: "Perubahan jumlah modal dasar perusahaan yang tercatat dalam akta.",
                pentingnya: "Menyesuaikan struktur permodalan perusahaan untuk ekspansi atau restrukturisasi.",
                proses: ["RUPS", "Akta Perubahan Notaris", "Pengesahan Kemenkumham."],
                peran: "UrusLegal membantu penyusunan akta perubahan modal dasar dan pengurusan di Kemenkumham.",
                timeline: "2-3 hari kerja",
                biayaEstimasi: "2500000",
                biayaJasa: "2500000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Akta Perubahan Modal Dasar", "SK Kemenkumham."],
                caraAjuan: "Sampaikan detail perubahan modal dasar.",
                catatan: "",
                metrics: { Kecepatan: 7, Kompleksitas: 7, Biaya: 6 }
            },
            "Pendampingan RUPS": {
                icon: '<i class="fas fa-calendar-alt"></i>',
                definisi: "Pendampingan hukum dalam pelaksanaan Rapat Umum Pemegang Saham (RUPS) perusahaan.",
                pentingnya: "Memastikan RUPS berjalan sesuai ketentuan hukum, anggaran dasar perusahaan, dan keputusan yang dihasilkan sah secara legal.",
                proses: ["Persiapan agenda dan materi RUPS", "Penyusunan notulen RUPS", "Pendampingan selama RUPS berlangsung", "Pengesahan notulen RUPS oleh notaris (jika diperlukan)."],
                peran: "UrusLegal menyediakan pendampingan ahli hukum untuk memastikan kelancaran dan legalitas RUPS Anda, termasuk penyusunan dokumen terkait.",
                timeline: "Berdasarkan jadwal RUPS",
                biayaEstimasi: "4500000",
                biayaJasa: "4500000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Dokumen RUPS yang sah (notulen, risalah)", "kepastian hukum atas keputusan RUPS."],
                caraAjuan: "Hubungi kami untuk menjadwalkan pendampingan RUPS Anda. Sampaikan agenda dan kebutuhan spesifik.",
                catatan: "Biaya belum termasuk biaya notaris untuk pengesahan risalah RUPS jika diperlukan.",
                metrics: { Kecepatan: 5, Kompleksitas: 7, Biaya: 7 }
            },
            "Jasa Apostile": {
                icon: '<i class="fas fa-certificate"></i>', // Ikon sertifikat
                definisi: "Legalisasi dokumen untuk keperluan penggunaan di luar negeri melalui proses Apostile.",
                pentingnya: "Memastikan dokumen Anda diakui secara hukum di negara-negara anggota Konvensi Apostile, mempermudah proses imigrasi, studi, atau bisnis internasional.",
                proses: ["Verifikasi dokumen oleh Kemenkumham", "Penerbitan sertifikat Apostile."],
                peran: "UrusLegal membantu proses pengajuan dan verifikasi dokumen untuk mendapatkan sertifikat Apostile dari Kemenkumham.",
                timeline: "3 hari kerja",
                biayaEstimasi: "1500000",
                biayaJasa: "1500000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Sertifikat Apostile."],
                caraAjuan: "Sediakan dokumen asli yang ingin di-Apostile. Kami akan memandu prosesnya.",
                catatan: "Biaya belum termasuk biaya legalisir notaris jika dokumen belum dilegalisir.",
                metrics: { Kecepatan: 7, Kompleksitas: 5, Biaya: 5 }
            },
            "Jasa Waarmerking": {
                icon: '<i class="fas fa-file-signature"></i>', // Ikon tanda tangan dokumen
                definisi: "Proses pencatatan atau pendaftaran dokumen di kantor notaris untuk memberikan tanggal pasti dan kepastian hukum.",
                pentingnya: "Memberikan kekuatan pembuktian yang lebih tinggi pada dokumen di bawah tangan, sering digunakan untuk perjanjian atau surat penting lainnya.",
                proses: ["Penyerahan dokumen asli kepada notaris", "Pencatatan dalam register notaris."],
                peran: "UrusLegal memfasilitasi proses waarmerking dokumen Anda oleh Notaris mitra.",
                timeline: "5 hari kerja",
                biayaEstimasi: "3000000",
                biayaJasa: "3000000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Dokumen yang telah di-waarmerking oleh Notaris."],
                caraAjuan: "Bawa dokumen asli yang ingin di-waarmerking ke kantor kami atau kirimkan via kurir.",
                catatan: "",
                metrics: { Kecepatan: 6, Kompleksitas: 4, Biaya: 6 }
            }
        }
    },
    "Perizinan": {
        icon: '✅',
        services: {
            "Pengurusan NIB & Perizinan Usaha": {
                icon: '<i class="fas fa-certificate"></i>',
                definisi: "Identitas utama usaha dan izin dasar dari pemerintah.",
                pentingnya: "Wajib bagi setiap pelaku usaha untuk memulai dan menjalankan kegiatan usahanya. Tanpa NIB dan perizinan yang sesuai, usaha dianggap ilegal.",
                proses: ["Pendaftaran hak akses OSS", "Pengisian data usaha", "Penentuan KBLI dan tingkat risiko", "Penerbitan NIB dan perizinan berusaha"],
                peran: "UrusLegal memandu proses pendaftaran hak akses, pengisian data, pemilihan KBLI dan tingkat risiko, hingga penerbitan NIB dan perizinan berusaha melalui sistem OSS RBA.",
                timeline: "1 hari kerja",
                biayaEstimasi: "850000",
                biayaJasa: "850000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["NIB dan Izin Usaha."],
                caraAjuan: "Sampaikan jenis usaha Anda. Kami akan mengurus NIB dan perizinan yang relevan.",
                catatan: "",
                metrics: { Kecepatan: 9, Kompleksitas: 3, Biaya: 3 }
            },
            "Pengurusan NPWP (Orang & Badan)": {
                icon: '<i class="fas fa-file-invoice-dollar"></i>',
                definisi: "Dapatkan Nomor Pokok Wajib Pajak untuk individu maupun badan usaha Anda.",
                pentingnya: "Wajib bagi setiap individu atau badan usaha yang memiliki penghasilan dan kewajiban perpajakan di Indonesia. Diperlukan untuk berbagai transaksi keuangan dan legal.",
                proses: ["Pengajuan permohonan melalui DJP Online atau KPP", "Melengkapi dokumen persyaratan (KTP, akta pendirian untuk badan usaha, dll.)"],
                peran: "UrusLegal membantu pengurusan pendaftaran NPWP untuk individu maupun badan usaha, memastikan kelengkapan dokumen dan proses yang benar.",
                timeline: "1 hari kerja",
                biayaEstimasi: "800000",
                biayaJasa: "800000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Kartu NPWP."],
                caraAjuan: "Berikan data pribadi/badan usaha Anda. Kami akan bantu proses pendaftaran NPWP.",
                catatan: "",
                metrics: { Kecepatan: 9, Kompleksitas: 2, Biaya: 1 }
            },
            "Perubahan Data Perusahaan": {
                icon: '<i class="fas fa-edit"></i>',
                definisi: "Update data penting perusahaan Anda (nama, alamat, KBLI, pengurus).",
                pentingnya: "Memastikan data perusahaan selalu akurat dan sesuai dengan kondisi terkini, menghindari masalah hukum di kemudian hari, dan menjaga kepatuhan.",
                proses: ["Pembuatan Akta Perubahan oleh Notaris (jika perubahan AD/ART)", "Pengesahan/pemberitahuan ke Kemenkumham", "Update data di OSS."],
                peran: "UrusLegal memfasilitasi penyusunan akta perubahan, pengesahan/pemberitahuan ke Kemenkumham, dan membantu proses update data di sistem OSS.",
                timeline: "2 hari kerja",
                biayaEstimasi: "2850000",
                biayaJasa: "2850000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Akta Perubahan Data Perusahaan", "update data di sistem terkait."],
                caraAjuan: "Sampaikan perubahan data yang diinginkan. Kami akan mengurus semua dokumen dan perizinan terkait.",
                catatan: "",
                metrics: { Kecepatan: 8, Kompleksitas: 6, Biaya: 6 }
            },
            "Pengukuhan PKP": {
                icon: '<i class="fas fa-money-check-dollar"></i>',
                definisi: "Proses pengukuhan sebagai Pengusaha Kena Pajak untuk kewajiban PPN.",
                pentingnya: "Wajib bagi pengusaha dengan omzet tertentu untuk memungut, menyetor, dan melaporkan PPN. Meningkatkan kredibilitas bisnis.",
                proses: ["Pengajuan permohonan ke KPP", "Survei lokasi usaha oleh petugas pajak", "Verifikasi dokumen"],
                peran: "UrusLegal membantu persiapan dokumen, pengajuan permohonan, dan koordinasi dengan KPP untuk proses pengukuhan PKP Anda.",
                timeline: "1 hari kerja (Pengajuan) | 10-12 hari kerja (Proses Survey KPP)",
                biayaEstimasi: "1499000",
                biayaJasa: "1499000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Surat Pengukuhan Pengusaha Kena Pajak (SPPKP)."],
                caraAjuan: "Berikan data omzet dan detail usaha Anda. Kami akan bantu proses pengukuhan PKP.",
                catatan: "",
                metrics: { Kecepatan: 9, Kompleksitas: 5, Biaya: 4 }
            },
            "Pengurusan PBG / IMB": {
                icon: '<i class="fas fa-building"></i>',
                definisi: "Izin resmi untuk membangun, merenovasi, atau memperluas bangunan. <br><br>Dasar hukumnya diatur dalam <a href='https://peraturan.bpk.go.id/Details/161846/pp-no-16-tahun-2021' target='_blank' class='text-[#008080] hover:underline'>Peraturan Pemerintah Nomor 16 Tahun 2021 tentang Peraturan Pelaksanaan Undang-Undang Nomor 28 Tahun 2002 tentang Bangunan Gedung</a>.",
                pentingnya: "Wajib untuk setiap kegiatan pembangunan atau renovasi bangunan untuk memastikan keamanan, kelayakan, dan kepatuhan terhadap tata ruang kota.",
                proses: ["Pengajuan melalui sistem SIMBG", "Penyusunan dokumen teknis (gambar teknis, perhitungan struktur)", "Verifikasi oleh dinas terkait"],
                peran: "UrusLegal membantu persiapan dokumen teknis dan administratif, pengajuan permohonan PBG melalui sistem yang berlaku, dan koordinasi dengan pihak terkait.",
                timeline: "30 hari kerja",
                biayaEstimasi: "Minta Penawaran",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran",
                yangDidapat: ["Persetujuan Bangunan Gedung (PBG) / Izin Mendirikan Bangunan (IMB)."],
                caraAjuan: "Sampaikan rencana pembangunan/renovasi Anda. Kami akan memandu proses pengurusan PBG/IMB.",
                catatan: "",
                metrics: { Kecepatan: 2, Kompleksitas: 8, Biaya: 8 }
            },
            "Pengurusan SBUJK": {
                icon: '<i class="fas fa-hard-hat"></i>',
                definisi: "Sertifikat Badan Usaha Jasa Konstruksi (SBUJK) adalah bukti kompetensi dan kemampuan usaha jasa konstruksi.",
                pentingnya: "Wajib bagi perusahaan jasa konstruksi untuk dapat beroperasi secara legal dan mengikuti tender proyek pemerintah maupun swasta.",
                proses: ["Pengajuan permohonan melalui sistem OSS", "Verifikasi dokumen perusahaan", "Penilaian kualifikasi dan klasifikasi"],
                peran: "UrusLegal membantu persiapan dokumen dan proses pengajuan SBUJK Anda hingga terbit.",
                timeline: "30 hari kerja",
                biayaEstimasi: "Minta Penawaran",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran",
                yangDidapat: ["Sertifikat Badan Usaha Jasa Konstruksi (SBUJK)."],
                caraAjuan: "Hubungi kami untuk detail persyaratan dan proses pengurusan SBUJK.",
                catatan: "",
                metrics: { Kecepatan: 2, Kompleksitas: 7, Biaya: 7 }
            },
            // START OF CORRECTED IUJP SERVICE
            "Pengurusan IUJP": {
                icon: '<i class="fas fa-gears"></i>', // Ikon diperbarui agar lebih sesuai dengan pertambangan/mesin
                definisi: "Izin Usaha Jasa Pertambangan (IUJP) adalah izin yang diperlukan bagi badan usaha yang melakukan kegiatan usaha jasa penunjang bidang pertambangan.",
                pentingnya: "Wajib bagi perusahaan yang bergerak di bidang jasa penunjang usaha pertambangan (misalnya konsultan geologi, kontraktor penambangan, survei, pengolahan) untuk beroperasi secara legal sesuai peraturan perundang-undangan di sektor energi dan sumber daya mineral.",
                proses: [
                    "Pengajuan permohonan ke Kementerian ESDM atau Dinas ESDM Provinsi",
                    "Melengkapi persyaratan administrasi, teknis, dan keuangan",
                    "Evaluasi dan verifikasi dokumen oleh pihak berwenang",
                    "Penerbitan IUJP"
                ],
                peran: "UrusLegal membantu persiapan dokumen, pengisian aplikasi, dan mengurus proses pengajuan IUJP Anda hingga terbit, memastikan kepatuhan terhadap regulasi pertambangan.",
                timeline: "20 hari kerja",
                biayaEstimasi: "Minta Penawaran",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran",
                yangDidapat: ["Izin Usaha Jasa Pertambangan (IUJP)."],
                caraAjuan: "Sampaikan ruang lingkup kegiatan usaha jasa penunjang pertambangan Anda. Kami akan memandu proses pengajuan IUJP.",
                catatan: "Persyaratan dan proses dapat bervariasi tergantung jenis kegiatan jasa penunjang pertambangan dan skala usaha. Biaya belum termasuk PNBP atau retribusi pemerintah.",
                metrics: { Kecepatan: 4, Kompleksitas: 8, Biaya: 7 }
            },
            // END OF CORRECTED IUJP SERVICE
            "Pengurusan Izin Sektoral / Khusus": {
                icon: '<i class="fas fa-clipboard-list"></i>',
                definisi: "Izin tambahan yang spesifik sesuai bidang usaha Anda (misal: izin edar, izin operasional).",
                pentingnya: "Wajib untuk memastikan bisnis beroperasi sesuai standar dan regulasi khusus di sektornya, menjamin keamanan produk/layanan, dan menghindari sanksi.",
                proses: ["Sangat bervariasi tergantung jenis izin", "Melibatkan berbagai kementerian/lembaga teknis"],
                peran: "UrusLegal memberikan konsultasi awal untuk mengidentifikasi izin yang dibutuhkan, membantu persiapan dokumen, dan memandu proses pengajuan.",
                timeline: "30 hari kerja",
                biayaEstimasi: "Minta Penawaran",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran",
                yangDidapat: ["Izin Sektoral/Khusus yang relevan dengan bisnis Anda."],
                caraAjuan: "Diskusikan bidang usaha Anda. Kami akan mengidentifikasi dan mengurus izin sektoral yang diperlukan.",
                catatan: "",
                metrics: { Kecepatan: 2, Kompleksitas: 9, Biaya: 7 }
            }
        }
    },
    "Properti": { // Kategori baru: Properti
        icon: '🏡', // Ikon baru
        services: {
            "Pembuatan Akta Jual beli (AJB)": {
                icon: '<i class="fas fa-house-chimney"></i>',
                definisi: "Proses jual beli properti.",
                pentingnya: "Memastikan transaksi properti sah di mata hukum, memberikan kepastian kepemilikan kepada pembeli, dan mencegah sengketa di masa depan.",
                proses: ["Penyiapan dokumen penjual & pembeli", "Pembayaran pajak (BPHTB, PPh)", "Tanda tangan AJB di hadapan PPAT", "Pendaftaran balik nama di Kantor Pertanahan"],
                peran: "UrusLegal memfasilitasi penyiapan dokumen, koordinasi dengan PPAT mitra, panduan pembayaran pajak, hingga proses balik nama sertifikat.",
                timeline: "Berdasarkan konsultasi",
                biayaEstimasi: "Minta Penawaran",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran",
                yangDidapat: ["Akta Jual Beli (AJB) yang sah."],
                caraAjuan: "Sampaikan detail properti dan para pihak yang terlibat. Kami akan memandu proses AJB.",
                catatan: "",
                metrics: { Kecepatan: 4, Kompleksitas: 7, Biaya: 8 }
            },
            "Balik Nama Sertifikat": {
                icon: '<i class="fas fa-file-signature"></i>',
                definisi: "Proses perubahan nama pemilik di sertifikat tanah/bangunan di Kantor Pertanahan.",
                pentingnya: "Memastikan kepemilikan sah dan terdaftar atas nama pemilik baru.",
                proses: ["Pendaftaran perubahan nama pemilik di sertifikat di Kantor Pertanahan"],
                peran: "UrusLegal memfasilitasi penyiapan dokumen, koordinasi dengan PPAT mitra, panduan pembayaran pajak, hingga proses balik nama sertifikat.",
                timeline: "Berdasarkan konsultasi",
                biayaEstimasi: "Minta Penawaran",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran",
                yangDidapat: ["Sertifikat tanah/bangunan atas nama pemilik baru."],
                caraAjuan: "Sediakan sertifikat lama dan dokumen pendukung. Kami akan bantu proses balik nama.",
                catatan: "",
                metrics: { Kecepatan: 4, Kompleksitas: 6, Biaya: 7 }
            },
            "Pengurusan Hak Tanggungan / ROYA": {
                icon: '<i class="fas fa-hand-holding-dollar"></i>', // Ikon diperbarui
                definisi: "Pengurusan jaminan properti untuk pinjaman atau penghapusannya. <br><br>Dasar hukumnya adalah <a href='https://bphn.go.id/data/documents/96uu004.pdf' target='_blank' class='text-[#008080] hover:underline'>Undang-Undang Nomor 4 Tahun 1996 tentang Hak Tanggungan</a>.",
                pentingnya: "Memberikan kepastian hukum bagi kreditur dalam pemberian pinjaman dan membebaskan properti dari jaminan setelah utang lunas.",
                proses: ["Pendaftaran Hak Tanggungan di Kantor Pertanahan", "Untuk Roya, pengajuan permohonan ke Kantor Pertanahan setelah pelunasan utang"],
                peran: "UrusLegal membantu proses pendaftaran Hak Tanggungan atau pengajuan Roya di Kantor Pertanahan.",
                timeline: "Berdasarkan konsultasi",
                biayaEstimasi: "Minta Penawaran",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran",
                yangDidapat: ["Sertifikat Hak Tanggungan atau Surat Keterangan Roya."],
                caraAjuan: "Sampaikan kebutuhan Anda terkait hak tanggungan atau roya. Kami akan memandu prosesnya.",
                catatan: "",
                metrics: { Kecepatan: 5, Kompleksitas: 5, Biaya: 5 }
            },
            "Peningkatan Hak (HGB ke SHM)": {
                icon: '<i class="fa-solid fa-home"></i>', // Ikon diperbarui
                definisi: "Bantu ubah status Hak Guna Bangunan menjadi Hak Milik. <br><br>Dasar hukumnya adalah <a href='https://peraturan.bpk.go.id/Details/161848/pp-no-18-tahun-2021' target='_blank' class='text-[#008080] hover:underline'>Peraturan Pemerintah Nomor 18 Tahun 2021 tentang Hak Pengelolaan, Hak Atas Tanah, Satuan Rumah Susun, dan Pendaftaran Tanah</a>.",
                pentingnya: "Hak Milik adalah hak terkuat dan terpenuh yang dapat dimiliki atas tanah, tanpa batas waktu. Meningkatkan nilai dan kepastian hukum properti.",
                proses: ["Pengajuan permohonan ke Kantor Pertanahan", "Melengkapi dokumen", "Pembayaran biaya"],
                peran: "UrusLegal membantu persiapan dokumen, pengajuan permohonan peningkatan hak, dan koordinasi dengan Kantor Pertanahan.",
                timeline: "5 hari kerja",
                biayaEstimasi: "Mulai dari 3.500.000",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran", // Ini mungkin bervariasi
                yangDidapat: ["Sertifikat Hak Milik (SHM)."],
                caraAjuan: "Sediakan sertifikat HGB Anda. Kami akan bantu proses peningkatan hak ke SHM.",
                catatan: "",
                metrics: { Kecepatan: 6, Kompleksitas: 6, Biaya: 6 }
            }
        }
    },
    "Pertanahan": { // Kategori baru: Pertanahan
        icon: '🗺️', // Ikon baru
        services: {
            "Pengecekan Sertifikat Tanah": {
                icon: '<i class="fas fa-magnifying-glass-location"></i>',
                definisi: "Verifikasi keabsahan dan status hukum sertifikat tanah Anda di BPN.",
                pentingnya: "Memastikan sertifikat tidak palsu, tidak dalam sengketa, tidak diblokir, dan data akurat sebelum transaksi.",
                proses: ["Pengajuan permohonan pengecekan ke Kantor Pertanahan dengan membawa sertifikat asli"],
                peran: "UrusLegal membantu pengajuan permohonan pengecekan sertifikat tanah di Kantor Pertanahan untuk memastikan keabsahannya.",
                timeline: "1 hari kerja",
                biayaEstimasi: "250000",
                biayaJasa: "250000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Informasi keabsahan dan status hukum sertifikat tanah."],
                caraAjuan: "Sediakan sertifikat tanah yang ingin dicek. Kami akan mengurus pengecekannya di BPN.",
                catatan: "",
                metrics: { Kecepatan: 9, Kompleksitas: 2, Biaya: 1 }
            },
            "Perubahan Zona Tanah / Tata Ruang": {
                icon: '<i class="fas fa-map"></i>',
                definisi: "Bantu ubah peruntukan lahan sesuai rencana tata ruang. <br><br>Dasar hukumnya adalah <a href='https://peraturan.bpk.go.id/Home/Details/161851/pp-no-21-tahun-2021' target='_blank' class='text-[#008080] hover:underline'>Peraturan Pemerintah Nomor 21 Tahun 2021 tentang Penyelenggaraan Penataan Ruang</a>.",
                pentingnya: "Diperlukan jika Anda ingin menggunakan lahan untuk tujuan yang berbeda dari zona awalnya.",
                proses: ["Pengajuan permohonan ke Dinas Tata Ruang/PUPR setempat", "Melampirkan rencana penggunaan lahan", "Proses persetujuan"],
                peran: "UrusLegal memberikan konsultasi awal, membantu penyiapan dokumen, dan memandu proses pengajuan perubahan zona tanah yang kompleks.",
                timeline: "30 hari kerja",
                biayaEstimasi: "Minta Penawaran",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran",
                yangDidapat: ["Persetujuan Perubahan Zona Tanah/Tata Ruang."],
                caraAjuan: "Sampaikan detail lokasi dan rencana penggunaan lahan Anda. Kami akan bantu proses perizinan perubahan zona.",
                catatan: "",
                metrics: { Kecepatan: 2, Kompleksitas: 8, Biaya: 8 }
            },
            "Pengurusan LSD (Lahan Sawah Dilindungi)": {
                icon: '<i class="fas fa-seedling"></i>',
                definisi: "Penanganan khusus untuk alih fungsi lahan sawah yang dilindungi. <br><br>Dasar hukumnya adalah <a href='https://peraturan.bpk.go.id/Download/111340/Perpres%20Nomor%2059%20Tahun%202019.pdf' target='_blank' class='text-[#008080] hover:underline'>Peraturan Presiden Nomor 59 Tahun 2019 tentang Pengendalian Alih Fungsi Lahan Sawah</a>.",
                pentingnya: "Sangat krusial dan memiliki regulasi ketat untuk menjaga ketahanan pangan.",
                proses: ["Sangat kompleks, melibatkan kajian teknis", "Persetujuan Kementerian Pertanian, Kementerian ATR/BPN", "Pemerintah daerah"],
                peran: "UrusLegal memberikan konsultasi mendalam, membantu penyiapan kajian, dan memandu proses perizinan alih fungsi LSD yang sangat kompleks.",
                timeline: "30 hari kerja",
                biayaEstimasi: "Minta Penawaran",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran",
                yangDidapat: ["Persetujuan Alih Fungsi Lahan Sawah Dilindungi."],
                caraAjuan: "Diskusikan rencana alih fungsi lahan sawah Anda. Kami akan memandu proses perizinan yang ketat ini.",
                catatan: "",
                metrics: { Kecepatan: 2, Kompleksitas: 9, Biaya: 9 }
            },
            "Pemisahan / Pecah Sertifikat": {
                icon: '<i class="fas fa-scissors"></i>',
                definisi: "Proses pemecahan satu sertifikat tanah menjadi beberapa sertifikat yang lebih kecil.",
                pentingnya: "Diperlukan untuk pembagian warisan, penjualan sebagian tanah, atau pengembangan properti.",
                proses: ["Pengajuan permohonan ke Kantor Pertanahan", "Pengukuran ulang", "Penerbitan sertifikat pecah"],
                peran: "UrusLegal membantu persiapan dokumen, pengajuan permohonan pemecahan sertifikat, dan koordinasi dengan Kantor Pertanahan.",
                timeline: "5 hari kerja",
                biayaEstimasi: "1900000",
                biayaJasa: "1900000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Sertifikat tanah baru hasil pemecahan."],
                caraAjuan: "Sediakan sertifikat yang ingin dipecah. Kami akan bantu proses pemisahan dan penerbitan sertifikat baru.",
                catatan: "",
                metrics: { Kecepatan: 6, Kompleksitas: 6, Biaya: 6 }
            },
            "Perubahan Sertifikat Tanah Elektronik": {
                icon: '<i class="fas fa-tablet-alt"></i>', // Ikon tablet/digital
                definisi: "Proses perubahan data atau konversi sertifikat tanah konvensional menjadi sertifikat elektronik.",
                pentingnya: "Mempermudah pengelolaan, mengurangi risiko kehilangan, dan meningkatkan keamanan data pertanahan Anda secara digital.",
                proses: ["Pengajuan permohonan ke Kantor Pertanahan", "Verifikasi data dan dokumen asli", "Proses konversi ke format elektronik", "Penerbitan sertifikat elektronik."],
                peran: "UrusLegal memandu Anda melalui seluruh proses perubahan atau konversi sertifikat tanah menjadi format elektronik, memastikan kelengkapan dokumen dan kepatuhan prosedur.",
                timeline: "45 hari kerja", // Updated timeline
                biayaEstimasi: "3250000", // Updated cost
                biayaJasa: "3250000", // Updated cost
                biayaPemerintahEstimasi: "Minta Penawaran", // Ini mungkin bervariasi
                yangDidapat: ["Sertifikat Tanah Elektronik."],
                caraAjuan: "Sediakan sertifikat tanah asli dan dokumen identitas Anda. Kami akan bantu proses pengajuan dan konversi.",
                catatan: "Biaya dapat bervariasi tergantung kompleksitas dan jenis perubahan.",
                metrics: { Kecepatan: 3, Kompleksitas: 7, Biaya: 7 } // Adjusted metrics based on new timeline/cost
            },
            "Pengurusan Girik Menjadi SHM": {
                icon: '<i class="fas fa-file-invoice"></i>', // Icon for land certificate
                definisi: "Proses konversi atau pendaftaran tanah dari bukti kepemilikan adat (Girik) menjadi Sertifikat Hak Milik (SHM) yang sah di mata hukum.",
                pentingnya: "Mengubah status tanah dari girik menjadi SHM memberikan kepastian hukum hak milik yang paling kuat, meningkatkan nilai jual, dan mempermudah transaksi serta akses pembiayaan.",
                proses: [
                    "Pengumpulan dokumen awal (Girik, identitas pemilik, surat riwayat tanah)",
                    "Pengukuran ulang tanah oleh BPN",
                    "Pemeriksaan riwayat tanah dan data fisik",
                    "Penerbitan Surat Keputusan Pemberian Hak",
                    "Pendaftaran hak di Kantor Pertanahan dan penerbitan SHM"
                ],
                peran: "UrusLegal membantu seluruh proses pengurusan konversi Girik menjadi SHM, mulai dari persiapan dokumen, koordinasi dengan BPN, hingga penerbitan sertifikat.",
                timeline: "45 hari kerja",
                biayaEstimasi: "Minta Penawaran",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran",
                yangDidapat: ["Sertifikat Hak Milik (SHM) atas nama Anda."],
                caraAjuan: "Sediakan dokumen Girik asli dan identitas Anda. Kami akan melakukan verifikasi awal dan memandu langkah selanjutnya.",
                catatan: "Proses ini mungkin memerlukan waktu lebih lama jika ada sengketa atau data yang tidak lengkap.",
                metrics: { Kecepatan: 3, Kompleksitas: 9, Biaya: 8 }
            }
        }
    },
    "Teknologi Digital": {
        icon: '💻',
        services: {
            "Penyusunan Kebijakan Privasi & Syarat Ketentuan (Website/Aplikasi)": {
                icon: '<i class="fas fa-shield-alt"></i>',
                definisi: "Buat dokumen hukum penting untuk platform digital Anda.",
                pentingnya: "Wajib secara hukum, membangun kepercayaan pengguna, dan melindungi penyedia layanan dari potensi sengketa.",
                proses: ["Penyusunan draf dokumen yang komprehensif sesuai regulasi dan praktik terbaik"],
                peran: "UrusLegal membantu penyusunan draf Kebijakan Privasi dan Syarat & Ketentuan yang sesuai dengan bisnis digital Anda dan regulasi yang berlaku.",
                timeline: "3 hari kerja",
                biayaEstimasi: "1500000",
                biayaJasa: "1500000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Dokumen Kebijakan Privasi dan Syarat & Ketentuan yang disesuaikan."],
                caraAjuan: "Sampaikan detail platform digital Anda. Kami akan menyusun dokumen legal yang diperlukan.",
                catatan: "",
                metrics: { Kecepatan: 7, Kompleksitas: 6, Biaya: 5 }
            },
            "Perjanjian Lisensi Software / Aplikasi": {
                icon: '<i class="fas fa-code"></i>',
                definisi: "Susun kontrak lisensi untuk penggunaan atau distribusi perangkat lunak Anda.",
                pentingnya: "Melindungi hak cipta perangkat lunak Anda, mengatur model bisnis, dan memitigasi risiko penyalahgunaan.",
                proses: ["Penyusunan draf perjanjian yang detail", "Mencakup ruang lingkup lisensi, kewajiban, dan ketentuan hukum"],
                peran: "UrusLegal membantu penyusunan draf perjanjian lisensi software/aplikasi yang sesuai dengan model bisnis dan perlindungan hukum yang Anda butuhkan.",
                timeline: "3 hari kerja",
                biayaEstimasi: "2000000",
                biayaJasa: "2000000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Perjanjian Lisensi Software/Aplikasi yang disesuaikan."],
                caraAjuan: "Diskusikan model lisensi software/aplikasi Anda. Kami akan menyusun perjanjian yang melindungi hak Anda.",
                catatan: "",
                metrics: { Kecepatan: 6, Kompleksitas: 7, Biaya: 6 }
            },
            "Pendaftaran Penyelenggara Sistem Elektronik (PSE)": {
                icon: '<i class="fas fa-server"></i>',
                definisi: "Bantu daftarkan platform digital Anda ke Kominfo.",
                pentingnya: "Wajib bagi banyak platform digital untuk beroperasi secara legal di Indonesia dan menghindari sanksi dari Kominfo.",
                proses: ["Pengajuan permohonan melalui sistem OSS", "Melengkapi data."],
                peran: "UrusLegal membantu persiapan dokumen dan proses pendaftaran PSE.",
                timeline: "1 hari kerja",
                biayaEstimasi: "1000000",
                biayaJasa: "1000000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Tanda Daftar Penyelenggara Sistem Elektronik (TD PSE)."],
                caraAjuan: "Sampaikan detail sistem elektronik Anda.",
                catatan: "Layanan ini juga tersedia di kategori Digital Asisten.",
                metrics: { Kecepatan: 5, Kompleksitas: 5, Biaya: 4 }
            },
            "Review Legal untuk Aplikasi/Platform Digital": {
                icon: '<i class="fas fa-mobile-alt"></i>',
                definisi: "Pemeriksaan kepatuhan hukum untuk aplikasi atau platform digital Anda (misal: regulasi fintech, e-commerce, perlindungan data).",
                pentingnya: "Mengidentifikasi potensi risiko hukum, memastikan kepatuhan regulasi, dan memberikan rekomendasi perbaikan.",
                proses: ["Analisis mendalam terhadap fitur, alur pengguna, model bisnis", "Dokumen legal platform digital Anda"],
                peran: "UrusLegal menyediakan jasa review legal komprehensif untuk aplikasi/platform digital Anda, dengan rekomendasi mitigasi risiko.",
                timeline: "3 hari kerja",
                biayaEstimasi: "3000000",
                biayaJasa: "3000000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Laporan Review Legal dengan rekomendasi perbaikan."],
                caraAjuan: "Sediakan akses ke aplikasi/platform digital Anda dan dokumen terkait. Kami akan melakukan review legal.",
                catatan: "",
                metrics: { Kecepatan: 4, Kompleksitas: 8, Biaya: 7 }
            },
            "Penyusunan Perjanjian Kerjasama IT/Developer": {
                icon: '<i class="fas fa-network-wired"></i>',
                definisi: "Buat kontrak spesifik untuk proyek pengembangan software atau kerjasama teknologi.",
                pentingnya: "Memberikan kejelasan mengenai ruang lingkup pekerjaan, jadwal, pembayaran, kepemilikan HAKI, dan penyelesaian sengketa.",
                proses: ["Penyusunan draf perjanjian yang detail", "Mencakup ruang lingkup lisensi, kewajiban, dan ketentuan hukum"],
                peran: "UrusLegal membantu penyusunan draf perjanjian kerjasama IT/developer yang melindungi kepentingan Anda.",
                timeline: "3 hari kerja",
                biayaEstimasi: "2500000",
                biayaJasa: "2500000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Perjanjian Kerjasama IT/Developer yang disesuaikan."],
                caraAjuan: "Diskusikan proyek IT Anda. Kami akan menyusun perjanjian kerjasama yang sesuai.",
                catatan: "",
                metrics: { Kecepatan: 6, Kompleksitas: 6, Biaya: 5 }
            },
            "Pembuatan Web Company Profile": {
                icon: '<i class="fas fa-globe"></i>',
                definisi: "Jasa pembuatan website company profile profesional untuk memperkenalkan bisnis Anda secara online.",
                pentingnya: "Membangun kehadiran digital yang kuat, meningkatkan kredibilitas, dan menjadi pusat informasi bagi calon klien dan mitra.",
                proses: ["Konsultasi dan pengumpulan konten (teks, gambar, logo)", "Desain dan pengembangan website", "Review dan revisi", "Peluncuran website"],
                peran: "UrusLegal menyediakan layanan pembuatan web company profile yang disesuaikan dengan kebutuhan bisnis Anda, dari desain hingga peluncuran.",
                timeline: "2-4 hari kerja",
                biayaEstimasi: "2500000",
                biayaJasa: "2500000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Website company profile yang siap tayang."],
                caraAjuan: "Hubungi kami untuk konsultasi awal. Siapkan materi konten dasar perusahaan Anda.",
                catatan: "",
                metrics: { Kecepatan: 7, Kompleksitas: 5, Biaya: 6 }
            },
            "Pendaftaran D-U-N-S": {
                icon: '<i class="fas fa-fingerprint"></i>',
                definisi: "Pendaftaran nomor identifikasi unik untuk bisnis global dari Dun & Bradstreet.",
                pentingnya: "Diperlukan untuk bertransaksi dengan perusahaan global, termasuk daftar di Apple Developer Program, Google Play Developer, dll.",
                proses: ["Pengajuan permohonan ke Dun & Bradstreet", "Verifikasi data perusahaan."],
                peran: "UrusLegal membantu proses pengajuan dan verifikasi data untuk mendapatkan nomor D-U-N-S.",
                timeline: "5-10 hari kerja",
                biayaEstimasi: "6250000",
                biayaJasa: "6250000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Nomor D-U-N-S."],
                caraAjuan: "Sediakan data perusahaan lengkap.",
                catatan: "",
                metrics: { Kecepatan: 5, Kompleksitas: 6, Biaya: 7 }
            }
        }
    },
    "Properti": { // Kategori baru: Properti
        icon: '🏡', // Ikon baru
        services: {
            "Pembuatan Akta Jual beli (AJB)": {
                icon: '<i class="fas fa-house-chimney"></i>',
                definisi: "Proses jual beli properti.",
                pentingnya: "Memastikan transaksi properti sah di mata hukum, memberikan kepastian kepemilikan kepada pembeli, dan mencegah sengketa di masa depan.",
                proses: ["Penyiapan dokumen penjual & pembeli", "Pembayaran pajak (BPHTB, PPh)", "Tanda tangan AJB di hadapan PPAT", "Pendaftaran balik nama di Kantor Pertanahan"],
                peran: "UrusLegal memfasilitasi penyiapan dokumen, koordinasi dengan PPAT mitra, panduan pembayaran pajak, hingga proses balik nama sertifikat.",
                timeline: "Berdasarkan konsultasi",
                biayaEstimasi: "Minta Penawaran",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran",
                yangDidapat: ["Akta Jual Beli (AJB) yang sah."],
                caraAjuan: "Sampaikan detail properti dan para pihak yang terlibat. Kami akan memandu proses AJB.",
                catatan: "",
                metrics: { Kecepatan: 4, Kompleksitas: 7, Biaya: 8 }
            },
            "Balik Nama Sertifikat": {
                icon: '<i class="fas fa-file-signature"></i>',
                definisi: "Proses perubahan nama pemilik di sertifikat tanah/bangunan di Kantor Pertanahan.",
                pentingnya: "Memastikan kepemilikan sah dan terdaftar atas nama pemilik baru.",
                proses: ["Pendaftaran perubahan nama pemilik di sertifikat di Kantor Pertanahan"],
                peran: "UrusLegal memfasilitasi penyiapan dokumen, koordinasi dengan PPAT mitra, panduan pembayaran pajak, hingga proses balik nama sertifikat.",
                timeline: "Berdasarkan konsultasi",
                biayaEstimasi: "Minta Penawaran",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran",
                yangDidapat: ["Sertifikat tanah/bangunan atas nama pemilik baru."],
                caraAjuan: "Sediakan sertifikat lama dan dokumen pendukung. Kami akan bantu proses balik nama.",
                catatan: "",
                metrics: { Kecepatan: 4, Kompleksitas: 6, Biaya: 7 }
            },
            "Pengurusan Hak Tanggungan / ROYA": {
                icon: '<i class="fas fa-hand-holding-dollar"></i>', // Ikon diperbarui
                definisi: "Pengurusan jaminan properti untuk pinjaman atau penghapusannya. <br><br>Dasar hukumnya adalah <a href='https://bphn.go.id/data/documents/96uu004.pdf' target='_blank' class='text-[#008080] hover:underline'>Undang-Undang Nomor 4 Tahun 1996 tentang Hak Tanggungan</a>.",
                pentingnya: "Memberikan kepastian hukum bagi kreditur dalam pemberian pinjaman dan membebaskan properti dari jaminan setelah utang lunas.",
                proses: ["Pendaftaran Hak Tanggungan di Kantor Pertanahan", "Untuk Roya, pengajuan permohonan ke Kantor Pertanahan setelah pelunasan utang"],
                peran: "UrusLegal membantu proses pendaftaran Hak Tanggungan atau pengajuan Roya di Kantor Pertanahan.",
                timeline: "Berdasarkan konsultasi",
                biayaEstimasi: "Minta Penawaran",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran",
                yangDidapat: ["Sertifikat Hak Tanggungan atau Surat Keterangan Roya."],
                caraAjuan: "Sampaikan kebutuhan Anda terkait hak tanggungan atau roya. Kami akan memandu prosesnya.",
                catatan: "",
                metrics: { Kecepatan: 5, Kompleksitas: 5, Biaya: 5 }
            },
            "Peningkatan Hak (HGB ke SHM)": {
                icon: '<i class="fa-solid fa-home"></i>', // Ikon diperbarui
                definisi: "Bantu ubah status Hak Guna Bangunan menjadi Hak Milik. <br><br>Dasar hukumnya adalah <a href='https://peraturan.bpk.go.id/Details/161848/pp-no-18-tahun-2021' target='_blank' class='text-[#008080] hover:underline'>Peraturan Pemerintah Nomor 18 Tahun 2021 tentang Hak Pengelolaan, Hak Atas Tanah, Satuan Rumah Susun, dan Pendaftaran Tanah</a>.",
                pentingnya: "Hak Milik adalah hak terkuat dan terpenuh yang dapat dimiliki atas tanah, tanpa batas waktu. Meningkatkan nilai dan kepastian hukum properti.",
                proses: ["Pengajuan permohonan ke Kantor Pertanahan", "Melengkapi dokumen", "Pembayaran biaya"],
                peran: "UrusLegal membantu persiapan dokumen, pengajuan permohonan peningkatan hak, dan koordinasi dengan Kantor Pertanahan.",
                timeline: "5 hari kerja",
                biayaEstimasi: "Mulai dari 3.500.000",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran", // Ini mungkin bervariasi
                yangDidapat: ["Sertifikat Hak Milik (SHM)."],
                caraAjuan: "Sediakan sertifikat HGB Anda. Kami akan bantu proses peningkatan hak ke SHM.",
                catatan: "",
                metrics: { Kecepatan: 6, Kompleksitas: 6, Biaya: 6 }
            }
        }
    },
    "Pertanahan": { // Kategori baru: Pertanahan
        icon: '🗺️', // Ikon baru
        services: {
            "Pengecekan Sertifikat Tanah": {
                icon: '<i class="fas fa-magnifying-glass-location"></i>',
                definisi: "Verifikasi keabsahan dan status hukum sertifikat tanah Anda di BPN.",
                pentingnya: "Memastikan sertifikat tidak palsu, tidak dalam sengketa, tidak diblokir, dan data akurat sebelum transaksi.",
                proses: ["Pengajuan permohonan pengecekan ke Kantor Pertanahan dengan membawa sertifikat asli"],
                peran: "UrusLegal membantu pengajuan permohonan pengecekan sertifikat tanah di Kantor Pertanahan untuk memastikan keabsahannya.",
                timeline: "1 hari kerja",
                biayaEstimasi: "250000",
                biayaJasa: "250000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Informasi keabsahan dan status hukum sertifikat tanah."],
                caraAjuan: "Sediakan sertifikat tanah yang ingin dicek. Kami akan mengurus pengecekannya di BPN.",
                catatan: "",
                metrics: { Kecepatan: 9, Kompleksitas: 2, Biaya: 1 }
            },
            "Perubahan Zona Tanah / Tata Ruang": {
                icon: '<i class="fas fa-map"></i>',
                definisi: "Bantu ubah peruntukan lahan sesuai rencana tata ruang. <br><br>Dasar hukumnya adalah <a href='https://peraturan.bpk.go.id/Home/Details/161851/pp-no-21-tahun-2021' target='_blank' class='text-[#008080] hover:underline'>Peraturan Pemerintah Nomor 21 Tahun 2021 tentang Penyelenggaraan Penataan Ruang</a>.",
                pentingnya: "Diperlukan jika Anda ingin menggunakan lahan untuk tujuan yang berbeda dari zona awalnya.",
                proses: ["Pengajuan permohonan ke Dinas Tata Ruang/PUPR setempat", "Melampirkan rencana penggunaan lahan", "Proses persetujuan"],
                peran: "UrusLegal memberikan konsultasi awal, membantu penyiapan dokumen, dan memandu proses pengajuan perubahan zona tanah yang kompleks.",
                timeline: "30 hari kerja",
                biayaEstimasi: "Minta Penawaran",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran",
                yangDidapat: ["Persetujuan Perubahan Zona Tanah/Tata Ruang."],
                caraAjuan: "Sampaikan detail lokasi dan rencana penggunaan lahan Anda. Kami akan bantu proses perizinan perubahan zona.",
                catatan: "",
                metrics: { Kecepatan: 2, Kompleksitas: 8, Biaya: 8 }
            },
            "Pengurusan LSD (Lahan Sawah Dilindungi)": {
                icon: '<i class="fas fa-seedling"></i>',
                definisi: "Penanganan khusus untuk alih fungsi lahan sawah yang dilindungi. <br><br>Dasar hukumnya adalah <a href='https://peraturan.bpk.go.id/Download/111340/Perpres%20Nomor%2059%20Tahun%202019.pdf' target='_blank' class='text-[#008080] hover:underline'>Peraturan Presiden Nomor 59 Tahun 2019 tentang Pengendalian Alih Fungsi Lahan Sawah</a>.",
                pentingnya: "Sangat krusial dan memiliki regulasi ketat untuk menjaga ketahanan pangan.",
                proses: ["Sangat kompleks, melibatkan kajian teknis", "Persetujuan Kementerian Pertanian, Kementerian ATR/BPN", "Pemerintah daerah"],
                peran: "UrusLegal memberikan konsultasi mendalam, membantu penyiapan kajian, dan memandu proses perizinan alih fungsi LSD yang sangat kompleks.",
                timeline: "30 hari kerja",
                biayaEstimasi: "Minta Penawaran",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran",
                yangDidapat: ["Persetujuan Alih Fungsi Lahan Sawah Dilindungi."],
                caraAjuan: "Diskusikan rencana alih fungsi lahan sawah Anda. Kami akan memandu proses perizinan yang ketat ini.",
                catatan: "",
                metrics: { Kecepatan: 2, Kompleksitas: 9, Biaya: 9 }
            },
            "Pemisahan / Pecah Sertifikat": {
                icon: '<i class="fas fa-scissors"></i>',
                definisi: "Proses pemecahan satu sertifikat tanah menjadi beberapa sertifikat yang lebih kecil.",
                pentingnya: "Diperlukan untuk pembagian warisan, penjualan sebagian tanah, atau pengembangan properti.",
                proses: ["Pengajuan permohonan ke Kantor Pertanahan", "Pengukuran ulang", "Penerbitan sertifikat pecah"],
                peran: "UrusLegal membantu persiapan dokumen, pengajuan permohonan pemecahan sertifikat, dan koordinasi dengan Kantor Pertanahan.",
                timeline: "5 hari kerja",
                biayaEstimasi: "1900000",
                biayaJasa: "1900000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Sertifikat tanah baru hasil pemecahan."],
                caraAjuan: "Sediakan sertifikat yang ingin dipecah. Kami akan bantu proses pemisahan dan penerbitan sertifikat baru.",
                catatan: "",
                metrics: { Kecepatan: 6, Kompleksitas: 6, Biaya: 6 }
            },
            "Perubahan Sertifikat Tanah Elektronik": {
                icon: '<i class="fas fa-tablet-alt"></i>', // Ikon tablet/digital
                definisi: "Proses perubahan data atau konversi sertifikat tanah konvensional menjadi sertifikat elektronik.",
                pentingnya: "Mempermudah pengelolaan, mengurangi risiko kehilangan, dan meningkatkan keamanan data pertanahan Anda secara digital.",
                proses: ["Pengajuan permohonan ke Kantor Pertanahan", "Verifikasi data dan dokumen asli", "Proses konversi ke format elektronik", "Penerbitan sertifikat elektronik."],
                peran: "UrusLegal memandu Anda melalui seluruh proses perubahan atau konversi sertifikat tanah menjadi format elektronik, memastikan kelengkapan dokumen dan kepatuhan prosedur.",
                timeline: "45 hari kerja", // Updated timeline
                biayaEstimasi: "3250000", // Updated cost
                biayaJasa: "3250000", // Updated cost
                biayaPemerintahEstimasi: "Minta Penawaran", // Ini mungkin bervariasi
                yangDidapat: ["Sertifikat Tanah Elektronik."],
                caraAjuan: "Sediakan sertifikat tanah asli dan dokumen identitas Anda. Kami akan bantu proses pengajuan dan konversi.",
                catatan: "Biaya dapat bervariasi tergantung kompleksitas dan jenis perubahan.",
                metrics: { Kecepatan: 3, Kompleksitas: 7, Biaya: 7 } // Adjusted metrics based on new timeline/cost
            },
            "Pengurusan Girik Menjadi SHM": {
                icon: '<i class="fas fa-file-invoice"></i>', // Icon for land certificate
                definisi: "Proses konversi atau pendaftaran tanah dari bukti kepemilikan adat (Girik) menjadi Sertifikat Hak Milik (SHM) yang sah di mata hukum.",
                pentingnya: "Mengubah status tanah dari girik menjadi SHM memberikan kepastian hukum hak milik yang paling kuat, meningkatkan nilai jual, dan mempermudah transaksi serta akses pembiayaan.",
                proses: [
                    "Pengumpulan dokumen awal (Girik, identitas pemilik, surat riwayat tanah)",
                    "Pengukuran ulang tanah oleh BPN",
                    "Pemeriksaan riwayat tanah dan data fisik",
                    "Penerbitan Surat Keputusan Pemberian Hak",
                    "Pendaftaran hak di Kantor Pertanahan dan penerbitan SHM"
                ],
                peran: "UrusLegal membantu seluruh proses pengurusan konversi Girik menjadi SHM, mulai dari persiapan dokumen, koordinasi dengan BPN, hingga penerbitan sertifikat.",
                timeline: "45 hari kerja",
                biayaEstimasi: "Minta Penawaran",
                biayaJasa: "Minta Penawaran",
                biayaPemerintahEstimasi: "Minta Penawaran",
                yangDidapat: ["Sertifikat Hak Milik (SHM) atas nama Anda."],
                caraAjuan: "Sediakan dokumen Girik asli dan identitas Anda. Kami akan melakukan verifikasi awal dan memandu langkah selanjutnya.",
                catatan: "Proses ini mungkin memerlukan waktu lebih lama jika ada sengketa atau data yang tidak lengkap.",
                metrics: { Kecepatan: 3, Kompleksitas: 9, Biaya: 8 }
            }
        }
    },
    "Teknologi Digital": {
        icon: '💻',
        services: {
            "Penyusunan Kebijakan Privasi & Syarat Ketentuan (Website/Aplikasi)": {
                icon: '<i class="fas fa-shield-alt"></i>',
                definisi: "Buat dokumen hukum penting untuk platform digital Anda.",
                pentingnya: "Wajib secara hukum, membangun kepercayaan pengguna, dan melindungi penyedia layanan dari potensi sengketa.",
                proses: ["Penyusunan draf dokumen yang komprehensif sesuai regulasi dan praktik terbaik"],
                peran: "UrusLegal membantu penyusunan draf Kebijakan Privasi dan Syarat & Ketentuan yang sesuai dengan bisnis digital Anda dan regulasi yang berlaku.",
                timeline: "3 hari kerja",
                biayaEstimasi: "1500000",
                biayaJasa: "1500000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Dokumen Kebijakan Privasi dan Syarat & Ketentuan yang disesuaikan."],
                caraAjuan: "Sampaikan detail platform digital Anda. Kami akan menyusun dokumen legal yang diperlukan.",
                catatan: "",
                metrics: { Kecepatan: 7, Kompleksitas: 6, Biaya: 5 }
            },
            "Perjanjian Lisensi Software / Aplikasi": {
                icon: '<i class="fas fa-code"></i>',
                definisi: "Susun kontrak lisensi untuk penggunaan atau distribusi perangkat lunak Anda.",
                pentingnya: "Melindungi hak cipta perangkat lunak Anda, mengatur model bisnis, dan memitigasi risiko penyalahgunaan.",
                proses: ["Penyusunan draf perjanjian yang detail", "Mencakup ruang lingkup lisensi, kewajiban, dan ketentuan hukum"],
                peran: "UrusLegal membantu penyusunan draf perjanjian lisensi software/aplikasi yang sesuai dengan model bisnis dan perlindungan hukum yang Anda butuhkan.",
                timeline: "3 hari kerja",
                biayaEstimasi: "2000000",
                biayaJasa: "2000000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Perjanjian Lisensi Software/Aplikasi yang disesuaikan."],
                caraAjuan: "Diskusikan model lisensi software/aplikasi Anda. Kami akan menyusun perjanjian yang melindungi hak Anda.",
                catatan: "",
                metrics: { Kecepatan: 6, Kompleksitas: 7, Biaya: 6 }
            },
            "Pendaftaran Penyelenggara Sistem Elektronik (PSE)": {
                icon: '<i class="fas fa-server"></i>',
                definisi: "Bantu daftarkan platform digital Anda ke Kominfo.",
                pentingnya: "Wajib bagi banyak platform digital untuk beroperasi secara legal di Indonesia dan menghindari sanksi dari Kominfo.",
                proses: ["Pengajuan permohonan melalui sistem OSS", "Melengkapi data."],
                peran: "UrusLegal membantu persiapan dokumen dan proses pendaftaran PSE.",
                timeline: "1 hari kerja",
                biayaEstimasi: "1000000",
                biayaJasa: "1000000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Tanda Daftar Penyelenggara Sistem Elektronik (TD PSE)."],
                caraAjuan: "Sampaikan detail sistem elektronik Anda.",
                catatan: "Layanan ini juga tersedia di kategori Digital Asisten.",
                metrics: { Kecepatan: 5, Kompleksitas: 5, Biaya: 4 }
            },
            "Review Legal untuk Aplikasi/Platform Digital": {
                icon: '<i class="fas fa-mobile-alt"></i>',
                definisi: "Pemeriksaan kepatuhan hukum untuk aplikasi atau platform digital Anda (misal: regulasi fintech, e-commerce, perlindungan data).",
                pentingnya: "Mengidentifikasi potensi risiko hukum, memastikan kepatuhan regulasi, dan memberikan rekomendasi perbaikan.",
                proses: ["Analisis mendalam terhadap fitur, alur pengguna, model bisnis", "Dokumen legal platform digital Anda"],
                peran: "UrusLegal menyediakan jasa review legal komprehensif untuk aplikasi/platform digital Anda, dengan rekomendasi mitigasi risiko.",
                timeline: "3 hari kerja",
                biayaEstimasi: "3000000",
                biayaJasa: "3000000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Laporan Review Legal dengan rekomendasi perbaikan."],
                caraAjuan: "Sediakan akses ke aplikasi/platform digital Anda dan dokumen terkait. Kami akan melakukan review legal.",
                catatan: "",
                metrics: { Kecepatan: 4, Kompleksitas: 8, Biaya: 7 }
            },
            "Penyusunan Perjanjian Kerjasama IT/Developer": {
                icon: '<i class="fas fa-network-wired"></i>',
                definisi: "Buat kontrak spesifik untuk proyek pengembangan software atau kerjasama teknologi.",
                pentingnya: "Memberikan kejelasan mengenai ruang lingkup pekerjaan, jadwal, pembayaran, kepemilikan HAKI, dan penyelesaian sengketa.",
                proses: ["Penyusunan draf perjanjian yang detail", "Mencakup ruang lingkup lisensi, kewajiban, dan ketentuan hukum"],
                peran: "UrusLegal membantu penyusunan draf perjanjian kerjasama IT/developer yang melindungi kepentingan Anda.",
                timeline: "3 hari kerja",
                biayaEstimasi: "2500000",
                biayaJasa: "2500000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Perjanjian Kerjasama IT/Developer yang disesuaikan."],
                caraAjuan: "Diskusikan proyek IT Anda. Kami akan menyusun perjanjian kerjasama yang sesuai.",
                catatan: "",
                metrics: { Kecepatan: 6, Kompleksitas: 6, Biaya: 5 }
            },
            "Pembuatan Web Company Profile": {
                icon: '<i class="fas fa-globe"></i>',
                definisi: "Jasa pembuatan website company profile profesional untuk memperkenalkan bisnis Anda secara online.",
                pentingnya: "Membangun kehadiran digital yang kuat, meningkatkan kredibilitas, dan menjadi pusat informasi bagi calon klien dan mitra.",
                proses: ["Konsultasi dan pengumpulan konten (teks, gambar, logo)", "Desain dan pengembangan website", "Review dan revisi", "Peluncuran website"],
                peran: "UrusLegal menyediakan layanan pembuatan web company profile yang disesuaikan dengan kebutuhan bisnis Anda, dari desain hingga peluncuran.",
                timeline: "2-4 hari kerja",
                biayaEstimasi: "2500000",
                biayaJasa: "2500000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Website company profile yang siap tayang."],
                caraAjuan: "Hubungi kami untuk konsultasi awal. Siapkan materi konten dasar perusahaan Anda.",
                catatan: "",
                metrics: { Kecepatan: 7, Kompleksitas: 5, Biaya: 6 }
            },
            "Pendaftaran D-U-N-S": {
                icon: '<i class="fas fa-fingerprint"></i>',
                definisi: "Pendaftaran nomor identifikasi unik untuk bisnis global dari Dun & Bradstreet.",
                // FIX: Corrected syntax error here, removed SQL dump content
                pentingnya: "Diperlukan untuk bertransaksi dengan perusahaan global, termasuk daftar di Apple Developer Program, Google Play Developer, dan lain-lain.",
                proses: ["Pengajuan permohonan ke Dun & Bradstreet", "Verifikasi data perusahaan."],
                peran: "UrusLegal membantu proses pengajuan dan verifikasi data untuk mendapatkan nomor D-U-N-S.",
                timeline: "5-10 hari kerja",
                biayaEstimasi: "6250000",
                biayaJasa: "6250000",
                biayaPemerintahEstimasi: "0",
                yangDidapat: ["Nomor D-U-N-S."],
                caraAjuan: "Sediakan data perusahaan lengkap.",
                catatan: "",
                metrics: { Kecepatan: 5, Kompleksitas: 6, Biaya: 7 }
            }
        }
    }
};

const categoryNav = document.getElementById('category-nav');
const categoryGrid = document.getElementById('category-grid');
const welcomeScreen = document.getElementById('welcome-screen');
const serviceDetailScreen = document.getElementById('service-detail-screen');
const subServiceList = document.querySelector('#sub-service-accordion-content ul');
const serviceTitle = document.getElementById('service-title');
const serviceTabs = document.getElementById('service-tabs');
const tabContent = document.getElementById('tab-content');
const openSidebarBtn = document.getElementById('open-sidebar-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const sidebar = document.getElementById('sidebar');
const searchInput = document.getElementById('search-input');
const homeButton = document.getElementById('home-button');

const subServiceAccordionHeader = document.getElementById('sub-service-accordion-header');
const subServiceAccordionContent = document.getElementById('sub-service-accordion-content');

const mobileCategoryBreadcrumb = document.getElementById('mobile-category-breadcrumb');
const backToCategoriesLink = document.getElementById('back-to-categories-link');

// New breadcrumb elements for desktop
const desktopBreadcrumb = document.getElementById('desktop-breadcrumb');
const breadcrumbHomeLink = document.getElementById('breadcrumb-home');
const breadcrumbCategoryLink = document.getElementById('breadcrumb-category-link');
const breadcrumbCategorySeparator = document.getElementById('breadcrumb-category-separator');
const breadcrumbServiceName = document.getElementById('breadcrumb-service-name');


let chartInstance = null;
let activeSidebarCategory = null;
let activeSubServiceLink = null;
let currentCategoryName = null; // New variable to store the current category name for breadcrumbs

// Helper function to create a URL-friendly slug
function createSlug(text) {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'dan').replace(/[^\w-]+/g, '');
}

// Function to format number to IDR currency
function formatRupiah(amount) {
    if (amount === null || amount === undefined || amount === "" || amount === "Minta Penawaran" || String(amount).startsWith("Mulai dari ")) {
        return amount;
    }
    const numericAmount = parseFloat(String(amount).replace(/[^0-9.]/g, ''));
    if (isNaN(numericAmount)) {
        return amount;
    }
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(numericAmount);
}

// Function to toggle accordion content
function toggleAccordion(header, content) {
    header.classList.toggle('active');
    if (content.classList.contains('active')) {
        content.style.maxHeight = null;
        content.classList.remove('active');
    } else {
        setTimeout(() => {
            content.style.maxHeight = content.scrollHeight + "px";
            content.classList.add('active');
        }, 10);
    }
}

// Function to update breadcrumbs
function updateBreadcrumbs(category, service = null) {
    // Desktop Breadcrumbs
    if (desktopBreadcrumb) {
        breadcrumbCategoryLink.textContent = category;
        breadcrumbCategoryLink.href = `#${createSlug(category)}`;
        breadcrumbCategoryLink.onclick = (e) => {
            e.preventDefault();
            history.pushState(null, '', breadcrumbCategoryLink.href);
            displayCategory(category);
            // Highlight the category in sidebar
            const sidebarCategoryLink = document.querySelector(`.sidebar-link[data-category="${category}"]`);
            if (sidebarCategoryLink) {
                if (activeSidebarCategory) {
                    activeSidebarCategory.classList.remove('active');
                }
                sidebarCategoryLink.classList.add('active');
                activeSidebarCategory = sidebarCategoryLink;
            }
        };

        if (service) {
            breadcrumbServiceName.textContent = service;
            breadcrumbServiceName.classList.remove('hidden');
            breadcrumbCategorySeparator.classList.remove('hidden');
        } else {
            breadcrumbServiceName.textContent = '';
            breadcrumbServiceName.classList.add('hidden');
            breadcrumbCategorySeparator.classList.add('hidden');
        }
    }

    // Mobile Breadcrumb (Kembali ke Kategori Bidang)
    if (mobileCategoryBreadcrumb) {
        if (service) {
            mobileCategoryBreadcrumb.classList.remove('hidden');
        } else {
            mobileCategoryBreadcrumb.classList.add('hidden');
        }
    }
}


// Function to return to home (show welcome screen, hide service detail)
function returnToHome(event) {
    event.preventDefault();
    welcomeScreen.classList.remove('hidden');
    serviceDetailScreen.classList.add('hidden');

    document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
    document.querySelectorAll('.sub-service-item').forEach(link => link.classList.remove('active'));

    activeSidebarCategory = null;
    activeSubServiceLink = null;
    currentCategoryName = null; // Reset current category

    sidebar.classList.add('-translate-x-full');
    searchInput.value = '';
    history.pushState(null, '', window.location.pathname); // Clear hash

    if (window.innerWidth < 768 && subServiceAccordionContent && subServiceAccordionContent.classList.contains('active')) {
        toggleAccordion(subServiceAccordionHeader, subServiceAccordionContent);
    }

    // Hide all breadcrumbs when returning to home
    if (mobileCategoryBreadcrumb) mobileCategoryBreadcrumb.classList.add('hidden');
    if (desktopBreadcrumb) desktopBreadcrumb.classList.add('hidden');
}

function initApp() {
    // Explicitly set initial screen states: welcome screen visible, service detail hidden
    if (!window.location.hash) {
        welcomeScreen.classList.remove('hidden');
        serviceDetailScreen.classList.add('hidden');
        if (desktopBreadcrumb) desktopBreadcrumb.classList.add('hidden'); // Hide desktop breadcrumb on home
    } else {
        welcomeScreen.classList.add('hidden');
        serviceDetailScreen.classList.remove('hidden');
        if (desktopBreadcrumb) desktopBreadcrumb.classList.remove('hidden'); // Show desktop breadcrumb if hash is present
    }

    document.querySelectorAll('#category-grid .category-card').forEach(card => {
        const category = card.dataset.category;
        card.addEventListener('click', () => {
            displayCategory(category);
            const sidebarLink = document.querySelector(`.sidebar-link[data-category="${category}"]`);
            if (sidebarLink) {
                if (activeSidebarCategory) {
                    activeSidebarCategory.classList.remove('active');
                }
                sidebarLink.classList.add('active');
                activeSidebarCategory = sidebarLink;
            }
            sidebar.classList.add('-translate-x-full');
        });
    });

    populateSidebarNav();

    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const parts = hash.split('--');

        if (parts.length > 0) {
            const categorySlug = parts[0];
            const serviceSlug = parts[1];

            let foundCategoryName = null;
            let foundServiceTitle = null;

            for (const catName in knowledgeBase) {
                if (createSlug(catName) === categorySlug) {
                    foundCategoryName = catName;
                    currentCategoryName = catName; // Set current category
                    if (serviceSlug) {
                        for (const svcName in knowledgeBase[catName].services) {
                            if (createSlug(svcName) === serviceSlug) {
                                foundServiceTitle = svcName;
                                break;
                            }
                        }
                    }
                    break;
                }
            }

            if (foundCategoryName) {
                displayCategory(foundCategoryName);
                const sidebarCategoryLink = document.querySelector(`.sidebar-link[data-category="${foundCategoryName}"]`);
                if (sidebarCategoryLink) {
                    if (activeSidebarCategory) {
                        activeSidebarCategory.classList.remove('active');
                    }
                    sidebarCategoryLink.classList.add('active');
                    activeSidebarCategory = sidebarCategoryLink;
                }

                if (foundServiceTitle) {
                    displayService(foundCategoryName, foundServiceTitle);
                    setTimeout(() => {
                        const subServiceLink = document.querySelector(`.sub-service-item[data-service="${foundServiceTitle}"]`);
                        if (subServiceLink) {
                            if (activeSubServiceLink) {
                                activeSubServiceLink.classList.remove('active');
                            }
                            subServiceLink.classList.add('active');
                            activeSubServiceLink = subServiceLink;
                        }
                    }, 50);
                }
                updateBreadcrumbs(foundCategoryName, foundServiceTitle); // Update breadcrumbs on load
            }
        }
    }

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterContent(searchTerm);
    });

    openSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('-translate-x-full');
    });

    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
    });

    homeButton.addEventListener('click', returnToHome);

    if (backToCategoriesLink) {
        backToCategoriesLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentCategoryName) {
                history.pushState(null, '', `#${createSlug(currentCategoryName)}`);
                displayCategory(currentCategoryName);
                updateBreadcrumbs(currentCategoryName); // Update breadcrumbs
            } else {
                returnToHome(e); // Fallback to home if no category is set
            }
        });
    }

    if (subServiceAccordionHeader) {
        subServiceAccordionHeader.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                toggleAccordion(subServiceAccordionHeader, subServiceAccordionContent);
            }
        });
    }
}

function populateSidebarNav() {
    categoryNav.innerHTML = '';
    Object.keys(knowledgeBase).forEach(category => {
        const categoryData = knowledgeBase[category];
        const slug = createSlug(category);

        const navLink = document.createElement('a');
        navLink.href = `#${slug}`;
        navLink.innerHTML = `<span class="category-icon">${categoryData.icon}</span> ${category}`;
        navLink.className = 'sidebar-link block py-2.5 px-5 rounded-lg hover:bg-[#1ab69d] hover:text-white transition-colors text-sm'; // Updated classes
        navLink.dataset.category = category;
        navLink.addEventListener('click', (e) => {
            e.preventDefault();
            history.pushState(null, '', navLink.href);
            displayCategory(category);
            currentCategoryName = category; // Set current category
            updateBreadcrumbs(category); // Update breadcrumbs

            if (activeSidebarCategory) {
                activeSidebarCategory.classList.remove('active');
            }
            navLink.classList.add('active');
            activeSidebarCategory = navLink;

            if (activeSubServiceLink) {
                activeSubServiceLink.classList.remove('active');
                activeSubServiceLink = null;
            }

            sidebar.classList.add('-translate-x-full');

            if (window.innerWidth < 768 && subServiceAccordionContent && !subServiceAccordionContent.classList.contains('active')) {
                toggleAccordion(subServiceAccordionHeader, subServiceAccordionContent);
            }
        });
        categoryNav.appendChild(navLink);
    });
}

function displayCategory(category) {
    welcomeScreen.classList.add('hidden');
    serviceDetailScreen.classList.remove('hidden');

    if (window.innerWidth < 768) {
        if (mobileCategoryBreadcrumb) {
            mobileCategoryBreadcrumb.classList.remove('hidden');
        }
    } else {
        if (desktopBreadcrumb) desktopBreadcrumb.classList.remove('hidden'); // Show desktop breadcrumb
    }
    updateBreadcrumbs(category); // Update breadcrumbs for category view

    const services = knowledgeBase[category].services;
    subServiceList.innerHTML = '';

    let firstServiceKey = null;

    // Iterate directly over the services in knowledgeBase
    // The IUJP service is now correctly placed within the knowledgeBase object itself.
    Object.keys(services).forEach(serviceName => {
        if (!firstServiceKey) {
            firstServiceKey = serviceName;
        }
        const serviceData = services[serviceName];
        const serviceSlug = createSlug(serviceName);
        const li = document.createElement('li');
        const serviceLink = document.createElement('a');
        serviceLink.href = `#${createSlug(category)}--${serviceSlug}`;
        serviceLink.innerHTML = `<span class="service-icon">${serviceData.icon}</span> ${serviceName}`;
        serviceLink.className = 'sub-service-item block py-2 px-3 rounded-lg transition-colors text-sm'; // Updated font size
        serviceLink.dataset.category = category;
        serviceLink.dataset.service = serviceName;
        serviceLink.addEventListener('click', (e) => {
            e.preventDefault();
            history.pushState(null, '', serviceLink.href);
            displayService(category, serviceName);
            updateBreadcrumbs(category, serviceName); // Update breadcrumbs for service view

            if (activeSubServiceLink) {
                activeSubServiceLink.classList.remove('active');
            }
            serviceLink.classList.add('active');
            activeSubServiceLink = serviceLink;

            if (window.innerWidth < 768 && subServiceAccordionContent.classList.contains('active')) {
                toggleAccordion(subServiceAccordionHeader, subServiceAccordionContent);
            }
        });
        li.appendChild(serviceLink);
        subServiceList.appendChild(li);
    });

    if (firstServiceKey) {
        displayService(category, firstServiceKey);
        const firstServiceLinkElement = subServiceList.querySelector(`.sub-service-item[data-service="${firstServiceKey}"]`);
        if (firstServiceLinkElement) {
            firstServiceLinkElement.classList.add('active');
            activeSubServiceLink = firstServiceLinkElement;
        }
    } else {
        serviceTitle.textContent = 'Tidak ada layanan tersedia di kategori ini.';
        serviceTabs.innerHTML = '';
        tabContent.innerHTML = '';
    }
}

function displayService(category, serviceName) {
    const serviceData = knowledgeBase[category].services[serviceName];
    serviceTitle.textContent = serviceName;

    if (window.innerWidth < 768) {
        if (mobileCategoryBreadcrumb) {
            mobileCategoryBreadcrumb.classList.remove('hidden');
        }
    } else {
        if (desktopBreadcrumb) desktopBreadcrumb.classList.remove('hidden'); // Show desktop breadcrumb
    }
    updateBreadcrumbs(category, serviceName); // Update breadcrumbs for service view

    // Hapus semua tombol tab yang ada
    serviceTabs.innerHTML = '';

    // Definisikan tab dan buat tombol secara dinamis
    const tabsData = [
        { name: 'Info Layanan', tab: 'tentang' },
        { name: 'Proses', tab: 'proses' },
        { name: 'Analisa Biaya', tab: 'analisis' }
    ];

    tabsData.forEach(tabInfo => {
        const button = document.createElement('button');
        // Tambahkan kelas dasar yang umum untuk semua tab
        button.className = "tab-button py-2 px-4 text-base font-semibold transition-colors duration-200";
        button.dataset.tab = tabInfo.tab;
        button.textContent = tabInfo.name;

        // Secara default, semua tab non-aktif kecuali yang pertama
        button.classList.add('tab-inactive'); // Tambahkan kelas tab-inactive

        button.addEventListener('click', () => {
            // Hapus 'tab-active' dan tambahkan 'tab-inactive' ke semua tombol tab
            document.querySelectorAll('#service-tabs .tab-button').forEach(btn => {
                btn.classList.remove('tab-active');
                btn.classList.add('tab-inactive');
            });

            // Tambahkan 'tab-active' dan hapus 'tab-inactive' dari tombol yang diklik
            button.classList.remove('tab-inactive');
            button.classList.add('tab-active');

            displayTabContent(category, serviceName, button.dataset.tab);
        });
        serviceTabs.appendChild(button);
    });

    // Secara otomatis aktifkan tab pertama (Info Layanan) saat layanan ditampilkan
    const firstTabButton = serviceTabs.querySelector('[data-tab="tentang"]');
    if (firstTabButton) {
        firstTabButton.classList.remove('tab-inactive'); // Hapus inactive
        firstTabButton.classList.add('tab-active');    // Tambahkan active
        displayTabContent(category, serviceName, 'tentang');
    }
}

function displayTabContent(category, serviceName, tab) {
    const serviceData = knowledgeBase[category].services[serviceName];
    tabContent.innerHTML = '';

    let contentHtml = '';

    if (tab === 'tentang') {
        // Combined content for "Info Layanan"
        contentHtml = `
            <div class="info-layanan-content space-y-4 p-4">
                <div class="content-section">
                    <h4 class="text-lg font-semibold text-[#1f2937] mb-2"><i class="fas fa-book mr-2"></i> Definisi</h4>
                    <p class="text-gray-700 text-sm leading-relaxed">${serviceData.definisi}</p>
                </div>
                <div class="content-section">
                    <h4 class="text-lg font-semibold text-[#1f2937] mb-2"><i class="fas fa-lightbulb mr-2"></i> Pentingnya</h4>
                    <p class="text-gray-700 text-sm leading-relaxed">${serviceData.pentingnya}</p>
                </div>
                <div class="content-section">
                    <h4 class="text-lg font-semibold text-[#1f2937] mb-2"><i class="fas fa-handshake mr-2"></i> Peran UrusLegal</h4>
                    <p class="text-gray-700 text-sm leading-relaxed">${serviceData.peran}</p>
                </div>
                <div class="content-section">
                    <h4 class="text-lg font-semibold text-[#1f2937] mb-2"><i class="fas fa-gift mr-2"></i> Yang Klien Dapatkan</h4>
                    <p class="text-gray-700 text-sm leading-relaxed">${Array.isArray(serviceData.yangDidapat)
                        ? serviceData.yangDidapat.map(item => `✔️ ${item}`).join('<br>')
                        : serviceData.yangDidapat}</p>
                </div>
                ${serviceData.catatan ? `
                <div class="content-section">
                    <h4 class="text-lg font-semibold text-[#1f2937] mb-2"><i class="fas fa-exclamation-triangle mr-2"></i> Catatan Penting</h4>
                    <p class="text-red-500 text-sm leading-relaxed">${serviceData.catatan}</p>
                </div>
                ` : ''}
            </div>
            <div class="flex flex-wrap gap-4 mt-8 px-4 pb-4">
                <a href="https://solusi.uruslegal.id" target="_blank" class="bg-[#1ab69d] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#159c85] transition-all duration-300 transform hover:scale-105 flex items-center">
                    Ajukan Proses <i class="fas fa-arrow-right ml-2"></i>
                </a>
                <button id="tanya-whatsapp-btn" class="bg-[#31b978] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#299a62] transition-all duration-300 transform hover:scale-105 flex items-center">
                    Tanya <i class="fab fa-whatsapp ml-2"></i>
                </button>
            </div>
        `;
    } else if (tab === 'proses') {
        contentHtml = `
            <div class="proses-content space-y-4 p-4">
                <div class="content-section">
                    <h4 class="text-lg font-semibold text-[#1f2937] mb-2"><i class="fas fa-list-ol mr-2"></i> Proses</h4>
                    <div class="space-y-4 mb-6 text-sm">
                        ${serviceData.proses.map((step, index) => `
                            <div class="process-step-box">
                                <div class="process-step-number">${index + 1}</div>
                                <div class="text-gray-700 flex-1">${step}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="content-section">
                    <h4 class="text-lg font-semibold text-[#1f2937] mb-2"><i class="fas fa-file-alt mr-2"></i> Cara Pengajuan</h4>
                    <p class="text-gray-700 text-sm leading-relaxed">${serviceData.caraAjuan}</p>
                </div>
                <div class="content-section">
                    <h4 class="text-lg font-semibold text-[#1f2937] mb-2"><i class="fas fa-clock mr-2"></i> Estimasi Waktu Pengerjaan</h4>
                    <p class="text-gray-700 text-sm leading-relaxed">${serviceData.timeline}</p>
                </div>
            </div>
        `;
    } else if (tab === 'analisis') {
        const biayaJasaFormatted = formatRupiah(serviceData.biayaJasa);

        contentHtml = `
            <div class="analisis-content p-4">
                <h4 class="font-semibold text-xl mb-4 text-[#1f2937]">Analisis Atribut Layanan</h4>
                <p class="text-sm text-gray-600 mb-6">Grafik ini memvisualisasikan atribut layanan. Nilai yang lebih tinggi berarti lebih cepat, lebih kompleks, atau lebih mahal (skala 1-10).</p>
                <div class="chart-container">
                    <canvas id="serviceChart"></canvas>
                </div>
                <div id="chart-summary" class="mt-4 p-4 rounded-lg text-gray-700 text-sm card-modern">
                    <p class="font-semibold mb-2">Detail Atribut Layanan:</p>
                    <p><strong>Kecepatan:</strong> ${serviceData.timeline}</p>
                    <p><strong>Kompleksitas:</strong> ${serviceData.metrics.Kompleksitas}/10</p>
                    <p><strong>Biaya UrusLegal:</strong> ${formatRupiah(serviceData.biayaJasa)}</p>
                    <p><strong>Biaya Layanan Pemerintah seperti SPS, PNBP atau Retribusi:</strong> ** </p> <br><i> ** Jika ada dan biayanya harus di cek ke instansi terkait</i></p>
                </div>
            </div>
        `;
    }

    tabContent.innerHTML = contentHtml;

    // Attach event listener for WhatsApp button if it exists within the rendered tab content
    if (tab === 'tentang') {
        setTimeout(() => { // Use setTimeout to ensure the button is in DOM
            const tanyaWhatsappBtn = document.getElementById('tanya-whatsapp-btn');
            if (tanyaWhatsappBtn) {
                tanyaWhatsappBtn.addEventListener('click', () => {
                    const whatsappMessage = `Halo UrusLegal, saya ingin bertanya lebih lanjut tentang layanan "${serviceName}" di kategori "${category}". Bisakah Anda membantu saya?`;
                    const whatsappUrl = `https://wa.me/6281142677700?text=${encodeURIComponent(whatsappMessage)}`;
                    window.open(whatsappUrl, '_blank');
                });
            }
        }, 0);
    }

    if (tab === 'analisis') {
        createOrUpdateChart(category, serviceName, serviceData.metrics);
    }
}


function createOrUpdateChart(currentCategory, currentService, metricsData) {
    const ctx = document.getElementById('serviceChart').getContext('2d');
    const labels = Object.keys(metricsData);
    const dataValues = Object.values(metricsData);
    const serviceData = knowledgeBase[currentCategory].services[currentService];

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Skor',
                data: dataValues,
                backgroundColor: [
                    'rgba(26, 182, 157, 0.7)', // Primary color for Kecepatan
                    'rgba(75, 85, 99, 0.7)',  // Gray-600 for Kompleksitas
                    'rgba(245, 158, 11, 0.7)'  // Amber-500 for Biaya
                ],
                borderColor: [
                    'rgba(26, 182, 157, 1)',
                    'rgba(75, 85, 99, 1)',
                    'rgba(245, 158, 11, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            customProps: {
                currentCategory: currentCategory,
                currentService: currentService
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 10,
                    ticks: {
                        stepSize: 1,
                        font: {
                            family: 'Poppins'
                        }
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 14,
                            weight: '500',
                            color: '#1f2937' // Dark text for y-axis labels
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const metricName = context.label;
                            const currentServiceData = context.chart.options.customProps ?
                                knowledgeBase[context.chart.options.customProps.currentCategory].services[context.chart.options.customProps.currentService] :
                                null;

                            if (currentServiceData) {
                                if (metricName === 'Kecepatan') {
                                    return `Lama Proses: ${currentServiceData.timeline}`;
                                } else if (metricName === 'Biaya') {
                                    return `Biaya UrusLegal: ${formatRupiah(currentServiceData.biayaJasa)}`;
                                } else {
                                    return `Kompleksitas: ${context.parsed.x}/10`;
                                }
                            }
                            return `${metricName}: ${context.parsed.x}`;
                        },
                        title: function(context) {
                            return context[0].label;
                        }
                    },
                    bodyFont: {
                        family: 'Poppins'
                    },
                    titleFont: {
                        family: 'Poppins'
                    }
                }
            }
        }
    });

    const chartSummaryDiv = document.getElementById('chart-summary');
    if (chartSummaryDiv) {
        chartSummaryDiv.innerHTML = `
            <p class="font-semibold mb-2">Detail Atribut Layanan:</p>
            <p><strong>Kecepatan:</strong> ${serviceData.timeline}</p>
            <p><strong>Kompleksitas:</strong> ${serviceData.metrics.Kompleksitas}/10</p>
            <p><strong>Biaya UrusLegal:</strong> ${formatRupiah(serviceData.biayaJasa)}</p>
            <p><strong>Biaya Layanan Pemerintah seperti SPS, PNBP atau Retribusi:</strong> ** </p> <br><i> ** Jika ada dan biayanya harus di cek ke instansi terkait</i></p>
        `;
    }
}

function filterContent(searchTerm) {
    const allCategoryCards = document.querySelectorAll('#category-grid .category-card');
    const allSidebarLinks = document.querySelectorAll('.sidebar-link');
    const allSubServiceItems = document.querySelectorAll('.sub-service-item');

    let anyMatchFound = false;

    allCategoryCards.forEach(card => {
        const categoryName = card.dataset.category;
        const categoryData = knowledgeBase[categoryName];
        if (!categoryData) {
            card.style.display = 'none';
            return;
        }

        let cardMatches = categoryName.toLowerCase().includes(searchTerm);

        if (!cardMatches) {
            for (const serviceName in categoryData.services) {
                const service = categoryData.services[serviceName];
                const serviceText = serviceName.toLowerCase() +
                                    service.definisi.toLowerCase() +
                                    service.pentingnya.toLowerCase() +
                                    service.peran.toLowerCase() +
                                    (Array.isArray(service.proses) ? service.proses.map(step => step.toLowerCase()).join(' ') : '') +
                                    (Array.isArray(service.yangDidapat) ? service.yangDidapat.map(item => item.toLowerCase()).join(' ') : service.yangDidapat.toLowerCase()) +
                                    service.caraAjuan.toLowerCase();
                if (serviceText.includes(searchTerm)) {
                    cardMatches = true;
                    break;
                }
            }
        }

        if (searchTerm === '') {
            card.style.display = 'flex';
        } else if (cardMatches) {
            card.style.display = 'flex';
            anyMatchFound = true;
        } else {
            card.style.display = 'none';
        }
    });

    allSidebarLinks.forEach(link => {
        const categoryName = link.dataset.category;
        const categoryData = knowledgeBase[categoryName];
        if (!categoryData) {
            link.style.display = 'none';
            return;
        }

        let linkMatches = categoryName.toLowerCase().includes(searchTerm);

        if (!linkMatches) {
            for (const serviceName in categoryData.services) {
                const service = categoryData.services[serviceName];
                const serviceText = serviceName.toLowerCase() +
                                    service.definisi.toLowerCase() +
                                    service.pentingnya.toLowerCase() +
                                    service.peran.toLowerCase() +
                                    (Array.isArray(service.proses) ? service.proses.map(step => step.toLowerCase()).join(' ') : '') +
                                    (Array.isArray(service.yangDidapat) ? service.yangDidapat.map(item => item.toLowerCase()).join(' ') : service.yangDidapat.toLowerCase()) +
                                    service.caraAjuan.toLowerCase();
                if (serviceText.includes(searchTerm)) {
                    linkMatches = true;
                    break;
                }
            }
        }

        if (searchTerm === '') {
            link.style.display = 'flex';
        } else if (linkMatches) {
            link.style.display = 'flex';
            anyMatchFound = true;
        } else {
            link.style.display = 'none';
        }
    });

    if (searchTerm === '') {
        welcomeScreen.classList.remove('hidden');
        serviceDetailScreen.classList.add('hidden');
        document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
        document.querySelectorAll('.sub-service-item').forEach(link => link.classList.remove('active'));
        activeSidebarCategory = null;
        activeSubServiceLink = null;
        currentCategoryName = null; // Reset current category
        if (mobileCategoryBreadcrumb) mobileCategoryBreadcrumb.classList.add('hidden');
        if (desktopBreadcrumb) desktopBreadcrumb.classList.add('hidden'); // Hide desktop breadcrumb
    } else {
        welcomeScreen.classList.add('hidden');
        serviceDetailScreen.classList.remove('hidden');
        if (!activeSubServiceLink || !anyMatchFound) {
             serviceTitle.textContent = 'Hasil Pencarian';
             serviceTabs.innerHTML = '';
             tabContent.innerHTML = '<p class="text-gray-600 mt-4">Pilih layanan dari Kategori Bidang untuk melihat detail.</p>';
             subServiceList.innerHTML = '';
        }
        if (window.innerWidth < 768) {
            if (mobileCategoryBreadcrumb) {
                mobileCategoryBreadcrumb.classList.remove('hidden');
            }
        } else {
            if (desktopBreadcrumb) desktopBreadcrumb.classList.remove('hidden'); // Show desktop breadcrumb
        }
    }

    sidebar.classList.add('-translate-x-full');
}

openSidebarBtn.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
});

closeSidebarBtn.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
});

document.addEventListener('DOMContentLoaded', initApp);
