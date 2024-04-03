import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'

function Socials() {
  return (
    <div className='flex items-center justify-center gap-6'>
      <FontAwesomeIcon icon={faSquareInstagram}  className='size-8 text-gray-600  hover:text-accent'/>
      <FontAwesomeIcon icon={faSquareFacebook}  className='size-8 text-gray-600 hover:text-accent' />
      <FontAwesomeIcon icon={faSquareTwitter}  className='size-8 text-gray-600  hover:text-accent'/>
      <FontAwesomeIcon icon={faTiktok}  className='size-8 text-gray-600 hover:text-accent' />
    </div>
  )
}

export default Socials
