import { responseTreatment } from './axios-utils';

import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from '@/data/protocols/http/http-client';
import axios, { AxiosResponse } from 'axios';

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: { ...data.headers },
      });
    } catch (error) {
      return responseTreatment(
        {
          statusCode: error.response?.status,
          error: error?.response,
          body: error.response?.data,
        },
        error,
      );
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
