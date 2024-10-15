// As rotas (caminhos) no react
// navegar entre componentes

//importar os componentes
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";

//importar as funcionalidades do react-router-dom;
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//BrowserRouter -> é um container pra habilitar as rotas

export default function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <ul>
            <li>
              {/* a tag Link é um link especial para as rotas */}
              {/* o to ="/" é o caminho principal, que vai renderizar primeiro */}
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </header>
        {/* Routes é um container para as rotas */}
        {/* Para cada rota usamos um Route */}
        {/* path = caminho */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
