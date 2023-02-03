import { parse } from 'node-html-parser';
import { INavigationFooterData } from './navigation-service';

export function getFormatedOverview(data: string) {
  const parsedData = parse(data);
  const h2 = parsedData.getElementsByTagName('h2')[0];
  const title = h2.textContent.trim();
  const content = parsedData.getElementsByTagName('p')[0].textContent.trim();
  let contentparag;
  let contentLinks;
  if (title !== 'Description') {
    const newcontent = content.split(',');
    contentparag = newcontent;
    const contentLink = parsedData
      .getElementsByTagName('p')[1]
      .textContent.trim();
    contentLinks = contentLink.split(',');
  } else {
    contentparag = content;
    contentLinks = '/';
  }
  return { title, contentparag, contentLinks };
}
export const parseFooter = (navigationData: INavigationFooterData[]) => {
  const getFooterValues = navigationData.map((value) =>
    getFormatedOverview(value.footerSection)
  );
  return getFooterValues;
};
