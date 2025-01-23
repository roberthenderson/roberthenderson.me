import { HeroSection } from '../components/HeroSection/HeroSection';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { usePageSections } from '../hooks/usePageSections';
import { clsxMerge } from '../utils/clsxMerge';

const Home = () => {
  const { pageSectionLinks, pageSections } = usePageSections();
  usePageNavigation({ pageSectionLinks, pageSections });

  return (
    <div className="flex flex-col pb-10">
      <HeroSection />
      {pageSections.map((section) => (
        <section
          key={section.id}
          ref={section.ref}
          className={clsxMerge('scroll-mt-16 py-8 md:py-16', section.className)}
        >
          {section.children}
        </section>
      ))}
    </div>
  );
};

export default Home;
