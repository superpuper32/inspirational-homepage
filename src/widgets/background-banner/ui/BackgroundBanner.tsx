import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";

import type { RootState } from "@/app/store";
import { fetchBackground } from "@/features/change-background";
import { ArrowButton } from "@/shared/ui/ArrowButton/ArrowButton";

type ImageProps = {
  src: string;
};

const BackgroundBannerWrapper = styled("div")<ImageProps>`
  position: absolute;
  background: url(${(props) => props.src}) no-repeat center center/cover;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
`;

export const BackgroundBanner: React.FC = () => {
  const dispatch = useDispatch();
  const { currentBackground, loading } = useSelector(
    (state: RootState) => state.background
  );

  useEffect(() => {
    if (!currentBackground) {
      dispatch(fetchBackground());
    }
  }, [dispatch, currentBackground]);

  const handleArrowClick = () => {
    dispatch(fetchBackground());
  };

  return (
    <BackgroundBannerWrapper
      src={currentBackground}
    >
      <div className="background-banner__controls">
        <ArrowButton
          direction="left"
          onClick={() => handleArrowClick()}
          disabled={loading}
        />
        <ArrowButton
          direction="right"
          onClick={() => handleArrowClick()}
          disabled={loading}
        />
      </div>

      {loading && <div className="background-banner__loading">Loading...</div>}
    </BackgroundBannerWrapper>
  );
};
