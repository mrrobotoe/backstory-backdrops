import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@uidotdev/usehooks';
import React from 'react';

export const Navigation = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');

  return (
    <>
      <a className='skip-link' href='content'>
        Skip to main content
      </a>
      {isSmallDevice ? <MobileNavigation /> : <DesktopNavigation />}
    </>
  );
};

const DesktopNavigation = () => {
  return (
    <nav className='main-nav'>
      <NavLink
        to='/'
        className={({ isActive }) =>
          [isActive ? 'nav-active' : '', 'nav-home'].join(' ')
        }
      >
        <span className='first-b'>B</span>
        <span className='second-b'>B</span>
      </NavLink>
      <div className='nav-pages'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            [isActive ? 'nav-active' : '', 'nav-menu'].join(' ')
          }
        >
          Home
        </NavLink>
        <NavLink
          to='balloons'
          className={({ isActive }) =>
            [isActive ? 'nav-active' : '', 'nav-menu'].join(' ')
          }
        >
          Balloons
        </NavLink>
        <NavLink
          to='rental'
          className={({ isActive }) =>
            [isActive ? 'nav-active' : '', 'nav-menu'].join(' ')
          }
        >
          Rental
        </NavLink>
        <NavLink
          to='drop-shop'
          className={({ isActive }) =>
            [isActive ? 'nav-active' : '', 'nav-menu'].join(' ')
          }
        >
          Drop Shop
        </NavLink>
        <NavLink
          to='find-vendor'
          className={({ isActive }) =>
            [isActive ? 'nav-active' : '', 'nav-menu'].join(' ')
          }
        >
          Find Vendor
        </NavLink>
        <NavLink
          to='faq'
          className={({ isActive }) =>
            [isActive ? 'nav-active' : '', 'nav-menu'].join(' ')
          }
        >
          FAQ
        </NavLink>
        <NavLink
          to='contact-us'
          className={({ isActive }) =>
            [isActive ? 'nav-active' : '', 'nav-menu'].join(' ')
          }
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

const MobileNavigation = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <div className='mobile-nav'>
        <NavLink
          onClick={() => setOpenMenu(false)}
          to='/'
          className={({ isActive }) =>
          [isActive ? 'nav-active' : '', 'nav-home'].join(' ')
        }
        >
          <span className='first-b'>B</span>
          <span className='second-b'>B</span>
        </NavLink>
        <button onClick={handleClick} className={"nav-menu-button"}>
          {!openMenu ? (<i className="fa-solid fa-bars"></i>) : (<i className="fa-regular fa-xmark"></i>)}
        </button>
      </div>
      <nav className={["nav-menu-pages", !openMenu ? "hide" : ""].join(" ")}>
      <NavLink
        onClick={() => setOpenMenu(false)}
          to='/'
          className={({ isActive }) =>
            [isActive ? 'nav-active' : '', 'nav-menu'].join(' ')
          }
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setOpenMenu(false)}
          to='balloons'
          className={({ isActive }) =>
            [isActive ? 'nav-active' : '', 'nav-menu'].join(' ')
          }
        >
          Balloons
        </NavLink>
        <NavLink
          onClick={() => setOpenMenu(false)}
          to='rental'
          className={({ isActive }) =>
            [isActive ? 'nav-active' : '', 'nav-menu'].join(' ')
          }
        >
          Rental
        </NavLink>
        <NavLink
          onClick={() => setOpenMenu(false)}
          to='drop-shop'
          className={({ isActive }) =>
            [isActive ? 'nav-active' : '', 'nav-menu'].join(' ')
          }
        >
          Drop Shop
        </NavLink>
        <NavLink
          onClick={() => setOpenMenu(false)}
          to='find-vendor'
          className={({ isActive }) =>
            [isActive ? 'nav-active' : '', 'nav-menu'].join(' ')
          }
        >
          Find Vendor
        </NavLink>
        <NavLink
          onClick={() => setOpenMenu(false)}
          to='faq'
          className={({ isActive }) =>
            [isActive ? 'nav-active' : '', 'nav-menu'].join(' ')
          }
        >
          FAQ
        </NavLink>
        <NavLink
          onClick={() => setOpenMenu(false)}
          to='contact-us'
          className={({ isActive }) =>
            [isActive ? 'nav-active' : '', 'nav-menu'].join(' ')
          }
        >
          Contact Us
        </NavLink>
      </nav>
    </>
  );
};
