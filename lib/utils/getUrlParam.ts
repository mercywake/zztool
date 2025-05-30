import { isNode } from "./public";
/**
 * 获取url参数
 * @description node环境下参数必填
 * @param url url
 * @returns 参数
 * @see {@link https://yourhhh.github.io/zztoolDocument} API 文档
 * @example
 * // 调用示例
 * getUrlParam(); // 获取当前页面参数
 */
export function getUrlParam(url = "") {
  if(isNode && !url){
    return {};
  }
  if (!url) {
    url =  window.location.href;
  }
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a: any, v) => (
      (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );
}