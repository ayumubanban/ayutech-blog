---
title: "markdown記法に慣れるために色々書いてみた"
date: "2019-09-10"
---

### 参考サイト： [Markdown記法 サンプル集](https://qiita.com/tbpgr/items/989c6badefff69377da7)
こちらのQiitaの記事を参考にして、Markdown記法に慣れるために色々書いてみます。

## 見出し

    # 見出し1
    ### 見出し3
    #### 見出し4
    ##### 見出し5
    ###### 見出し6

### ↓

# 見出し1
### 見出し3
#### 見出し4
##### 見出し5
###### 見出し6


## 箇条書きリスト
    - リスト1
        - ネスト リスト1_1
            - ネスト リスト1_1_1
            - ネスト リスト1_1_2
        - ネスト リスト1_2
    - リスト2
    - リスト3

### ↓

- リスト1
    - ネスト リスト1_1
        - ネスト リスト1_1_1
        - ネスト リスト1_1_2
    - ネスト リスト1_2
- リスト2
- リスト3


## 番号付きリスト
    1. 番号付きリスト1
        1. 番号付きリスト1_1
        1. 番号付きリスト1_2
    1. 番号付きリスト2
    1. 番号付きリスト3

### ↓

1. 番号付きリスト1
    1. 番号付きリスト1-1
    1. 番号付きリスト1-2
1. 番号付きリスト2
1. 番号付きリスト3


## 引用
    > こんにちは。
    >
    > こちらが仕様です。

### ↓

> こんにちは。
>
> こちらが仕様です。

## コード記法
    インストールコマンドは `$ npm install hoge` です

### ↓
インストールコマンドは `$ npm install hoge` です


## 強調

    normal *italic* normal
    normal _italic_ normal

### ↓

normal *italic* normal
normal _italic_ normal


## 強調
    normal **bold** normal
    normal __bold__ normal

### ↓

normal **bold** normal
normal __bold__ normal


## 強調
    normal ***bold*** normal
    normal ___bold___ normal

### ↓

normal ***bold*** normal
normal ___bold___ normal


## 水平線
    ***

    ___

    ---

    *    *    *

### ↓

***

___

---

*    *    *


## 取り消し線
    ~~この文章を取り消します~~

### ↓
~~この文章を取り消します~~


### pre記法(シンタックスハイライト)
    ~~~ruby
    class Hoge
    　 def hoge
    　   print 'hoge'
    　 end
    end
    ~~~

### ↓

~~~ruby
class Hoge
　 def hoge
　   print 'hoge'
　 end
end
~~~

<br/><br/>
こういう感じで文章を書くっていうのは、個人的にはTeXを思い出します…
<br />
MarkdownはTeXより簡単そうだな