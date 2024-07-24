import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAlertsState {
  alertIsOpen: boolean;
  alertMessage: string | null;
  alertType: TAlertType;
}

export const initialState: IAlertsState = {
  alertIsOpen: false,
  alertMessage: null,
  alertType: "info",
};

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<IAlert>) => {
      const { type, message } = action.payload;
      return {
        ...state,
        alertType: type,
        alertMessage: message,
        alertIsOpen: true,
      };
    },

    closeAlert: (state) => {
      return { ...state, alertIsOpen: false, alertMessage: null };
    },
  },
});

export const { setAlert, closeAlert } = alertsSlice.actions;

export default alertsSlice.reducer;
