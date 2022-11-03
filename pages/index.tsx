import { Box, Container, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.scss";
import Foods from "../components/foodlist";


const Home: NextPage = () => {
  return (
    <Foods />
  );
};

export default Home;
