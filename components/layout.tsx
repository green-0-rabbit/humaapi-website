import Navbar from './navbar';
import Footer from './footer';
import { FC } from 'react';
interface ILayout {
  children: React.ReactNode;
}
const Layout: FC<ILayout> = (props) => {
  const links = [];
  return (
    <div>
      {/* <Navbar links={[]} /> */}
      dfdfdfdfdf f
      <Footer />
    </div>
  );
};
export default Layout;
