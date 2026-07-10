import {useEffect} from 'react';
import {createPortal} from 'react-dom';
import {X} from 'lucide-react';
import {Link, useLocation} from 'react-router-dom';

const navItems = [
    {name: 'Home', path: '/'},
    {name: 'Projects', path: '/projects'},
    {name: 'Blogs', path: '/blogs'},
];

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({isOpen, onClose}: MobileMenuProps) {
    const {pathname} = useLocation();

    useEffect(() => { onClose(); }, [pathname]);

    if (!isOpen) return null;

    return createPortal(
        <>
            <div
                className="mobile-backdrop"
                onClick={onClose}
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                    zIndex: 9998,
                }}
            />
            <div
                className="mobile-sidebar"
                style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '288px',
                    zIndex: 9999,
                    background: 'var(--panel)',
                    borderLeft: '1px solid var(--panel-border)',
                    padding: '24px',
                    boxShadow: '0 0 40px rgba(0,0,0,0.4)',
                }}
            >
                <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '32px'}}>
                    <button
                        onClick={onClose}
                        style={{
                            padding: '8px',
                            color: 'var(--text-muted)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                        aria-label="Close menu"
                    >
                        <X className="w-6 h-6"/>
                    </button>
                </div>

                <nav style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                    {navItems.map(item => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={onClose}
                            style={{
                                color: 'var(--text-muted)',
                                textDecoration: 'none',
                                fontSize: '18px',
                                fontFamily: "'IBM Plex Mono', monospace",
                            }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </>,
        document.body
    );
}
