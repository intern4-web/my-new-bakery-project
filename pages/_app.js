import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
    <Component {...pageProps} />
    </main>
    <Footer />
    </div>
  );
}
