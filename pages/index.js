import Head from 'next/head'

import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductGrid from "../components/ProductGrid"
import Banner from "../components/Banner"
import RightLeft1 from "../components/RightLeft1"
import LeftRight1 from "../components/LeftRight1"
import RightLeft2 from "../components/RightLeft2"
import Banner2 from "../components/Banner2"
import InfoBanner from "../components/InfoBanner"
import Footer from '../components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Modern Apparel</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="description" content="Modern Apparel - Revoutionizing The Way People Think About Apparel." />
        <meta property="og:title" content="Modern Apparel" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.modernapparel.ga" />
        <meta property="og:image" content="https://www.modernapparel.ga/share.png" />
        <meta property="og:description"
          content="Modern Apparel - Revoutionizing The Way People Think About Apparel." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Modern Apparel" />
      </Head>
      <div className='bg-white dark:bg-gray-900'>
        <Announcement />
        <Navbar />
        <Hero />
        <ProductGrid />
        <Banner />
        <RightLeft1 />
        <LeftRight1 />
        <RightLeft2 />
        <Banner2 />
        <InfoBanner />
        <Footer />
      </div>
    </>
  )
}
