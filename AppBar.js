import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import  { useState } from  'react';
import { NavLink, withRouter } from 'react-router-dom';
import { categories } from './../Data/product';
import Button from '@material-ui/core/Button';
import Products from './../products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),

  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar({counter}) {
  const classes = useStyles();
  let {param } = useParams();
  
 
  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
           
          >
            <MenuIcon />
          </IconButton>
          <div>
            <Typography className={classes.title} variant="h6" noWrap style={{ color: "yellow" }}>
              Daraz
          </Typography>
          </div>



          <NavLink to="/Home">
            <Typography style={{ paddingLeft: 150, color: "white" }} className={classes.title} variant="h6" noWrap >
              Home
          </Typography>
          </NavLink>

          <NavLink to="/Detail">
            <Typography style={{ paddingLeft: 150, color: "white" }} className={classes.title} variant="h6" noWrap>
              Detail
          </Typography>
          </NavLink>

          <NavLink to="/check-out">
            <Typography style={{ paddingLeft: 150, color: "white" }} className={classes.title} variant="h6" noWrap>
              Checkout
          </Typography>
          </NavLink>
          <NavLink to="/Sign-in">
            <Typography style={{ paddingLeft: 150, paddingRight: 150, color: "white" }} className={classes.title} variant="h6" noWrap>
              Login
          </Typography>
          </NavLink>

          <div>
            <ShoppingCartIcon   style={{ color: "black" }}  />
           
          </div>
          <h5>{counter}</h5>
          
          <div className={classes.search}>
            <div className={classes.searchIcon}>

              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
