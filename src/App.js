import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Routes,
} from "react-router-dom";

import { TopNavBar } from "./components/TopNavBar";
import { NotFound } from "./components/Notfound";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { Blogs } from "./components/Blogs";
import { Contact } from "./components/Contact";
import { NoPage } from "./components/NoPage";
import { Pages } from "./components/Pages";
import { Images } from "./components/Images";
import { Users } from "./components/Users";

function App() {
  return (
    <>
      <Router>
        <TopNavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs"  element={<Blogs />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/images" element={<Images />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/page" element={<Pages />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TopNavBar>
      </Router>
    </>
  );
}

export default App;
