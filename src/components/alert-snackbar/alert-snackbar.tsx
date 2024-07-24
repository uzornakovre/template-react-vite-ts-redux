import styles from "./alert-snackbar.module.scss"
import { Alert, Snackbar } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../services/hooks"
import {
  getAlertMessageFromStore,
  getAlertTypeFromStore,
  getIsAlertOpenFromStore,
} from "../../services/alerts/selectors"
import { closeAlert } from "../../services/alerts/alerts-slice"

const AlertSnackbar = () => {
  const dispatch = useAppDispatch()
  const isAlertOpen = useAppSelector(getIsAlertOpenFromStore)
  const alertType = useAppSelector(getAlertTypeFromStore)
  const alertMessage = useAppSelector(getAlertMessageFromStore)

  // useEffect(() => {
  //   if (error) {
  //     dispatch(setAlert({ type: "error", message: error }));
  //   }
  // }, [error, dispatch]);

  return (
    <Snackbar
      open={isAlertOpen}
      autoHideDuration={6000}
      onClose={() => dispatch(closeAlert())}
      className={styles.snackbar}
    >
      <Alert
        onClose={() => dispatch(closeAlert())}
        severity={alertType}
        variant="filled"
      >
        {alertMessage}
      </Alert>
    </Snackbar>
  )
}

export default AlertSnackbar
