/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-03-02 09:40:05
 * @LastEditors: wxy
 * @LastEditTime: 2022-03-02 09:49:24
 */
import { createProxy } from './proxy'
import { ExceptionsZone } from './exceptionsZone'

const obj = {
  name: 'guang',
  say() {
      console.log('Hi, I\'m ' + this.name);
  },
  coding() {
      //xxx
      throw new Error('bug');
  },
  async coding2() {
      //xxx
      throw new Error('bug2');
  }
}

const proxy = createProxy(obj);

proxy.say();
proxy.coding();
(async function() {
    await ExceptionsZone.asyncRun(proxy.coding2);
})();