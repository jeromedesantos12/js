// operator aritmatika
1+2*3-4
3

(1+2)*3-4 // KuKaBaTaKu () * / + -
5

// operator penugasan (assigment)
var x
x = 10
10

x += 5
15

// operator perbandingan (comparison)
10 == 10
true

10 == 15
false

10 != 10
false

10 != 15
true

// perbedaan dengan strict
10 == 10
true

10 == "10"
true // padahal tipe datanya beda

// strict (operator identitas) : untuk membandingkan nilai dan tipe data
10 === "10"
false

// operator logika (logical)
x = 5
(x % 2 == 0)
false

x = 12
(x % 2 == 0)
true

(x % 2 == 0) && (x < 10)
false

x = 8
8

(x % 2 == 0) && (x < 10)
true

(x % 2 == 0) || (x < 10)
true

x = 12
(x % 2 == 0) || (x < 10)
true

x = 10
10

(x < 20)
true

!(x < 20)
false

// operator string (+)
a = apple
b = pen

a + b
"applepen" 

a + " " + b
"apple pen" 

10 + "10"
"1010"

"10" + 10
"1010"

10 + 10 + "10"
"2010"

"10" + 10 + 10
"101010"

// operator typeof
typeof(10)
"number"

typeof("10")
"string"

typeof(true)
"boolean"

// operator kondisional
(x % 2 == 0) ? "genap" : "ganjil"
