```txt
npm install
npm run dev
```

```txt
npm run deploy
```

[For generating/synchronizing types based on your Worker configuration run](https://developers.cloudflare.com/workers/wrangler/commands/#types):

```txt
npm run cf-typegen
```

Pass the `CloudflareBindings` as generics when instantiation `Hono`:

```ts
// src/index.ts
const app = new Hono<{ Bindings: CloudflareBindings }>()
```

## 日本からのアクセスだけを許可する

- Backend: `src/index.ts` の先頭のミドルウェアで Cloudflare の `request.cf.country === "JP"` を検証します。全 API・HTTP メソッドが対象です。
- Frontend: `../frontend/functions/_middleware.js` と `../frontend/public/_routes.json` で、HTML・画像・JavaScript を含む全パスを検証します。Vite が `_routes.json` を `dist` にコピーします。
- Workers の `preview_urls: false` で旧バージョンの公開 URL を無効にします。
- 日本以外・国不明は 403。クライアントから送信した `CF-IPCountry` ヘッダーは判定に使いません。ローカル環境でも国情報がなければ拒否されます。

### 本番への反映

1. Backend をこのディレクトリから `npm run deploy` で再デプロイします。
2. Frontend の Pages プロジェクトを再デプロイします。Git 連携の場合は frontend をルートディレクトリ、`npm run build` をビルドコマンド、`dist` を出力先にし、`functions` ディレクトリも含めてデプロイしてください。Wrangler の場合は frontend ディレクトリから `npx wrangler pages deploy dist --project-name hashimoto-tsuyoshi-portfolio` を実行します。ダッシュボードへの静的ファイルのドラッグ＆ドロップだけでは Functions はデプロイできません。
3. Pages の **Settings > Runtime > Fail open / closed** を **Fail closed** に設定してください。無料枠を使い切っても国判定を通さず静的ファイルを配信しないために必要です。
4. 日本と海外の接続元から、フロントのトップページ・静的ファイルと API を確認します。海外は 403、日本は通常応答になることを確認してください。

古い Pages デプロイの URL には今回のコードは反映されません。制限のない過去のプレビューデプロイは削除するか Cloudflare Access で保護してください。R2 の公開 URL を別途使っている場合、その URL にこの判定は適用されません。

これは IP の国判定による制限です。海外から日本の VPN 等を経由するアクセスは日本と判定されることがあります。

公式ドキュメント: [Pages middleware](https://developers.cloudflare.com/pages/functions/middleware/), [Pages routing / fail closed](https://developers.cloudflare.com/pages/functions/routing/), [Workers request metadata](https://developers.cloudflare.com/workers/runtime-apis/request/)
