export class UnexpectedError extends Error {
  constructor(error: any) {
    super(error);
    this.name = 'UnexpectedError';
  }
}
