import { HttpClient, HttpStatusCode } from '@/data/protocols/http/http-client';
import { BadRequestError } from '@/domain/errors/bad-request-error';
import { UnexpectedError } from '@/domain/errors/unexpected-error';
import {
  GetUserRepos,
  IGetUserRepos,
} from '@/domain/usecases/github/get-user-repos';

export class GetUserRepoRemote implements IGetUserRepos {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<GetUserRepos.Model>,
  ) { /* prettier-ignore */ }

  async getUserRepos(params: GetUserRepos.Params): Promise<GetUserRepos.Model> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${params.userName}/repos`,
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
