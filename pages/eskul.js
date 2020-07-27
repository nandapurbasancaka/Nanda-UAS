import Menu from '../components/menu';
import Layout from '../layout/layout';

function Eskul (){
    return (
        <Layout>
        <Menu />

        <div className="container">
            <h1 className="mt-4 mb-3">Extrakulikuler</h1>
                <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/">SMP Mutu</a>
                </li>
                <li className="breadcrumb-item active">Extrakulikuler</li>
                </ol>

            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-6">
                    <img className="card-img-top" src="images/pramuka.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h2 className="card-title">Pramuka</h2>
                        <p>Ekstrakurikuler pramuka telah menjadi ekstrakurikuler wajib yang harus diikuti oleh semua siswa di berbagai tingkat sekolah termasuk SMP di Indonesia. Kegiatan kepramukaan di sekolah diatur dalam PERMENDIKBUD No. 63 Tahun 2014 tentang Kepramukaan. Selain itu, kegiatan kepramukaan di sekolah memiliki tujuan untuk mengembangkan nilai-nilaikarakter siswa, seperti nilai kebersamaan, kepemimpinan, kecintaan alam, sosial, dan juga kemandirian.</p>
                        <p>
                        Manfaat ikut pramuka :
                        <br />
                        1. Membiasakan diri untuk disiplin
                        <br />
                        2. Memupuk semangat gotong royong dan kebersamaan
                        <br />
                        3. Membiasakan diri untuk lebih mandiri
                        <br />
                        4. Mengembangkan karakter tidak mudah menyerah
                        <br />
                        5. Belajar untuk bertahan hidup
                        <br />
                        6. Memiliki kemampuan untuk berkomunikasi dengan baik</p>
                        <hr />
                    </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-6">
                    <img className="card-img-top" src="images/pmr.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h2 className="card-title">Palang Merah Remaja</h2>
                        <p>PMR menjadi salah satu kegiatan ekstrakulikuler di sekolah yang sangat bermanfaat untuk diikuti oleh para remaja. Sesuai dengan nama dan organisasi yang menaungi pembinaannya, PMR lebih fokus mengajarkan para remaja terkait kesehatan dan pengobatan. Biasanya PMI menjadi ekskul favorit bagi para remaja yang bercita-cita menjadi dokter, bidan, perawat atau yang berhubungan dengan kesehatan dan pengobatan.</p>
                        <p>
                        Ekskul PMR juga mengajarkan baris-berbaris, pengenalan medan di alam bebas, latihan halang rintang, organisasi dan penanganan bencana, memasak di dapur umum, kerjasama tim, mendirikan tenda, membuat tandu bahkan pelajaran menulis untuk majalah dinding dan seni budaya juga menjadi variasi materi yang diajarkan, serta banyak lagi kegiatan-kegiatan yang menarik lainnya. Tak jarang para anggota PMR saling belajar untuk memahami pelajaran di sekolah. PMR Senior yang mempunya kelebihan pada mata pelajaran tertentu seperti eksakta akan membimbing teman lainnya termasuk adik-adik kelas yang kesulitan dalam memahami suatu pelajaran.
                        Yang paling mengasyikkan dan paling ditunggu-tunggu para anggota PMR adalah praktek lapangan dimana masing-masing tim yang terdiri dari 6 orang saling bekerja sama dalam menghadapi suatu simulai penanganan bencana dan evakuasi. Meskipun setiap anggota tim memiliki pengetahuan dan keterampilan yang relatif sama, namun mereka masing-masing memiliki tanggung jawab sesuai dengan apa yang paling menonjol dikuasai dan disenangi. Ada yang bertugas membuat tandu untuk mengangkut pasien yang dirakit dari bambu dan tali, ada yang bertugas menangani pasien sesuai dengan kasus yang diberikan seperti patah tulang, luka bakar, shock, perdarahan dan sebagainya, ada yang bertugas menjadi pencari dan pembuka jalan dalam rangka evakuasi.</p>
                        <hr />
                    </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-6">
                    <img className="card-img-top" src="images/tari.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h2 className="card-title">Tari Tradisional</h2>
                        <p>Kegiatan ekstrakurikuler dapat membantu berbagai pengembangan peserta didik baik minat, bakat, serta potensi yang dimiliki. Zaman era modern seperti ini kegiatan ekstrakurikuler masih selalu menjadi prioritas pertama diluar jam sekolah, ada beberapa ekstrakurikuler yang disediakan di SMP Muhammadiyah 7 Sempu salah satunya adalah ekstra tari yang sangat digandrungi para peserta didik perempuan.</p>
                        <p>
                        Ekstrakurikuler tari bertujuan untuk memberi kesempatan kepada peserta didik untuk berekspresi, berapresiasi, berkreasi, membentuk harmoni, dan menciptakan keindahan. Dengan demikian, mereka dapat membekali diri dengan pengetahuan, keterampilan, dan perilaku yang baik.</p>
                        <p>
                        Ektrakurikuler tari diharapkan mampu mengakomodir keberagaman masing-masing individu peserta didik maupun keragamaan budaya masing-masing daerah, serta budaya nasional dalam rangka menyikapi arus globalisasi. Berbagai macam tarian diajarkan kepada seluruh peserta didik yang mengikuti ekstrakurikuler, mulai dari tarian tradisional, tari daerah bahkan tarian modern. Kegiatan ini juga dapat menumbuhkan sikap toleransi sesama siswa dan dapat memberikan pengalaman serta kepedulian peserta didik akan keberagaman kultur.</p>
                        <hr />
                    </div>
                    </div>
                </div>
            </div>

        </div>


        </Layout>

    );
}

export default Eskul;