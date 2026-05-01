import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import "@/styles/landing.css";
import "@/styles/shop.css";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
