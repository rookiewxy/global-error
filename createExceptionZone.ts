/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-03-02 09:28:31
 * @LastEditors: wxy
 * @LastEditTime: 2022-03-02 09:44:41
 */
import { ExceptionsZone } from './exceptionsZone'
export function createExceptionZone(target:any, prop:any) {
  return (...args:any[]) => {
      let result;
      // 异常处理
      ExceptionsZone.run(() => {
        result = target[prop](...args);
      });
      return result;
  };
}