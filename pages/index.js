import Menu from '../components/menu';
import Layout from '../layout/layout';
import Header from '../components/header';

function Home (){
   return (
     <Layout>
       <Menu />
       <Header />
       <div className="container">
    <h1 className="my-4">Welcome to SMP Muhammadiyah 7 Sempu</h1>

    <div className="row">
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">PPDB 2020-2021</h4>
          <div className="card-body">
            <p className="card-text">Setelah Mengisi Formulir Pendaftaran ini harap konfirmasi melalui SMS/WhatsApp di nomor yang tercantum dibawah deskripsi ini.</p>
          </div>
          <div className="card-footer">
            <a href="/berita" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">Extrakulikuler</h4>
          <div className="card-body">
            <p className="card-text">Di SMP Muhammadiyah terbentuk beberapa Extrakulikuler yang dapat membuat seorang siswa menjadi siswa yang berilmu dan berakal</p>
          </div>
          <div className="card-footer">
            <a href="/eskul" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">Kontak</h4>
          <div className="card-body">
            <p className="card-text">Jika ingin membuat janji temu bisa menghubungi disini</p>
          </div>
          <div className="card-footer">
            <a href="/kontak" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
    </div>
     </Layout>
   );
   
}

export default Home ;