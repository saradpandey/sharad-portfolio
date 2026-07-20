import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');


  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);


      const sections = navLinks.map(link =>
        document.querySelector(link.href)
      );


      const scrollPosition = window.scrollY + 120;


      sections.forEach(section => {

        if(section){

          const top = section.offsetTop;
          const height = section.offsetHeight;


          if(
            scrollPosition >= top &&
            scrollPosition < top + height
          ){

            setActiveSection(section.id);

          }

        }

      });

    };


    window.addEventListener(
      'scroll',
      handleScroll
    );


    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );


  }, []);



  const handleMobileClick = (href) => {

    setMobileMenuOpen(false);


    setTimeout(() => {

      const section = document.querySelector(href);


      if(section){

        section.scrollIntoView({

          behavior: "smooth",

          block: "start"

        });

      }

    },100);

  };



  return (

    <motion.nav

      className={`navbar ${scrolled ? "scrolled" : ""}`}

      initial={{y:-100}}

      animate={{y:0}}

      transition={{
        duration:0.5
      }}

    >


      <div className="navbar-container">


        <a 
          href="#home"
          className="logo"
        >
          S.P
        </a>



        {/* Desktop Menu */}

        <div className="nav-links">

          {
            navLinks.map((link,index)=>(

              <motion.a

                key={link.name}

                href={link.href}

                className={
                  `nav-link ${
                    activeSection === link.href.slice(1)
                    ? "active"
                    : ""
                  }`
                }


                initial={{
                  opacity:0,
                  y:-20
                }}

                animate={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  delay:index*0.05
                }}

              >

                {link.name}

              </motion.a>

            ))
          }

        </div>





        <div className="nav-actions">


          <a

            href="#contact"

            className="btn-hire"

            onClick={()=>setMobileMenuOpen(false)}

          >

            Hire Me

          </a>




          <button

            className="mobile-toggle"

            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }

          >

            {
              mobileMenuOpen
              ?
              <HiX/>
              :
              <HiMenuAlt3/>
            }

          </button>



        </div>



      </div>






      {/* Mobile Menu */}

      <AnimatePresence>


        {
          mobileMenuOpen && (

            <motion.div

              className="mobile-menu"


              initial={{
                opacity:0,
                height:0
              }}


              animate={{
                opacity:1,
                height:"auto"
              }}


              exit={{
                opacity:0,
                height:0
              }}


            >


              {

                navLinks.map(link=>(


                  <a

                    key={link.name}

                    href={link.href}


                    className={
                      `mobile-nav-link ${
                        activeSection === link.href.slice(1)
                        ?
                        "active"
                        :
                        ""
                      }`
                    }


                    onClick={() =>
                      handleMobileClick(link.href)
                    }

                  >

                    {link.name}

                  </a>


                ))

              }



            </motion.div>


          )
        }


      </AnimatePresence>



    </motion.nav>


  );

}