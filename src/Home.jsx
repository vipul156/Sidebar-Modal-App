import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Home = () => {
  const [menu, setMenu] = useState(false);
  return (
    <main>
      {menu ? (
        <Sidebar />
      ) : (
        <button
          onClick={() => {
            setMenu(!menu);
          }}
          className="sidebar-toggle"
        >
          <FaBars />
        </button>
      )}
      <button className="btn">show modal</button>
    </main>
  );
};
export default Home;
