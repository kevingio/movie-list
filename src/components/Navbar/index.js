import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FlexLayout } from "@components/Grid";

import { wrapper, backButton, backButtonWrapper, navbarTitle, chipMyList } from "./styles";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className={wrapper}>
      {pathname !== '/' ? (
        <div className={backButtonWrapper} onClick={() => navigate('/')}>
          <span className={backButton} /> Back Home
        </div>
      ) : null}
      <FlexLayout align="center" justify="space-between" width={pathname !== '/' ? 'calc(100% - 130px)' : '100%'}>
        <span className={navbarTitle}>
          TIX Studio XXII
        </span>
        <span className={chipMyList} onClick={() => navigate('/my-movies')}>
          My List
        </span>
      </FlexLayout>
    </div>
  );
};

export default Navbar;