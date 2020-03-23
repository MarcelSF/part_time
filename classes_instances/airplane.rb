class Airplane
  attr_accessoro :maker
  attr_writer :crew
  def initialize()
    @maker = 'Boeing'
    @speed = 1000
    @crew = 5
    @flying = false
  end

  def take_off
    puts '---- Taking off! Away we go! ----'
    @flying = true
  end
end

# add an instance variable to the plane (@flying)

# code an instance method to fly the plane

# add a getter(reader) to get the maker of the plane (start with the long_way then the easy way)

# add a setter (writer) to change the crew of the plane




















  # def crew=(new_crew)
  #   @crew = new_crew.to_i
  # end
