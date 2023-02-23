import loading from '../spinner.gif';

const Spinner = () => {
  return (
    <div className='text-center my-5'>
      <img className='my-3' src={loading} alt="loading"></img>
    </div>
  )
}

export default Spinner;
