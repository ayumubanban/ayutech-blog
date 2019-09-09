---
title: "gatsbyJS + Netlifyで技術ブログを作りました"
date: "2019-09-09"
---

今後の技術メモを取るために技術ブログを作りたかったのと、学習してきたReactを使ってアウトプットしたかったので、<br/>gatsbyJS + Netlifyでブログを作成しました！

## 作成期間

4日ほどです。

## 作成する上で参考にしたサイト

### [Gatsby.js Tutorials](https://www.gatsbyjs.org/tutorial/)

やはり、何かを学習する時は、公式のチュートリアルから入ってくのが王道かもですね。
<br />
こちらのIntroductionの部分をやりました。

### [Gatsbyプラグイン45選](https://takumon.github.io/gatsby-starter-qiita/f18d04ac-9b1a-5ac8-8d43-8aa3d8f746a7/)

Gatsbyの便利なプラグインを紹介してくれているサイトです。

### [TwitterのOGP画像が反映されない時に！キャッシュされたOGPをクリアする方法](https://ichicoro.jp/it_web/twitter/tw_reset_ogp_cache/)

twitterのOGP画像が反映されず、困っていた時に参考にしました。

### [Add Syntax Highlighting to Your Gatsby Blog in 2 Minutes](https://www.garysnotebook.com/20190409_1)

シンタックスハイライト機能が欲しく、こちらを参考にプラグインをインストールしました。<br/>
ただ、ぶっちゃけ、デフォルトのシンタックスハイライトの色がぼく好みじゃなかったので、okaidiaというものに変えました。

### [Using Excerpts](https://using-remark.gatsbyjs.org/excerpts/)
Excerptを制限したかった時に、この記事を参考にしました。pruneLengthを100にしています。

### [GatsbyJSでfontawesomeを使う](https://www.corylog.com/gatsby/gatsby014/)
font awesome、いいですよね。

### [Color -materialize](https://materializecss.com/color.html)
CSS Frameworkのmaterializeの色使いが割と好きで、またカラーコードも詳細に載っているので、色を選ぶ際に参考にしています。

### [my own pace...](https://myownpace.netlify.com/)
独学で自社開発企業に入社された、けんぞうさんの技術ブログです。こちらにgithubも載っており、サイトのコードや見た目を結構参考にさせてもらいました。
<br />
また、本技術ブログをGatsbyで作りNetlifyでデプロイしたのは、この方の影響が割と大きいです（twitterをフォローしており、色々と参考にさせていただいております）。

<br/>

### ひとまず完成という形ですが、今後も追加実装をちょこちょこしていきたいですね。<br/>起動時のガチャガチャ感（font awesomeのアイコンが暴れてる…）をなくすとか、スマホサイズの際のプロフィールカードの体裁をもうちょい整えるとか、[ページネーションを設ける](https://www.gatsbyjs.org/docs/adding-pagination/#adding-pagination)とか、footerをもうちょいいい感じにするとか…
