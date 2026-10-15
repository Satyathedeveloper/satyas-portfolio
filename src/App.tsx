import Header from './components/Header';
import { Hero, About, Experience, Projects, Skills, Education, Contact, Footer } from './components/Sections';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero /><About /><Experience /><Projects /><Skills /><Education /><Contact />
      </main>
      <Footer />
    </>
  );
}
