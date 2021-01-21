import React from "react";
import Button from "@material-ui/core/Button";

const Btn = ({
  className,
  isDisabled,
  type,
  size,
  variant,
  color,
  content,
  handleClick,
}) => {
  return (
    <Button
      type={type}
      className={className}
      disabled={isDisabled}
      size={size}
      variant={variant}
      color={color}
      onClick={handleClick}
    >
      {content}
    </Button>
  );
};

export default Btn;
