export class Alert {
  constructor(
    readonly id: number,
    readonly type: string,
    readonly description: string,
    readonly dateTime: string,
    readonly severity: string,
    readonly status: string,
    readonly affectedUserId: string
  ) {}
}
