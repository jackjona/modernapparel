import Navbar from "./Navbar";
import Footer from "./Footer";
import Announcement from "./Announcement";

export default function Layout({ children }) {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <Announcement/>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}