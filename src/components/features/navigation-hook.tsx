import Router from 'next/router';
const route = Router;
const navigation = (link: string) => {
  route.push(`${link}`);
};
export default navigation;
