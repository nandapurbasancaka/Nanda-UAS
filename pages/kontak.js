import Menu from '../components/menu';
import Layout from '../layout/layout';

function Kontak (){
    return (
        <Layout>
        <Menu />

        <div className="container">

            <h1 className="mt-4 mb-3">Kontak</h1>

            <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <a href="/">SMP Mutu</a>
            </li>
            <li className="breadcrumb-item active">Kontak</li>
            </ol>

            <div className="row">
            <div className="col-lg-6 mb-4">
                <h3>Detail Kontak</h3>
                <p>
                Jl. Kalisetail 205 Sempu
                <br />Kecamatan Sempu, Kabupaten Banyuwangi
                </p>
                <p>
                Telp: (0333) 846-927
                </p>
                <p>
                Email: smpmuhtujuhsempubanyuwangi@ymail.com
                </p>
                <p>
                Jam Operasional: Senin - Jum'at: 9:00 s/d 15:00
                </p>
            </div>
            </div>

            </div>

        </Layout>
    );
}

export default Kontak;