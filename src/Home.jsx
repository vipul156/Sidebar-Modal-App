import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { isSidebarOpen, openSidebar, isModalOpen, openModal } =
    useGlobalContext();

  return (
    <main>
      {!isSidebarOpen && (
        <button onClick={openSidebar} className="sidebar-toggle">
          <FaBars />
        </button>
      )}
      {!isModalOpen && (
        <button onClick={openModal} className="btn">
          show modal
        </button>
      )}
    </main>
  );
};
export default Home;
