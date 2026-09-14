import { sendGAEvent } from '@next/third-parties/google';
import type { FC } from 'react';
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { HiListBullet } from 'react-icons/hi2';
import { LEAD_COMPANY_ID, ROUTES } from '@/app/constants/routes';
import { LinkButton } from '../base/Button/LinkButton';
import { Grid } from '../base/Grid/Grid';
import { ResumeButton } from '../ResumeButton/ResumeButton';
import { SectionBanner } from '../SectionBanner/SectionBanner';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { SectionContent } from '../SectionContent/SectionContent';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { Company } from './Company';
import { FrontendArchitecture } from './FrontendArchitecture';
import { useCompanies } from './useCompanies';

export const WorkSection: FC = () => {
  const { companyRows } = useCompanies();

  const handleLearnMoreClick = () =>
    sendGAEvent('event', 'learn_more_modal_button_click');

  return (
    <SectionContainer>
      <SectionContent>
        <SectionHeading>
          <span>Work Experience</span>
          <ResumeButton label="Download Resume" />
        </SectionHeading>
      </SectionContent>
      <SectionBanner>
        <p>
          In 1998, I started teaching myself to code by building a Miami
          Dolphins fan site using Angelfire in unformatted HTML{' '}
          <code className="whitespace-nowrap text-sm">{'<textarea />'}</code>{' '}
          blocks. I crashed that Windows '95 desktop a ton and had to rewrite a
          lot of code. After graduating from college with a Business degree when
          the market crashed in 2009, I went back to school to refine my web
          design skills. I landed an internship, and then full-time position at
          Blue Acorn and have worked there and at 7 other companies since.
        </p>
        <LinkButton
          href={ROUTES[LEAD_COMPANY_ID].route}
          prefetch
          scroll={false}
          className="self-center"
          onClick={handleLearnMoreClick}
        >
          <HiListBullet />
          <span>Learn More</span>
          <CgArrowsExpandUpRight />
        </LinkButton>
      </SectionBanner>
      <SectionContent className="md:pt-18 md:pb-24">
        {companyRows.map((row) => (
          <Grid
            key={row[0].id}
            columns={row.length}
            className="sm:min-h-28 lg:min-h-32"
          >
            {row.map((company) => (
              <Company key={company.id} company={company} />
            ))}
          </Grid>
        ))}
      </SectionContent>
      <FrontendArchitecture />
    </SectionContainer>
  );
};
