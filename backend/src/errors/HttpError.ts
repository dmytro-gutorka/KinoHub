export class HttpError extends Error {
  static readonly generalErrorMessage = 'Something went wrong';
  public status: number;

  constructor(status: number = 500, message: string = HttpError.generalErrorMessage) {
    super(message);
    this.status = status;
  }

  public static BadRequest = (msg: string = HttpError.generalErrorMessage) =>
    new HttpError(400, `Bad request: ${msg}`);

  public static Unauthorized = (msg: string = HttpError.generalErrorMessage) =>
    new HttpError(401, `Unauthorized: ${msg}`);

  public static Forbidden = (msg: string = HttpError.generalErrorMessage) =>
    new HttpError(403, `Forbidden: ${msg}`);

  public static NotFound = (msg: string = HttpError.generalErrorMessage) =>
    new HttpError(404, `Not found: ${msg}`);

  public static Conflict = (msg: string = HttpError.generalErrorMessage) =>
    new HttpError(409, `Conflict: ${msg}`);
}
