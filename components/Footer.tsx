import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='footer'>
      <div className=" footer__links-container">
        <div className=" footer__rights">
          <Image 
            src='/logo.svg'
            alt='logo'
            width={118}
            height={18}
            className='object-contain'
          />
          <p className=" text-base text-gray-700 ">
            CarHub {new Date().getFullYear()} <br /> All rights reserved &copy;
          </p>
        </div>

        <div className=" footer__links">
          {footerLinks.map((link) => (
            <div className="footer__link" key={link.title}>
              <h3 className=" font-bold">
                {link.title}
              </h3>

              {link.links.map((item) => (
                <Link key={item.title} href={item.url} className='text-gray-500'>
                  {item.title}
                </Link>
              ) )}
            </div>
          ))}
        </div>
      </div>

      <div className="footer__copyrights">
        <p>
          @{new Date().getFullYear()} CarHub. All Rights Reserved
        </p>
        <div className="footer__copyrights-link">
          <Link href='/' className='text-gray-500'>
            Privacy Policy
          </Link>
          <Link href='/' className='text-gray-500'>
            Terms of use
          </Link>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer