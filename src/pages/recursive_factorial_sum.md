---
title: "再帰関数の簡単な例として、階乗・1から入力値までの和に関するコードをそれぞれRubyで書いてみた"
date: "2019-11-30"
---

## はじめに

アルゴリズムに関して勉強している中で、再帰関数とは何ぞや？となりました。
よって、本記事に、再帰関数を理解するために書いたコードを勉強の痕跡として載せておきます。
本記事では、再帰関数の例として、階乗・1から入力値までの和に関してそれぞれRubyで書いたコードを載せておきます。

## そもそも再帰関数とは？

超簡単に言うと、自分自身を呼び出す処理が書かれている関数です。

## 階乗
~~~ruby
# --- recursive_factorial.rb --- #

def factorial(num)
  # 再帰終了条件
  if num <= 1
    return 1
  end

  # ！再帰！
  return num * factorial(num-1)
end

puts "階乗"
print "正の整数を入力してください："
num = gets.to_i

print "#{num}! = "
puts factorial(num)
~~~

### 実行結果
~~~
階乗
正の整数を入力してください：5
5! = 120
~~~

参考：
<br />
- [再帰関数を分かりやすく解説してみる【入門】](https://triple-four.hatenablog.com/entry/2019/02/05/190512)
- [再帰的プログラミングをマスターする](https://www.ibm.com/developerworks/jp/linux/library/l-recurs/index.html)


## 1から入力値までの和
~~~ruby
# --- recursive_sum.rb --- #

def sum(num)
  # 再帰終了条件
  if num <= 1
    return num
  end

  # ！再帰！
  return num + sum(num-1)
end

puts "1から入力値までの和"
print "数字を入力してください："
num = gets.to_i

puts sum(num)
~~~

### 実行結果
~~~
1から入力値までの和
数字を入力してください：5
15
~~~

参考： [再帰関数を理解するための最もシンプルな例
](https://qiita.com/jumpyoshim/items/20e6b5e70efa466699b4)