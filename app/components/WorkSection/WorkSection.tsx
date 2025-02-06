import { sendGAEvent } from '@next/third-parties/google';
import { FC } from 'react';
import { LinkButton } from '../base/Button/LinkButton';
import { Grid } from '../base/Grid/Grid';
import { ResumeButton } from '../ResumeButton/ResumeButton';
import { SectionBanner } from '../SectionBanner/SectionBanner';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { SectionContent } from '../SectionContent/SectionContent';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { Company } from './Company';
import { useCompanies } from './useCompanies';

export const WorkSection: FC = () => {
  const { featuredCompanies, otherCompanies } = useCompanies();

  const handleLearnMoreClick = () =>
    sendGAEvent('event', 'learn_more_modal_button_click');

  return (
    <SectionContainer>
      <SectionContent>
        <SectionHeading>
          <span>Work Experience</span>
          <ResumeButton />
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
          Blue Acorn and worked there and for 4 other companies over the next 15
          years.
        </p>
        <LinkButton
          href="/work/magic-eden"
          scroll={false}
          className="self-center"
          onClick={handleLearnMoreClick}
        >
          Learn More
        </LinkButton>
      </SectionBanner>
      <SectionContent>
        <Grid>
          {featuredCompanies.map((company) => (
            <Company key={company.id} company={company} />
          ))}
        </Grid>
        <Grid columns={3}>
          {otherCompanies.map((company) => (
            <Company key={company.id} company={company} />
          ))}
        </Grid>
      </SectionContent>
    </SectionContainer>
  );
};
