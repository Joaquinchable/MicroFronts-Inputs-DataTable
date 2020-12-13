import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Badge,
  makeStyles,
} from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#fff",
    transform:"translate(0)"
  },
  searchInput :{
    opacity:'0.6',
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor:'#f2f2f2  '
    },
    '&: .MuiSvgIcon-root':{
       marginRight: theme.spacing(1)
    }
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container
        alignItems="center"
        >
          <Grid item>
            <InputBase
              placeholder="Search topics"
              startAdornment={<SearchIcon fontSize="smal"/>}
              className={classes.searchInput}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item sm={2}>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon fontSize="smal"/>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubbleOutlineIcon fontSize="smal"/>
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon fontSize="smal"/>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
