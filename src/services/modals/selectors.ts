import { RootState } from "../store";

export const getIsInfoModalOpen: (store: RootState) => boolean = (store) =>
  store.modals.isInfoModalOpen;
export const getInfoModalText: (store: RootState) => string = (store) =>
  store.modals.infoModalText;
