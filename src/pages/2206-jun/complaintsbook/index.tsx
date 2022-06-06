import './complaintsbooks.scss';
import FormComplaintsBook from './components/FormComplaintsBook';

const ComplaintsBook = () => {

  return(
    <div className='main--container--complaintsbook'>
      <div className="main-title">
        <h1>Libro de Reclamaciones</h1>
      </div>
      <FormComplaintsBook />
    </div>
  );
}

export default ComplaintsBook;