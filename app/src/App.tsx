import { useState } from "react";
import Cadastro from "./components/Cadastro";
import Login from "./components/Login";
import Teste from "./components/Teste";
import Update from "./components/Update";
import './App.css';
//import './index.css'

export default function () {
  const [route, setRoute] = useState("login")

  return <>
    {route == "login" ? <Login setRoute={setRoute} /> : ""}
    {route == "cadastro" ? <Cadastro setRoute={setRoute} /> : ""}
    {route == "teste" ? <Teste setRoute={setRoute}/> : ""}
    {route == "update" ? <Update setRoute={setRoute} /> : ""}
  </>
}