import styles from "./alert-snackbar.module.scss";
import { Alert, Snackbar } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import {
  getAlertMessageFromStore,
  getAlertTypeFromStore,
  getIsAlertOpenFromStore,
} from "../../services/alerts/selectors";
import { getBasketsErrorFromStore } from "../../services/baskets/selectors";
import { getAnalyticsErrorFromStore } from "../../services/analytics/selectors";
import { getAssessorsErrorFromStore } from "../../services/assessors/selectors";
import { closeAlert, setAlert } from "../../services/alerts/alerts-slice";

const AlertSnackbar = () => {
  const dispatch = useAppDispatch();
  const isAlertOpen = useAppSelector(getIsAlertOpenFromStore);
  const alertType = useAppSelector(getAlertTypeFromStore);
  const alertMessage = useAppSelector(getAlertMessageFromStore);
  const basketError = useAppSelector(getBasketsErrorFromStore);
  const analyticsError = useAppSelector(getAnalyticsErrorFromStore);
  const assessorsError = useAppSelector(getAssessorsErrorFromStore);

  useEffect(() => {
    const errorMessage = basketError || analyticsError || assessorsError;
    if (errorMessage) {
      dispatch(setAlert({ type: "error", message: errorMessage }));
    }
  }, [basketError, analyticsError, assessorsError, dispatch]);

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
  );
};

export default AlertSnackbar;
