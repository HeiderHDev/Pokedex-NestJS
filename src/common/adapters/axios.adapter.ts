import { Injectable } from "@nestjs/common";
import { HttpAdapter } from "../interfaces/http-adapter.interfaces";
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
    private axios: AxiosInstance = axios;
  
    async get<T>(url: string): Promise<T> {
      try {
        const { data } = await this.axios.get<T>(url);
        return data;
      } catch (error) {
        throw new Error('Error on request to external API - check logs for more details');
      }
    }
}