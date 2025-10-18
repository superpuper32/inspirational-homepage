import React from "react";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`arrow-button arrow-button--${direction}`}
      aria-label={`Change background ${direction}`}
    >
      {direction === "left" ? "‹" : "›"}
    </button>
  );
};
