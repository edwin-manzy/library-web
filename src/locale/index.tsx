import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { PropsWithChildren, ReactElement } from 'react';

import { messages as enMessages } from 'src/locale/messages/en/messages';
import { messages as nyMwMessages } from 'src/locale/messages/ny-mw/messages';

i18n.load('en', enMessages);
i18n.load('ny-mw', nyMwMessages);
i18n.activate('en');

export const LocaleProvider = ({ children }: PropsWithChildren): ReactElement => {
  return <I18nProvider i18n={i18n} >
    {children}
  </I18nProvider>;
};
