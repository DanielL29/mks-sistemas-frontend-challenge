import Footer from "@/components/Footer";
import Header from "@/layouts/Header";
import Products from "@/layouts/Products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Header />
      <Products />
      <Footer />
      <ToastContainer />
    </>
  );
}
