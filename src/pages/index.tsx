import { HeroSection } from '../components/HeroSection/HeroSection';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { usePageSections } from '../hooks/usePageSections';

const Home = () => {
  const { pageSectionLinks, pageSections } = usePageSections();
  usePageNavigation({ pageSectionLinks, pageSections });

  return (
    <div className="gap-18 flex flex-col pb-10">
      <HeroSection />
      {pageSections.map((section) => (
        <section key={section.id} ref={section.ref} className="scroll-mt-16">
          {section.children}
        </section>
      ))}
    </div>
  );
};

export default Home;
