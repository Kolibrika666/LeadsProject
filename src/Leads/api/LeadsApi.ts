import { httpClient } from "../../httpClient";
import { IDataLeads, IFilterLeads } from "../models";

const endpoints = {
  GET: `https://warkentiny.amocrm.ru/api/v4/leads`,
};
export class LeadsApi {
  static getList(params?: IFilterLeads) {
    return httpClient.get<IDataLeads>(endpoints.GET, { params });
  }
}
