import React from "react";
import Button from "@material-ui/core/Button";


const Btn = ({btnInfo:{size, variant, color, content, handleClick}}) => {
  return (
    <Button
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
