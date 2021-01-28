import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  Btn: {
    cursor: "pointer",
    backgroundColor: "inherit",
    padding: 4,
    margin: 2,
    border: "none",
  },
  dropdown: {
    position: "absolute",
    top: 33,
    left: -389,
    right: 0,
    border: "1px solid",
    padding: 8,
    zIndex: 1,
    backgroundColor: "#fff",
    color: "black",
    width: 400,
  },
}));

const Dropdown = ({ screenAppear, DropdownBody, badgeContent }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <button type="button" className={classes.Btn} onClick={handleClick}>
          <Badge badgeContent={badgeContent} color="secondary">
            {screenAppear}
          </Badge>
        </button>
        {open && <div className={classes.dropdown}>{DropdownBody}</div>}
      </div>
    </ClickAwayListener>
  );
};
export default Dropdown;
