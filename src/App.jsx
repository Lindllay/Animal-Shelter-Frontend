import "./_App.scss";
import { Routes, Route } from "react-router-dom";

import Layout from "./common/Layout";
import Home from "./pages/home/Home";
import Animals from "./pages/animals/Animals";
import Animal from "./pages/animals/animal/Animal";
import Help from "./pages/help/Help";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import About from "./pages/about/About";
import News from "./pages/news/News";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/animals" element={<Animals />}></Route>
        <Route path="/animals/:id" element={<Animal />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard/*" element={<Dashboard />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
