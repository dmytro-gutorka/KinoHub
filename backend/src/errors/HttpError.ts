export class HttpError extends Error {
  public status: number;

  constructor(status: number = 500, message: string = 'Something went wrong') {
    super(message);
    this.status = status;
  }

  public static BadRequest = () => new HttpError(400, 'Bad request');
  public static Unauthorized = () => new HttpError(401, 'Unauthenticated');
  public static Forbidden = () => new HttpError(403, 'Forbidden');
  public static NotFound = () => new HttpError(404, 'Not found');
}
