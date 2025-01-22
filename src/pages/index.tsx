import { HeroSection } from '../components/HeroSection/HeroSection';
import { usePageNavigation } from '../hooks/usePageNavigation';
import { usePageSections } from '../hooks/usePageSections';

const Home = () => {
  const { pageSectionLinks, pageSections } = usePageSections();
  usePageNavigation({ pageSectionLinks, pageSections });

  return (
    <div className="flex flex-col pb-10">
      <HeroSection />
      {pageSections.map((section) => (
        <section
          key={section.label}
          ref={section.ref}
          className="h-[2000px] scroll-mt-16"
        >
          <div className="py-6">{section.label}</div>
        </section>
      ))}
    </div>
  );
};

export default Home;
