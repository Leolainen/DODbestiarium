import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";

import { useAppContext } from "../../AppContext";
import { TOGGLE_SIDEBAR, SET_SIDEBAR } from "../../AppContext/constants";

import AppBar from "../../../components/AppBar";
import IconButton from "../../../components/IconButton";
import ToolBar from "../../../components/ToolBar";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "auto",
    backgroundColor: theme.palette.background.paper
  },
  header: {
    background: "none",
    boxShadow: "none"
  },
  hamburger: {
    marginLeft: "auto"
  }
}));

const AppHeader = props => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useAppContext();
  const { className = "" } = props;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = useStyles(props);

  const setMenu = React.useCallback(
    payload => {
      dispatch({
        type: SET_SIDEBAR,
        payload
      });
    },
    [dispatch]
  );

  /**
   * Poor solution?
   */
  React.useEffect(() => {
    if (isDesktop) {
      setMenu(true);
    }
  }, [isDesktop, setMenu]);

  const toggleMenu = () => {
    dispatch({
      type: TOGGLE_SIDEBAR
    });
  };

  const onMenuClick = () => {
    toggleMenu();
  };

  return (
    <AppBar className={classnames(classes.root, className)}>
      <ToolBar>
        <IconButton
          aria-label="menu"
          className={classes.hamburger}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
      </ToolBar>
    </AppBar>
  );
};

AppHeader.propTypes = {
  className: PropTypes.string
};

AppHeader.uiName = "AppHeader";

export default AppHeader;
