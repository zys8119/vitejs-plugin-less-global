import {Plugin} from "vite"

/**
 * options 文件名称数组
 */
declare const lessPlug:(options?:string[])=>Plugin;
export = lessPlug;