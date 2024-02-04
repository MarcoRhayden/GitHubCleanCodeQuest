import {
  HttpResponse,
  HttpStatusCode,
} from '@/data/protocols/http/http-client';
import { AxiosError } from 'axios';

export const responseTreatment = (
  response: HttpResponse,
  axiosError?: AxiosError,
): HttpResponse => {
  if (axiosError) {
    if (axiosError.code === AxiosError.ERR_NETWORK) {
      response.statusCode = HttpStatusCode.timeout;
      response.error = axiosError.message;
      response.body = axiosError;
    }
  }

  return response;
};
