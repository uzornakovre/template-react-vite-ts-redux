import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModalsState {
  isInfoModalOpen: boolean;
  infoModalText: string;
}

export const initialState: IModalsState = {
  isInfoModalOpen: false,
  infoModalText: "",
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setIsInfoModalOpen: (state, action: PayloadAction<boolean>) => {
      return { ...state, isInfoModalOpen: action.payload };
    },

    setInfoModalText: (state, action: PayloadAction<string>) => {
      return { ...state, infoModalText: action.payload };
    },

    closeAllModals: () => {
      return initialState;
    },
  },
});

export const { setIsInfoModalOpen, setInfoModalText, closeAllModals } =
  modalsSlice.actions;

export default modalsSlice.reducer;
