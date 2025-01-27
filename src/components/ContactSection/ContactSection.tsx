import { useAppContext } from '@/src/app/AppContextProvider';
import { FC, useEffect, useMemo, useRef } from 'react';
import { RiSendPlaneLine } from 'react-icons/ri';
import { SectionContent } from '../SectionContent/SectionContent';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { Form, FormData } from '../base/Form/Form';

export const ContactSection: FC = () => {
  const { setContactSectionRef } = useAppContext();
  const contactSectionRef = useRef<HTMLDivElement>(null);
  useEffect(
    () => setContactSectionRef(contactSectionRef),
    [setContactSectionRef],
  );

  const CONTACT_FORM_DATA: FormData = useMemo(
    () => ({
      legend:
        "Please send information on your job opening or project. I'll respond promptly, thank you.",
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          placeholder: "What's your name?",
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email',
          placeholder: "What's your email?",
        },
        {
          name: 'content',
          type: 'textarea',
          label: 'Content',
          props: {
            rows: 4,
          },
        },
      ],
      button: {
        label: (
          <div className="flex items-center gap-2">
            <span>Send</span>
            <RiSendPlaneLine size={18} className="text-slate-400" />
          </div>
        ),
        variant: 'secondary',
        className: 'md:pl-10 md:pr-9',
        onClick: () => null,
      },
    }),
    [],
  );

  return (
    <div ref={contactSectionRef}>
      <SectionContent alwaysColumn className="max-w-[480px] pb-16">
        <SectionHeading>Let's get in touch</SectionHeading>
        <Form data={CONTACT_FORM_DATA} />
      </SectionContent>
    </div>
  );
};
