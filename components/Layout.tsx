import Navbar from './Nav'
import Footer from './Footer'

export default function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}