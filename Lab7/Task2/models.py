class Animal:
    """Base class representing an animal."""
    
    def __init__(self, name, age, color):
        """Constructor with name, age, and color attributes."""
        self.name = name
        self.age = age
        self.color = color
    
    def speak(self):
        """Generic speak method to be overridden by child classes."""
        return "Some generic animal sound"
    
    def info(self):
        """Return a string with basic information about the animal."""
        return f"{self.name} is a {self.color} animal, {self.age} years old."
    
    def __str__(self):
        """String representation of the animal."""
        return f"Animal(name={self.name}, age={self.age}, color={self.color})"


class Dog(Animal):
    """Child class representing a dog."""
    
    def __init__(self, name, age, color, breed):
        """Add breed attribute specific to dogs."""
        super().__init__(name, age, color)
        self.breed = breed
    
    def speak(self):
        """Override speak method for dog."""
        return "Woof!"
    
    def wag_tail(self):
        """Unique method for dogs."""
        return f"{self.name} is wagging its tail."
    
    def __str__(self):
        """Override string representation to include breed."""
        return f"Dog(name={self.name}, age={self.age}, color={self.color}, breed={self.breed})"


class Cat(Animal):
    """Child class representing a cat."""
    
    def __init__(self, name, age, color, indoor):
        """Add indoor attribute (boolean) specific to cats."""
        super().__init__(name, age, color)
        self.indoor = indoor
    
    def speak(self):
        """Override speak method for cat."""
        return "Meow!"
    
    def purr(self):
        """Unique method for cats."""
        return f"{self.name} is purring."
    
    def __str__(self):
        """Override string representation to include indoor status."""
        indoor_str = "indoor" if self.indoor else "outdoor"
        return f"Cat(name={self.name}, age={self.age}, color={self.color}, type={indoor_str})"