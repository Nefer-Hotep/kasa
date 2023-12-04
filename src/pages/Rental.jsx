// import ErrorPage from './ErrorPage';
// import { useLocation } from 'react-router-dom';

function Rental() {
  const data = location.state?.data;
  console.log(data);

  return <>
  <h1>Yooo</h1>
  {/* {!data ? <ErrorPage /> : <div>{data.id}</div>} */}
  </>;
}

export default Rental;
