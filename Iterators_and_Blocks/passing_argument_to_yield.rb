def complex_yield(element)
  # If I want to send my arguments to the block of code,
  # I must pass it as an argument to the yield
  puts "You passed \"#{element}\" as an argument."
  sleep(2)
  puts "Passing the argument to the block"
  sleep(2)
  result = yield(element)

  puts "The block changed it to \"#{result}\"."
end

complex_yield("artur pedrosa") do |name|
  name.upcase
end
