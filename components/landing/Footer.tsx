import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaPinterestP,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      {/* TOP */}
      <div className="footer__top">
        {/* LEFT */}
        <div className="footer__left">
          <Image
            src="/HMHC2.png"
            alt="HMHC Logo"
            width={160}
            height={80}
            className="footer__logoImg"
          />

          <div className="footer__socials">
            <a href="https://facebook.com" target="_blank">
              <FaFacebookF />
            </a>

            <a href="https://youtube.com" target="_blank">
              <FaYoutube />
            </a>

            <a href="https://instagram.com" target="_blank">
              <FaInstagram />
            </a>

            <a href="https://tiktok.com" target="_blank">
              <FaTiktok />
            </a>

            <a href="https://pinterest.com" target="_blank">
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* CENTER */}
        <div className="footer__center">
          <h4>ABOUT</h4>
          <p>
            <b>HIGH MAINTENANCE HAIR COMPANY</b> (HMHC) represents freedom,
            confidence, and style. Immerse yourself in luxury hair extensions
            crafted for ultimate comfort and elegance.
          </p>
        </div>

        {/* RIGHT */}
        <div className="footer__right">
          <h4>QUICK LINKS</h4>

          <Link href="/search">SEARCH</Link>
          <Link href="/shipping">SHIPPING & RETURNS</Link>
          <Link href="/contact">CONTACT US</Link>
          <Link href="/locations">LOCATIONS</Link>
          <Link href="/privacy">PRIVACY POLICY</Link>
          <Link href="/terms">TERMS OF SERVICE</Link>
          <Link href="/faqs">FAQS</Link>
          <Link href="/blog">BLOG</Link>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer__bottom">
        <div className="footer__payments">
          <img src="/payments/amex.png" />
          <img src="/payments/diners.png" />
          <img src="/payments/discover.png" />
          <img src="/payments/jcb.png" />
          <img src="/payments/mastercard.png" />
          <img src="/payments/unionpay.png" />
          <img src="/payments/visa.png" />
        </div>
      </div>

      {/* MENU */}
      <div className="footer__menu">
        <Link href="/search">SEARCH</Link>
        <Link href="/shipping">SHIPPING & RETURNS</Link>
        <Link href="/contact">CONTACT US</Link>
        <Link href="/locations">LOCATIONS</Link>
        <Link href="/privacy">PRIVACY POLICY</Link>
        <Link href="/terms">TERMS OF SERVICE</Link>
        <Link href="/faqs">FAQS</Link>
        <Link href="/blog">BLOG</Link>
      </div>
    </footer>
  );
}
