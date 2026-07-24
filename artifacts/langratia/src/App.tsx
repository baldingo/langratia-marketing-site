import { Route, Switch } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import TopProgressBar from "@/components/TopProgressBar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import CaseStudies from "@/pages/CaseStudies";
import Contact from "@/pages/Contact";
import Creators from "@/pages/Creators";
import Enterprise from "@/pages/Enterprise";
import FAQ from "@/pages/FAQ";
import Privacy from "@/pages/Privacy";
import Services from "@/pages/Services";
import SMB from "@/pages/SMB";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <>
      <JsonLd />
      <TopProgressBar />
      <div className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-[60px]">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/case-studies" component={CaseStudies} />
            <Route path="/contact" component={Contact} />
            <Route path="/creators" component={Creators} />
            <Route path="/enterprise" component={Enterprise} />
            <Route path="/faq" component={FAQ} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/services" component={Services} />
            <Route path="/smb" component={SMB} />
            <Route path="/terms" component={Terms} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
