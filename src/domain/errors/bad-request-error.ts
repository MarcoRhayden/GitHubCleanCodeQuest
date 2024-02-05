export class BadRequestError extends Error {
  constructor(error: any) {
    super(error);
    this.name = 'BadRequestError';
  }
}
