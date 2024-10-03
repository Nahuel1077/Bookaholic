import Link from 'next/link';

export default function Nav(){
    
    
    return(
        <nav className="nav nav-responsive">
            <div>
                <img src="/images/logo-nav.svg" id="nav-logo"/>
            </div>
            <div className="nav-list">
                <ul>
                    <li>
                        <Link href="/products" className="link">Products</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}