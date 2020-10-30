import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/Routes/index";

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="dark" />
    </>
  );
}