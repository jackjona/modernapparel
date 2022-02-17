import Link from 'next/link'
import s from './MenuSidebarView.module.css'
import { FC } from 'react'
import { useUI } from '@components/ui/context'
import SidebarLayout from '@components/common/SidebarLayout'
import { Link as LinkProps} from '.'


interface MenuProps {
  links?: LinkProps[]
}

const MenuSidebarView: FC<MenuProps> = (props) => {
  const { closeSidebar } = useUI()
  const handleClose = () => closeSidebar()

  return (
    <SidebarLayout handleClose={handleClose}>
      <div className={s.root} >
        <nav>
          <ul>
            <li className={s.item}>
              <Link href="/search">
                <a>All</a>
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/">
                <a>Featured</a>
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/search/mens-apparel">
                <a>Mens</a>
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/search/womens-apparel">
                <a>Womens</a>
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/search/accessories">
                <a>Accessories</a>
              </Link>
            </li>
            <br />
            <li className={s.item}>
              <Link href="/en-US/free-shipping">
                <a>Free Shipping</a>
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/en-US/extended-returns">
                <a>Extender Returns</a>
              </Link>
            </li>            <li className={s.item}>
              <Link href="/en-US/gift-cards">
                <a>Gift Cards</a>
              </Link>
            </li>            <li className={s.item}>
              <Link href="https://www.canadapost-postescanada.ca/track-reperage/en#/home">
                <a>Track Your Order</a>
              </Link>
            </li>
            <br />
            <li className={s.item}>
              <Link href="/en-US/return-policy">
                <a>Return Policy</a>
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/en-US/shipping-policy">
                <a>Shipping Policy</a>
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/en-US/privacy-policy">
                <a>Privcy Policy</a>
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/en-US/terms-and-conditions">
                <a>Terms and Conditions</a>
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </SidebarLayout>
  )
}

export default MenuSidebarView
