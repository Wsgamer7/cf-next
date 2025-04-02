### 创立 nextjs + cloudflare 项目的步骤

1.

```
npm create cloudflare@latest -- my-next-app --framework=next --experimental
```

2.  (optional)，删掉 node_modules 和 lock 文件，然后

```
pnpm i
```

3.

```
pnpm run deploy
```

然后就可以在 worker 里(注意不是 cf page)点开网页了

4.  worker 设置选择 github 仓库，build 命令不填，deploy 命令填

```
pnpm run deploy
```
