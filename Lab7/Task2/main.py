from models import Animal, Dog, Cat

def main():
    # Create a list of animals (polymorphism)
    animals = [
        Dog("Buddy", 3, "golden", "Golden Retriever"),
        Cat("Whiskers", 5, "black", True),
        Dog("Max", 2, "brown", "Beagle"),
        Cat("Luna", 1, "white", False)
    ]
    
    # Iterate over the list and demonstrate polymorphism
    for animal in animals:
        print(animal)                # Uses __str__ (polymorphic)
        print(animal.info())          # Inherited method
        print(f"Sound: {animal.speak()}")  # Overridden method (polymorphism)
        
        # Check specific type to call unique methods
        if isinstance(animal, Dog):
            print(animal.wag_tail())
        elif isinstance(animal, Cat):
            print(animal.purr())
        
        print("-" * 30)

if __name__ == "__main__":
    main()