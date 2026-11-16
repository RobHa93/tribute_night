import { useEffect } from 'react';

const SITE_TITLE = 'Tribute Night Laufenburg';

export function usePageTitle(pageTitle) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | ${SITE_TITLE}` : SITE_TITLE;
  }, [pageTitle]);
}
