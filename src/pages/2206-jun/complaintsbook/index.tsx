import './complaintsbooks.scss';
import FormComplaintsBook from './components/FormComplaintsBook';

const ComplaintsBook = () => {

  return(
    <div className='main--container--complaintsbook'>
      <div className="main-title">
        <h1>Libro de Reclamaciones</h1>
        <div className="title-info">
          <p>SAMSUNG ELECTRONICS PERU SAC</p>
          <p>RUC-20300263578</p>
          <p>Av. Rivera Navarrete Nro. 501 (Piso 6), San Isidro, Lima, Perú</p>
        </div>
      </div>
      <FormComplaintsBook />
    </div>
  );
}

export default ComplaintsBook;