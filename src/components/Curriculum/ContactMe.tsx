import React, { FC } from 'react';

import { FaLinkedin } from 'react-icons/fa';
import { MdImportContacts, MdPhone, MdEmail, MdWeb } from 'react-icons/md';

import { useTranslations } from 'next-intl';
import { useCvContext } from '@/hoc/CvContextProvider';

interface IContactMeProps {}

const contactmes = ['contact1', 'contact2', 'contact3', 'contact4'] as const;

type ContactMeType = (typeof contactmes)[number];

const contactIcons: Record<ContactMeType, JSX.Element> = {
  contact1: <MdPhone className="text-xs" />,
  contact2: <MdEmail className="text-xs" />,
  contact3: <MdWeb className="text-xs" />,
  contact4: <FaLinkedin className="text-xs" />,
};

const ContactMe: FC<IContactMeProps> = ({}) => {
  const t = useTranslations('curriculum');
  const { showSectionIcons } = useCvContext();

  return (
    <>
      <h5 className="text-blue mb-1 flex items-center gap-1 text-lg uppercase font-semibold text-cv tracking-tight">
        {showSectionIcons && <MdImportContacts className="text-xs" />}
        {t('header.contact')}
      </h5>

      <div className="mb-4">
        <ul className="text-xs list-none">
          {contactmes.map((contactme) => (
            <li key={contactme}>
              <a
                target="_blank"
                className="flex gap-2 items-center"
                rel="noopener noreferrer"
                href={t(`contacts.${contactme}.value`)}>
                {contactIcons[contactme]}
                {t(`contacts.${contactme}.name`)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactMe;