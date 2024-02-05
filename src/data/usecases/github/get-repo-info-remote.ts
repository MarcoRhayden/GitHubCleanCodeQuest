import { HttpClient, HttpStatusCode } from '@/data/protocols/http/http-client';
import { BadRequestError } from '@/domain/errors/bad-request-error';
import { UnexpectedError } from '@/domain/errors/unexpected-error';
import {
  GetRepoInfo,
  IGetRepoInfo,
} from '@/domain/usecases/github/get-repo-info';

export class GetRepoInfoRemote implements IGetRepoInfo {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<GetRepoInfo.Model>,
  ) { /* prettier-ignore */ }

  async getRepoInfo(params: GetRepoInfo.Params): Promise<GetRepoInfo.Model> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${params.repoFullName}`,
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
