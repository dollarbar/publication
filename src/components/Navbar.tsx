import { NavLink } from 'react-router-dom';
import MainSeal from './MainSeal';



export function Navbar() {
  return (
    <nav className="w-full bg-black text-white py-2 px-8 border-b border-[#8b0000]/40">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <MainSeal size="w-20 h-20" color="red"/>
          </div>
          <span className="tracking-wider nav-link-gradient" style={{ fontFamily: 'Cinzel, serif', fontSize: '1.25rem', fontWeight: 600 }}>
            ANDREY RUBLEV PUBLICATIONS
          </span>
        </div>

        
        
        <div className="flex gap-8" style={{ fontFamily: 'Cinzel, serif', fontSize: '0.875rem' }}>
          <NavLink
            to="/"
            className="tracking-wide transition-colors nav-link-gradient"
          >
            Home
          </NavLink>
          <NavLink
            to='/articles'
            className="tracking-wide transition-colors nav-link-gradient"
          >
            ARTICLES
          </NavLink>
          <NavLink
            to='/archives'
            className="tracking-wide transition-colors nav-link-gradient"
          >
            ARCHIVES
          </NavLink>
          <NavLink
            to='/about'
            className="tracking-wide transition-colors nav-link-gradient"
          >
            ABOUT
          </NavLink>
        </div>
        
      </div>
    </nav>
  );
}