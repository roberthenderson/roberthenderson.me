import { useAppContext } from '@/src/app/AppContextProvider';
import {
  ALTERNATE_SECTION_CLASSNAME,
  SECTION_SPACING_CLASSNAME,
} from '@/src/constants';
import { clsxMerge } from '@/src/utils/clsxMerge';
import { FC, useEffect, useRef } from 'react';
import { SectionContent } from '../SectionContent/SectionContent';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { Form } from '../base/Form/Form';
import { useContactForm } from './useContactForm';

export const ContactSection: FC = () => {
  const { setContactSectionRef } = useAppContext();
  const contactSectionRef = useRef<HTMLDivElement>(null);
  useEffect(
    () => setContactSectionRef(contactSectionRef),
    [setContactSectionRef],
  );

  const { contactFormData, formState } = useContactForm();

  return (
    <div
      ref={contactSectionRef}
      className={clsxMerge(
        SECTION_SPACING_CLASSNAME,
        ALTERNATE_SECTION_CLASSNAME,
      )}
    >
      <SectionContent alwaysColumn className="max-w-[480px]">
        <SectionHeading>Let's get in touch</SectionHeading>
        <Form data={contactFormData} state={formState} />
      </SectionContent>
    </div>
  );
};
