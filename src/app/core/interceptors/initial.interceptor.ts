import { HttpInterceptorFn } from '@angular/common/http';

export const initialInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
