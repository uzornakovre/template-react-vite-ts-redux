type TAlertType = "success" | "error" | "warning" | "info"

interface IAlert {
  type: TAlertType
  message: string | null
}
