# @vitejs/plugin-less-global

vitejs全局less注入

## 安装

```
npm i @vitejs/plugin-less-global -S
```

## 使用

vite.config.ts

```typescript
import {UserConfig} from 'vite'
import {resolve} from "path"
import lessPlug from "./index"

export default <UserConfig>{
    plugins: [
        lessPlug([
            resolve(__dirname,"./src/assets/less/constant.less"),
            resolve(__dirname,"./src/assets/less/publicFun.less"),
        ]),
    ],
}
```
