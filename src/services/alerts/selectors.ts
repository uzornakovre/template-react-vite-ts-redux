import { RootState } from "../store";

export const getIsAlertOpenFromStore: (store: RootState) => boolean = (store) =>
  store.alerts.alertIsOpen;

export const getAlertMessageFromStore: (store: RootState) => string | null = (
  store
) => store.alerts.alertMessage;

export const getAlertTypeFromStore: (store: RootState) => TAlertType = (
  store
) => store.alerts.alertType;
