import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Nav() {
    return (
        <nav>
            <Image
                src={'/../public/assets/logo.png'}
                alt="Accelo Logo"
                width={200}
                height={63}
                className='logo' />
            <div className='nav-links'>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/createLink'}><a>Create Link</a></Link>
            </div>
        </nav>
    )
}

export default Nav