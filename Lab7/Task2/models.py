class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color
    
    def speak(self):
        return "Some generic animal sound"
    
    def info(self):
        return f"{self.name} is a {self.color} animal, {self.age} years old."
    
    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, color={self.color})"



class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed
    
    def speak(self):
        return "Woof!"
    
    def wag_tail(self):
        return f"{self.name} is wagging its tail."
    
    def __str__(self):
        return f"Dog(name={self.name}, age={self.age}, color={self.color}, breed={self.breed})"



class Cat(Animal):
    def __init__(self, name, age, color, indoor):
        super().__init__(name, age, color)
        self.indoor = indoor
    
    def speak(self):
        return "Meow!"
    
    def purr(self):
        return f"{self.name} is purring."
    
    def __str__(self):
        indoor_str = "indoor" if self.indoor else "outdoor"
        return f"Cat(name={self.name}, age={self.age}, color={self.color}, type={indoor_str})"