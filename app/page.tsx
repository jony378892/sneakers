import Navbar from "./components/navbar";
import Banner from "./components/banner";
import SecondaryBanner from "./components/secondary-banner";
import Products from "./products/page";
import SubscriptionForm from "./components/subscription-form";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Banner />
      <SecondaryBanner />
      <Products />
      <SubscriptionForm />
      <Footer />
    </>
  );
}
