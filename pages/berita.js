import Menu from '../components/menu';
import Layout from '../layout/layout';

function Berita (){
    return (
        <Layout>
        <Menu />

        <div className="container">
            <h1 className="mt-4 mb-3">Berita</h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/">SMP Mutu</a>
                    </li>
                    <li className="breadcrumb-item active">Berita</li>
                </ol>

            <div className="row">
                <div className="col-lg-6">
                    <img src="images/ppdb.jpg" className="img-fluid rounded mb-4" alt="" />
                </div>
                <div className="col-lg-6">
                    <h2>PENERIMAAN PESERTA DIDIK BARU 2020-2021</h2>
                    <p>Selamat Datang di Formulir Pendaftaran Secara Online Calon Peserta Didik Baru SMP Muhammadiyah 7 Sempu Tahun Pelajaran 2020 - 2021.</p>
                    <p>Kabar gembira bagi Pendaftar Siswa Baru di SMP MUTU Tahun Pelajaran 2020 - 2021 mendapatkan Gratis Kain Seragam 3 Stel dan 1 Stel Kostum Olah Raga.</p>
                    <p>Setelah Mengisi Formulir Pendaftaran ini harap konfirmasi melalui SMS/WhatsApp di nomor yang tercantum dibawah deskripsi ini.</p>
                    <p>Atau bisa datang kesekolah membawa berkas pendaftaran, antara lain :
                    <br />
                    1. FC Akta Kelahiran
                    <br />
                    2. FC Kartu Keluarga
                    <br />
                    3. Pas Photo 3 x 4 Sebanyak 3 Lembar
                    <br />
                    4. FC Ijazah SD/MI ( Menyusul )
                    <br />
                    5. FC SHUN SD/MI ( Menyusul ) 
                    <br />
                    Atau bisa konfirmasi melalui SMS/WA dan kami akan datang kerumah anda.
                    </p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-lg-6">
                    <img src="images/ldk.jpg" className="img-fluid rounded mb-4" alt="" />
                </div>
                <div className="col-lg-6">
                    <h1>KEGIATAN LATIHAN DASAR KEPEMIMPINAN</h1>
                    <h4>Di RTH Sempu</h4>
                    <p>Latihan Dasar Kepemimpinan (LDK) merupakan bentuk program pengembangan dengan tujuan memberikan pembekalan kepada para siswa dalam bidang semangat jiwa kebangsaan dan nasionalisme serta mempersiapkan para siswa menjadi pemimpin yang memiliki keterampilan memimpin dan memiliki passion. Selain itu bertujuan pula untuk membangun kemandirian, rasa percaya diri, tanggung jawab, disiplin, serta menghormati orang lain. Harapannya kegiatan ini memberikan dampak positif terhadap sikap, perilaku, dan karakter siswa dalam hal semangat kebangsaan dan nasionalisme karena para siswa ini adalah generasi muda penerus bangsa yang ada di garis depan untuk membangun bangsa.</p>
                    <p>Oleh karena itu, program LDK bagi siswa SMP sangat penting karena remaja di usia ini adalah kelompok remaja yang sedang membangun jati dirinya. Nilai-nilai yang ditanamkan selama pelatihan tentunya nilai-nilai dasar positif seperti disiplin, tanggung jawab, dsb, akan lebih mudah tertanam dalam diri mereka karena pada masa tersebut mereka sedang berada dalam periode mencari-cari model yang akan mereka contoh. Itulah sebabnya SMP Muhammadiyah 7 Sempu melaksanakan program pelatihan ini sebagai program tahunan bagi  kelas XI dan tahun ini SMP Muhammadiyah 7 Sempu melanjutkan kerjasama dengan KODIM Sempu.</p>
                    <p>Kegiatan LDK ini  berlangsung selama 3 (tiga) pada tanggal 2-4 April 2019 di RTH Sempu. Para siswa bersemangat mengikuti acara LDK ini karena latihan fisik seperti lari, push-up, rolling dan kegiatan outbond lainnya karena kegiatan yang menyenangkan bagi siswa laki-laki ini. Setelah dari LDK yang melatih fisik dan mental siswa, kemudian para siswa diajak untuk melatih olah rasa di RTH Sempu.
                    </p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-lg-6">
                    <img src="images/gandrung.jpg" className="img-fluid rounded mb-4" alt="" />
                </div>
                <div className="col-lg-6">
                    <h1>Seleksi Tari Gandrung</h1>
                    <p>Dinas Pariwisata dan Kebudayaan Kabupaten Banyuwangi mulai melakukan seleksi tari Gandrung Sewu, yang akan diikut sertakan dalam Festival Gandrung Sewu pada 12 Oktober 2019. Bertempat di Ruang Terbuka Hijau (RTH) Maroon, Kecamatan Genteng, Kamis (1/8/2019) siang.</p>
                    <p>Ratusan pelajar SD hingga Pelajar SMA tampak bersemangat mengikuti seleksi tersebut. Mereka datang ke RTH Maroon sambil perlengkapan menari seperti selendang (Sampit) dan kipas untuk mengikuti seleksi sambil didampingi gurunya.</p>
                    <p>Seleksi peserta festival Gandrung Sewu bertempat di RTH Maroon juga menjadi tontonan masyarakat Genteng. Mereka tampak berbondong-bondong menyaksikan pelajar menari gandrung dengan luwes dan enerjik.</p>
                </div>
            </div>
        </div>

        </Layout>
    );
}

export default Berita ;