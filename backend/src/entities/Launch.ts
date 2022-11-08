export class Launch {
  public readonly id: string

  public readonly date: string
  public readonly name: string
  public readonly imageUrl: string
  public readonly webcastUrl: string

  constructor(props: Launch) {
    this.id = props.id
    this.date = props.date
    this.name = props.name
    this.imageUrl = props.imageUrl
    this.webcastUrl = props.webcastUrl
  }

  static validator(data: any) {
    let isValidLaunchObject = true

    if (typeof data?.id !== 'string') {
      isValidLaunchObject = false
    } else if (typeof data?.date !== 'string') {
      isValidLaunchObject = false
    } else if (typeof data?.name !== 'string') {
      isValidLaunchObject = false
    }

    return isValidLaunchObject
  }
}
