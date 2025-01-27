import { ContactSection } from '../components/ContactSection/ContactSection';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { SECTION_SPACING_CLASSNAME } from '../constants';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { usePageSections } from '../hooks/usePageSections';
import { clsxMerge } from '../utils/clsxMerge';

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
          className={clsxMerge(SECTION_SPACING_CLASSNAME, section.className)}
        >
          {section.children}
        </section>
      ))}
      <ContactSection />
    </div>
  );
};

export default Home;
