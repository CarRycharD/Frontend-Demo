import { Box, Container, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Navbar from "../components/Logout";
import styles from "../styles/Home.module.scss";
import Foods from "../components/FoodList";
import FoodCreate from "../components/FoodCreate";
import Logout from "../components/Logout";


const Home: NextPage = () => {
  return (
    <>
    <Logout />
    <FoodCreate />
    <Foods />
    </>
  );
};

export default Home;
