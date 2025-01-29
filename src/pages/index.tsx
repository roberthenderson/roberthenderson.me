import { HeroSection } from '../components/HeroSection/HeroSection';
import { SECTION_SPACING_CLASSNAME } from '../constants';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { usePageSections } from '../hooks/usePageSections';

const Home = () => {
  const { pageSections } = usePageSections();
  usePageNavigation({ pageSections });

  return (
    <div className="flex flex-col">
      <HeroSection />
      {pageSections.map((section) => (
        <section
          key={section.id}
          ref={section.ref}
          className={SECTION_SPACING_CLASSNAME}
        >
          {section.children}
        </section>
      ))}
    </div>
  );
};

export default Home;
