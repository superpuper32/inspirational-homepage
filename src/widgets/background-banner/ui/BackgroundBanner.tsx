import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "@/app/store";
import { fetchBackground } from "@/features/change-background";
import { ArrowButton } from "@/shared/ui/ArrowButton/ArrowButton";

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
    <div
      className="background-banner"
      style={{
        backgroundImage: `url(${currentBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
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
    </div>
  );
};
