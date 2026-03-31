from models import Animal, Dog, Cat

def main():
    animals = [
        Dog("Buddy", 3, "golden", "Golden Retriever"),
        Cat("Whiskers", 5, "black", True),
        Dog("Max", 2, "brown", "Beagle"),
        Cat("Luna", 1, "white", False)
    ]
    
    for animal in animals:
        print(animal)         
        print(animal.info())        
        print(f"Sound: {animal.speak()}") 
        
        if isinstance(animal, Dog):
            print(animal.wag_tail())
        elif isinstance(animal, Cat):
            print(animal.purr())
        
        print("-" * 30)

if __name__ == "__main__":
    main()