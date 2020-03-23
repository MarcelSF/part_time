choice = ""

until (choice == "heads") || (choice == "tails")
  puts "heads or tails?"
  choice = gets.chomp
  p choice
end

coin = ["heads", "tails"].sample

result = coin == choice ? "you win" : "you lose"

p result
