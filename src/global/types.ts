export interface Pagination {
  current: number;
  pageSize: number;
  total: number;
}

export interface PageResponse<T> {
  list: T[];
  current: number;
  pageSize: number;
  total: number;
}
