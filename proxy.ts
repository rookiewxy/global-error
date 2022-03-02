/*
 * @Description: 创建一个 Proxy 对象，对目标对象 target做一层包装
 * @Autor: wxy
 * @Date: 2022-03-02 09:28:17
 * @LastEditors: wxy
 * @LastEditTime: 2022-03-02 09:44:16
 */
import {createExceptionZone } from './createExceptionZone'

export function createProxy(target:any) {
  const proxy = createExceptionProxy();
  return new Proxy(target, {
      get: proxy,
      set: proxy
  });
}

function createExceptionProxy() {
  return (target:any, prop:any) => {
      if (!(prop in target)) {
          return;
      }

      if (typeof target[prop] === 'function') {
          return createExceptionZone(target, prop);
      }

      return target[prop];
  }
}