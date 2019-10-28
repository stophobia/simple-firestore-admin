import { WHERE_OP, ORDER_TYPE, FIELD_TYPE } from "~/enums";

export interface SearchFormItem {
  collection: string;

  whereField?: string;
  whereOp?: WHERE_OP;
  whereValue?: string;

  orderField?: string;
  orderType?: ORDER_TYPE;
  lastId?: any;
}

export interface ResultData {
  collection: string;
  id: string;
  data: any;
  createAt: any;
  updateAt: any;
}

export interface SearchResult {
  result: ResultData[];
}

export interface UpdateParamData {
  field: string;
  value: any;
  type: FIELD_TYPE;
}
export type UpdateParam = UpdateParamData[];

export interface UpdateRequest {
  collection: string;
  docId: string;
  param: UpdateParamData[];
}

export interface DeleteRequest {
  collection: string;
  docId: string;
}
