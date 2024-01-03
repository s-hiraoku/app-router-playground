This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Next.js Project Structure

## `app` Directory

アプリケーションの核となる要素を含むディレクトリ。

### `components`

- 共有コンポーネント。
- UI の中心部分を構成。

### `hooks`

- アプリケーション全体で使われるフック。
- コンポーネントと密接に関連したロジックを含む。

### `providers`

- アプリケーションのコンテキストやプロバイダー。

### `routes`

- ルーティング設定。

## Project Root (アプリケーションのルートディレクトリ)

`app`ディレクトリの外部に配置する要素。

### `public/assets`

- 静的ファイル（画像、フォントなど）。

### `config`

- グローバル設定や環境変数。

### `features`

- フィーチャーベースのモジュール。

### `lib`

- 事前設定されたライブラリの再エクスポート。

### `stores`

- グローバルステートストア。

### `test`

- テストユーティリティとモックサーバー。

### `types`

- アプリケーション全体で使用される基本型。

### `utils`

- 共有ユーティリティ関数。
  Next.js Project Structure

```sh
├── app
│   ├── components         # 共有コンポーネント
│   ├── hooks              # 共有フック
│   ├── providers          # アプリケーションのプロバイダー
│   └── routes             # ルーティング設定
│
├── public
│   └── assets             # 静的ファイル（画像、フォントなど）
│
├── config                 # グローバル設定と環境変数
├── features               # フィーチャーベースのモジュール
├── lib                    # 事前設定されたライブラリの再エクスポート
├── stores                 # グローバルステートストア
├── test                   # テストユーティリティとモックサーバー
├── types                  # 基本型
└── utils                  # 共有ユーティリティ関数
```
