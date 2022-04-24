import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Details } from "./pages/Details";
import { NotFound } from "./pages/NotFound";
import { useEffect, useState } from "react";
import axios from "axios";
import { ALL_COUNTRIES } from "./config";

export interface IData {
  name: string;
  capital: string;
  flags: {
    png: string;
    svg: string;
  };
  independent: boolean;
  population: number;
  region: string;
}

function App() {
  const [countries, setCountries] = useState<IData[]>([]);

  useEffect(() => {
    axios.get<IData[]>(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage countries={countries} />} />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
