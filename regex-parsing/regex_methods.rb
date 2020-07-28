# REGEX METHODS

# match?(regex)

my_regex = /[+]5{2}\s21\s9{1}\d{4}\s\d{4}/

phone_number = '+55 21 98877 6655'

if phone_number.match?(my_regex)
  puts "This is a valid Brazilian international phone number! Welcome to Rio!"
else
  puts "It's not valid! Better buy a local SIM card!"
end

# match(regex) -> creates capture groups for you (MatchData class)
# Define the groups between parentheses!
pattern = /([+]5{2}\s21)\s(9{1}\d{4}\s\d{4})/

match_data = phone_number.match(pattern)


# puts "This is the first half: #{match_data[1]}"
# puts "This is the second half: #{match_data[2]}"


# You can name your match-data results

updated_regex = /(?<country_code>[+]5{2})\s(?<state_code>21)\s(?<phone_number>9{1}\d{4}\s\d{4})/

match_data = phone_number.match(updated_regex)

# p match_data
# p match_data[:country_code]
# p match_data[:state_code]
# p match_data[:phone_number]


# =~ -> Returns the position of the match

text = "Musashi, as he was often simply known,
became renowned through stories of his unique double-bladed swordsmanship
and undefeated record in his 61 duels (next is 33 by Itō Ittōsai).
"


# p text =~ /swordsmanship/       #=> 27 -> The **position** of the match
# p text =~ /\AMusashi/
# p text =~ /became/
# p text =~ /\d{2}/ # -> 61
# p text =~ /33/ # -> 33



# scan() -> returns all matched elements in an array

scan_result = "Let's play tic tac toe".scan(/t../)

# p scan_result

new_scan_result = "Let's play tic tac toe".scan(/\bt../)

# p new_scan_result



# gsub() -> Substitutes what it matched with by the second argument in the method call.

"hello guys".gsub(/g.{3}/, 'le wagon')
#=> "hello le wagon"
"hello guys".gsub(/^(\w+) (\w+)$/, 'Oh \2, \1!') # -> Similar to match, you can use the MatchData to organize the substitution
#=> "Oh guys, hello!"







