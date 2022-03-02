/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-03-02 09:29:05
 * @LastEditors: wxy
 * @LastEditTime: 2022-03-02 09:45:20
 */
export class ExceptionHandler {
  handle(exception:any) {
      console.log('记录错误：',exception.message+'---', exception.stack+'---');
  }
}