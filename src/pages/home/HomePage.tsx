import { Header } from '../../widgets/header';
import { Hero } from '../../widgets/hero';
import { Services } from '../../widgets/services';
import { Portfolio } from '../../widgets/portfolio';
import { Articles } from '../../widgets/articles';
import { Testimonials } from '../../widgets/testimonials';
import { Cta } from '../../widgets/cta';
import { Footer } from '../../widgets/footer';

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Articles />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
};
