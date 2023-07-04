import React, { Fragment, Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Fragment>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Fragment>
  );
};

export default SharedLayout;
