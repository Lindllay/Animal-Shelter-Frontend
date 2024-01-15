import "./_App.scss";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Layout from "./common/layout/Layout";
import Home from "./pages/home/Home";
import Animals from "./pages/animals/Animals";
import Animal from "./pages/animals/animal/Animal";
import Help from "./pages/help/Help";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import About from "./pages/about/About";
import News from "./pages/news/News";
import Article from "./pages/news/article/Article";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<Article />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/animals/:id" element={<Animal />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
