import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-base-200 px-4'>
      <div className='text-center'>
        <h1 className='text-9xl font-bold text-primary'>404</h1>
        <p className='text-xl mt-4 text-base-content'>Oops! Page not found.</p>
        <div className='mt-6'>
          <Link to='/' className='btn btn-primary'>
            ⬅ Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
