import { FaHome } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-6xl font-bold mb-8'>Oulalaaa!</h1>
          <p className='text-2xl mb-8'>404 - Page Not Found!</p>
          <Link className='btn btn-primary btn-md' to='/'>
            <FaHome className='mr-2' />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
