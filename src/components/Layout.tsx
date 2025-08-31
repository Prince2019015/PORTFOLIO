// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navigation from './Navigation';
// import Footer from './Footer';

// const Layout = () => {
//   return (
//     <div className="min-h-screen flex-auto bg-slate-900">
//       <Navigation />
//       <main>
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import VisitorTracker from './VisitorTracker';

const Layout = () => {
  return (
    <div className="min-h-screen flex-auto bg-slate-900">
      <Navigation />
      <VisitorTracker />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
