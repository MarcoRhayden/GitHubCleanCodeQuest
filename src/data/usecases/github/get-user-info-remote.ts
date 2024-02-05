import { HttpClient, HttpStatusCode } from '@/data/protocols/http/http-client';
import { BadRequestError } from '@/domain/errors/bad-request-error';
import { UnexpectedError } from '@/domain/errors/unexpected-error';
import {
  GetUserInfo,
  IGetUserInfo,
} from '@/domain/usecases/github/get-user-info';

export class GetUserInfoRemote implements IGetUserInfo {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<GetUserInfo.Model>,
  ) { /* prettier-ignore */ }

  async getUserInfo(params: GetUserInfo.Params): Promise<GetUserInfo.Model> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${params.userName}`,
      method: 'get',
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.badRequest:
        throw new BadRequestError(
          'Sorry, it seems that something went wrong. Please perform the operation again.',
        );
      default:
        throw new UnexpectedError(
          'Sorry, an unexpected error occurred. Please try again.',
        );
    }
  }
}
