import { About } from "../components/About";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Services } from "../components/Services";
import { Team } from "../components/Team";
import { VideoBg } from "../components/VideoBg";

export const LandingPage = () => {
  return (
    <div>
      <Header />
      <VideoBg />
      <About />
      <Services />
      <Team />
      <ContactForm />
      <Footer />
    </div>
  );
};
