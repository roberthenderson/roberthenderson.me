import { usePageSections } from '../hooks/usePageSections';

const Home = () => {
  const { pageSections } = usePageSections();

  return (
    <div className="flex flex-col gap-10 pb-10">
      <div className="h-40">WELCOME</div>
      {pageSections.map((section) => (
        <section
          key={section.label}
          ref={section.ref}
          className="h-[2000px] scroll-mt-16 py-6"
        >
          {section.label}
        </section>
      ))}
    </div>
  );
};

export default Home;
