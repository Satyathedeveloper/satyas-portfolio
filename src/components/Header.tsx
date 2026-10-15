import { useEffect, useState } from 'react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { profile } from '../data';

const links = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme ?? 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch { /* storage unavailable */ }
  }, [theme]);

  return (
    <header className="header">
      <div className="container header-in">
        <a className="wordmark" href="#top">{profile.name}</a>
        <nav id="nav" aria-label="Primary" className={open ? 'nav open' : 'nav'}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a className="btn btn-sm" href={profile.resume} download><Download size={16} aria-hidden /> Resume</a>
        </nav>
        <div className="header-tools">
          <button className="icon-btn" aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
          </button>
          <button className="icon-btn menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>
    </header>
  );
}
