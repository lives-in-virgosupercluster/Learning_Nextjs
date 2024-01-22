import Link from 'next/link';
import Image from 'next/image';

export const Header=()=>{
  return (  
  <header>
    <div>
    <div className='topNav'>
    <Image alt="logo" src={'/images/airplane.png'} width={500} height={500} className='logo'></Image>
    <nav>
     
    <ul>
      <li>
      <Link href='/'>Home</Link>
      </li>
      <li>
      <Link href='/events/'>Events</Link>
      </li>
      <li>

      </li>
      <li>
      <Link href='/about-us'>About Us</Link>
      </li>
    </ul>
      <img/>
      
      
      
    </nav>
    </div>
    <p className="title">Lorem ipsum dolor sit amet </p>

    </div>
    
  </header>
  )
}