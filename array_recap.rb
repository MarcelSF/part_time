# 1. Define an array
empty_array = []                        # an empty array
bands_array = ["Metallica", "Led Zeppelin", "Black Sabbath"]

p empty_array
# 2. Get an element with its index
p bands_array[0]
# 3. Modify an element
bands_array[0] = "Red Hot Chilli Peppers"
# 4. Append an element
bands_array << "SPC"

puts "My current array"

# 5. Delete an element
# By element:
bands_array.delete_at(0)
# By index:

# 6. Loop on elements (hint: use each)
# bands_array.each do |band|
#   puts band
# end

# 7. Look in the doc and test methods with students, example:
p bands_array.join(" and ")

bands_array






