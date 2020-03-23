# The block is just an argument of the method!!!!
def my_yield_method
  puts "Here we are inside the method."

  sleep(2)

  puts "Going to the block of code passed as an argument."

  sleep(2)

  message = yield

  puts "Now we are back inside the method."

  sleep(2)

  puts "You wrote: #{message}"
end

my_yield_method do
  "Ola turma 354"
end
