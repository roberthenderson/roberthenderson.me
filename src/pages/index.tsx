import { HeroSection } from '../components/HeroSection/HeroSection';
import { SECTION_CLASSNAME } from '../constants';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { usePageSections } from '../hooks/usePageSections';
import { clsxMerge } from '../utils/clsxMerge';

const Home = () => {
  const { pageSections } = usePageSections();
  usePageNavigation({ pageSections });

  return (
    <div className="flex flex-col">
      <HeroSection />
      {pageSections.map((section, index) => (
        <section
          key={section.id}
          ref={section.ref}
          className={clsxMerge(
            'scroll-mt-16',
            index % 2 === 1 ? SECTION_CLASSNAME : '',
          )}
        >
          {section.children}
        </section>
      ))}
    </div>
  );
};

export default Home;
