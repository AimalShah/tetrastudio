import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

function Socials({size}) {
  return (
    <div className='flex items-center justify-center gap-6'>
      <FontAwesomeIcon icon={faInstagram}  
      style={{
        height : `${size}px` ,
        width : `${size}px`
      }}
      className='s text-accent  hover:text-primary'/>
      <FontAwesomeIcon icon={faFacebook}  
      style={{
        height : `${size}px` ,
        width : `${size}px`
      }}
      className=' text-accent hover:text-primary' />
      <FontAwesomeIcon icon={faTwitter}  
      style={{
        height : `${size}px` ,
        width : `${size}px`
      }}
      className='text-accent  hover:text-primary'/>
      <FontAwesomeIcon icon={faYoutube}  
      style={{
        height : `${size}px` ,
        width : `${size}px`
      }}
      className='text-accent hover:text-primary' />
    </div>
  )
}

export default Socials
