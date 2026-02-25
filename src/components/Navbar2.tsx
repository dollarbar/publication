import { NavLink } from 'react-router-dom';




export function Navbar() {
  return (
    <nav className="w-full bg-black text-white py-4 px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">☦</span>
          <span className="tracking-wider" style={{ fontFamily: 'Cinzel, serif', fontSize: '1.25rem', fontWeight: 600 }}>
            ANDREY RUBLEV PUBLICATIONS
          </span>
        </div>

        
        
        <div className="flex gap-8" style={{ fontFamily: 'Cinzel, serif', fontSize: '0.875rem' }}>
          <NavLink 
            to="/"
            className="hover:text-gray-300 transition-colors tracking-wide"
          >
            Home
          </NavLink>
          <NavLink
            to='/articles' 
            className="hover:text-gray-300 transition-colors tracking-wide"
          >
            ARTICLES
          </NavLink>
          <NavLink
            to='/archives'
            className="hover:text-gray-300 transition-colors tracking-wide"
          >
            ARCHIVES
          </NavLink>
          <NavLink
            to='/about'
            className="hover:text-gray-300 transition-colors tracking-wide"
          >
            ABOUT
          </NavLink>
        </div>
        
      </div>
    </nav>
  );
}