import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaRegCommentDots } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
    ];

    return (
        <nav className="sticky-top" style={{
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 2rem',
            zIndex: 1050,
            background: 'var(--navbar-bg)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: 'none',
            boxShadow: 'none',
            width: '100%'
        }}>


            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="d-none d-md-flex gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link-custom py-2 px-3 rounded-pill text-decoration-none"
                            style={{
                                color: 'var(--text-main)',
                                fontWeight: 500,
                                transition: 'var(--transition-smooth)'
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="d-flex align-items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="btn rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                            width: '40px',
                            height: '40px',
                            background: 'var(--glass-button-bg)',
                            color: 'var(--primary-color)',
                            border: '1px solid var(--glass-border)',
                            backdropFilter: 'blur(4px)'
                        }}
                    >
                        {theme === 'light' ? <FaMoon /> : <FaSun />}
                    </button>

                    <a
                        id="notify-trigger"
                        className="btn-primary-custom d-none d-sm-flex align-items-center gap-2 text-decoration-none"
                        href="mailto:dalelanto.work@gmail.com?subject=Message%20from%20your%20site"
                    >
                        <span>Let's Talk</span>
                        <FaRegCommentDots />
                    </a>

                    <button
                        className="btn d-md-none text-main"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <FaBars style={{ color: 'var(--text-main)' }} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="position-absolute top-100 start-0 w-100 p-4 d-md-none" style={{
                    background: 'var(--navbar-bg)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)'
                }}>

                    <div className="d-flex flex-column gap-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-decoration-none"
                                style={{ color: 'var(--text-main)', fontWeight: 500 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
