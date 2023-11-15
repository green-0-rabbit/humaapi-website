import { INavigation } from '.';

const ParseFooter = (navigationData: INavigation[]) => {
  // get only Elements that have footerTitle except  Home and  Our service
  const getNavigationFooterTitleValues = navigationData.filter(
    (value) => value.footerTitle !== null && value.navigationLink !== 'home'
  );
  // get Our service navigation
  const serviceElement = navigationData.filter(
    (value) => value.footerTitle === null
  );
  const [service] = serviceElement;
  // Create a map to store elements by footerTitle
  const elementsByFooterTitle = new Map<string | null, INavigation[]>();

  getNavigationFooterTitleValues.forEach((item) => {
    const { footerTitle } = item;

    if (!elementsByFooterTitle.has(footerTitle)) {
      elementsByFooterTitle.set(footerTitle, []);
    }
    elementsByFooterTitle.get(footerTitle)?.push(item);
  });
  elementsByFooterTitle.set(service.navigationTitle, serviceElement);

  return elementsByFooterTitle;
};
export default ParseFooter;
