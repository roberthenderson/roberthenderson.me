import { HeroSection } from '../components/HeroSection/HeroSection';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { usePageSections } from '../hooks/usePageSections';

const Home = () => {
  const { pageSectionLinks, pageSections } = usePageSections();
  usePageNavigation({ pageSectionLinks, pageSections });

  return (
    <div className="flex flex-col gap-8 pb-10 sm:gap-12">
      <HeroSection />
      {pageSections.map((section) => (
        <section
          key={section.id}
          ref={section.ref}
          className="scroll-mt-16 py-4"
        >
          {section.children}
        </section>
      ))}
    </div>
  );
};

export default Home;
