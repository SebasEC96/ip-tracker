import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import LeafletMap from "./components/LeafletMap";
import { Search } from "./components/Search";
import { LeafletProvider } from "./context/LeafletContext";

function IPTracker() {
  return (
    <>
      <Header />
      <LeafletProvider>
        <Search />
        <LeafletMap />
      </LeafletProvider>
      <Footer />
    </>
  );
}

export default IPTracker;
