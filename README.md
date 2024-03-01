# Nuxt3 Template

nuxt3 h5game 前端项目模板

## Installation

```bash
pnpm install
```

## Script

```bash
pnpm dev # 运行
pnpm lint # 代码格式检查
pnpm build # 打包
pnpm build:test # 打包测试环境
pnpm start # 线上测试
```

## Precautions

新项目复制时需要修改的地方

- package.json
  - name
  - version
- nxut.config.ts
  - devServer.port
  - nitro.cache.db
  - routeRules # 根据实际路由修改
- constants
  - index.ts
- .env.dev
- .env.test
- .env.prod
- public
  - ads.txt
  - all img
- uno.config.ts
  - theme.colors
- ecosystem.config.js
  - name
  - prot
- assets
  - css
    - main.scss
  - img
  - svg

## Other

- **组件`AdSenseBlock`**: 广告变量区分,以`style`结尾的变量,只能使用原生css,以`class`结尾的变量,可以使用unocss,否则将导致广告无法正常显示

路由创建规则: 按照后端app名称进行路由创建

- 如果只有一个app, 则直接使用`/`作为基础路由
- 后端有两个及以上app时,选择一个app作为主app,主app使用`/`作为基础路由,其他app使用`/appname/`作为基础路由

类型声明规则: 按照后端Serializers进行类型声明,类型声明位置: 对应路由下的组件文件夹下的types.ts中

组件命名规则: 按照后端app名称进行区分,公共组件放在最外层components文件夹下,不同路由下的组件放在对应路由文件夹下,如需区分电脑端与手机端,则在对应路由文件夹下创建Desktop文件夹与Mobile文件夹
