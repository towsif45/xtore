import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";

const AppBody = (props) => {
  const { component } = props;
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        {component}
      </div>
    </>
  );
};

export default AppBody;
