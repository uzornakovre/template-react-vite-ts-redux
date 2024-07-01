import { Outlet } from "react-router-dom";
import AlertSnackbar from "../alert-snackbar/alert-snackbar";
import Preloader from "../preloader/preloader";

const App = () => {
  const isPending = false;

  return (
    <>
      {isPending && <Preloader />}
      <Outlet />
      <AlertSnackbar />
    </>
  );
};

export default App;
