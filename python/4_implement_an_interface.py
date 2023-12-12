from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def bark(self) -> str:
        pass

class Dog(Animal):
    def bark(self) -> str:
        return "woof"

class Cat(Animal):
    def bark(self) -> str:
        return "meow"

print(f"The dog says '{Dog().bark()}'")
print(f"The cat says '{Cat().bark()}'")
