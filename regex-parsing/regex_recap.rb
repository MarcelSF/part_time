# REGEX has it's own class in Ruby!

p /^\+\d{2}\s\d{2}\s\d{4}\s\d{4}$/.class # -> This is a regex

p my_regex = /[+]5{2}\s21\s9{1}\d{4}\s\d{4}/ # -> Regex for a Brazilian cellphone number

puts '+55 21 98877 6655'.match?(my_regex)
