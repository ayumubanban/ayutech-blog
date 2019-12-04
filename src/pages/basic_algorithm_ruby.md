---
title: "「一週間で身につくアルゴリズムとデータ構造」の入門編に関するコードをRubyで書いてみた"
date: "2019-11-21"
---

## はじめに
最近、「[一週間で身につくアルゴリズムとデータ構造](http://sevendays-study.com/algorithm/index.html)」というサイトを参考にさせてもらって、アルゴリズムの基礎に関する勉強をしております。

本記事は、こちらの[入門編](http://sevendays-study.com/algorithm/pr-day1.html)で説明されているアルゴリズムについて、Rubyで書いたコードを載せていきます。

## 時刻の差分
入力された2つの時刻の差を求めるプログラムです。
~~~ruby
# --- time_difference.rb --- #
# 時間を入力
puts "一つ目の時刻を入力してください"
print "時："
h1 = gets.to_i
print "分："
m1 = gets.to_i
print "秒："
s1 = gets.to_i
puts "二つ目の時刻を入力してください"
print "時："
h2 = gets.to_i
print "分："
m2 = gets.to_i
print "秒："
s2 = gets.to_i

# それぞれの時間を「秒」単位に変換
time1 = h1*3600 + m1*60 + s1
time2 = h2*3600 + m2*60 + s2

# 秒単位での時間差を求める
if time1 > time2
  diff = time1 - time2
else
  diff = time2 - time1
end

# 時間差を求める
h = diff / 3600
remainder = diff % 3600
m = remainder / 60
s = remainder % 60
puts "二つの時間の時間差は、#{h}時間#{m}分#{s}秒です。"
~~~
参考： [入門編4日目：アルゴリズムの例① > C言語による実装
](http://sevendays-study.com/algorithm/pr-day4_time_c.html)

## 配列の値の合計
5つの要素を持つ配列に、入力された値を各要素に代入し、それらの合計値を求めるプログラムです。
~~~ruby
# --- sum_array.rb --- #
# 各要素に数値を格納
ary = Array.new(5)
puts "5つの要素を持つ配列aryのそれぞれの要素に数値を代入してください"
5.times do |i|
  print "ary[#{i}] = "
  ary[i] = gets.to_i
end

# ~ 各要素の合計を求める ~
sum_ary = 0
ary.each do |j|
  sum_ary += j
end

# ~ 各要素の合計を求める ~ の部分は こっちでも片付く
# sum_ary = ary.sum

puts sum_ary
~~~
<u>参考</u><br />
- [入門編5日目：アルゴリズムの例② > 配列のサンプル
](http://sevendays-study.com/algorithm/pr-day5_array_c.html#sum)<br />
- [配列の便利メソッドあれこれ
](https://qiita.com/jnchito/items/118cca7ac2f01e1ca6a0)


## 配列の数値の最大値の取得
5つの要素を持つ配列に、入力された値を各要素に代入し、それらの中の最大値を求めるプログラムです。
~~~ruby
# --- max_in_array.rb --- #
ary = Array.new(5)
max = 0
puts "5つの要素を持つ配列aryのそれぞれの要素に数値を代入してください"
ary.length.times do |i|
  print "ary[#{i}] = "
  ary[i] = gets.to_i
end

# ~ 各要素の最大値を求める ~
max = ary[0]
ary.each do |value|
  if max < value
    max = value
  end
end

# ~ 各要素の最大値を求める ~ の部分は こっちでも片付く
# max = ary.max

puts "最大値は#{max}です"
~~~
<u>参考</u><br />
- [入門編5日目：アルゴリズムの例② > 配列のサンプル
](http://sevendays-study.com/algorithm/pr-day5_array_c.html#max)
- [Rubyで最大値を探すアルゴリズムを書いてみた
](https://qiita.com/ryosuketter/items/76b3ee72ff2af0779404)

## ユークリッドの互除法
2つの入力された数値の最大公約数を求める、ユークリッドの互除法について書いたプログラムです。
~~~ruby
# --- eucledean_algorithm.rb --- #
puts "ユークリッドの互除法"
print "1つ目の数を入力してください："
m = gets.to_i
print "2つ目の数を入力してください："
n = gets.to_i

# m < n なら、mとnを入れ替える
if m < n
  tmp = m
  m = n
  n = tmp
end

loop do
  d = m % n
  m = n
  n = d
  break if d == 0
end

puts "2つの数の最大公約数は#{m}です"
~~~
<u>参考</u><br />
- [入門編6日目：アルゴリズムの例③ > ユークリッドの互除法
](http://sevendays-study.com/algorithm/pr-day6_eucerat_c.html#euclid)<br />
- [Ruby で do ~ while xxx の条件文を使いたい
](https://qiita.com/ironsand/items/b1ddaf8e489edfb327ed)

## エラトステネスのふるい
入力された数値の全ての素数を求める、エラトステネスのふるいについて書いたプログラムです。
~~~ruby
# --- sieve_of_eratosthenes.rb --- #
print "エラトステネスのふるいにかける数を入力してください："
max = gets.to_i

table = Array.new(max+1, true)
prime_list = []

(2..max).each do |num|
  if table[num] == true
    prime_list << num
    k = num * num
    while k <= max
      table[k] = false
      k += num
    end
  end
end

puts "算出された素数を格納した配列は以下です"
p prime_list
~~~
<u>参考</u><br />
- [入門編6日目：アルゴリズムの例③ > エラトステネスのふるい
](http://sevendays-study.com/algorithm/pr-day6_eucerat_c.html#euclid)<br />
- [Ruby 素数を出力する エラトステネスの篩（ふるい）
](https://qiita.com/shizuma/items/a8b5e2b22708b43216d4)

## 素因数分解
入力された数値を素因数分解するプログラムです。
~~~ruby
# --- prime_factorization.rb --- #
num = 0
prime_list = []

while true do
  print "素因数分解したい整数を入力してください："
  num = gets.to_i
  if num < 2
    puts "2以上の整数にしてください!"
  else
    break
  end
end

i = 0
print "#{num} = "
for i in 2..num
  while num % i == 0
    num /= i
    prime_list << i
  end
end

puts prime_list.join(" * ")
~~~
<u>参考</u><br />
- [C言語で素因数分解
](https://qiita.com/Wakaba_C/items/16d076ef2cc07836a29d)<br />
- [配列の要素を連結して文字列化する](http://rubytips86.hatenablog.com/entry/2014/03/25/141326)

## 終わりに

アルゴリズムについてもしっかり理解して、効率の良いコードを書いていきたいです。
