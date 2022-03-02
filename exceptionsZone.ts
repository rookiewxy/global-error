/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-03-02 09:28:43
 * @LastEditors: wxy
 * @LastEditTime: 2022-03-02 09:50:03
 */
import { ExceptionHandler } from './exceptionHandler'
export class ExceptionsZone {
  static exceptionHandler = new ExceptionHandler();

  // 处理同步错误
  static run(callback:any) {
    try {
      callback();
    } catch (e) {
      this.exceptionHandler.handle(e);
    }
  }
  // 处理异步错误
  static async asyncRun(callback:any) {
    try {
      await callback();
    } catch (e) {
      this.exceptionHandler.handle(e);
    }
  }
}