import type { FC } from 'react';
import { Form } from '../base/Form/Form';
import { Toast } from '../base/Toast/Toast';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { SectionContent } from '../SectionContent/SectionContent';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { useContactForm } from './useContactForm';

export const ContactSection: FC = () => {
  const { contactFormData, formState, toast } = useContactForm();

  return (
    <SectionContainer>
      <SectionContent className="max-w-screen-sm">
        <SectionHeading>Let's get in touch</SectionHeading>
        <Form data={contactFormData} state={formState} />
      </SectionContent>
      <Toast {...toast} />
    </SectionContainer>
  );
};
