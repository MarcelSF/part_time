require 'nokogiri'
# require 'open-uri'

file = 'fraise.html'  # or 'strawberry.html'
doc = Nokogiri::HTML(File.open(file), nil, 'utf-8')

doc.search('.recipe-card__title')[0..4].each do |element|
  p element.text.strip
end
