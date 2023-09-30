# Type annotations vs Type inference
## Type inference
Use always if possible

## Type annotations
Use when:
- we declare a variable on one line then initialize it later
- we want a variable to have a type that can't be inferred
- a function returns the "any" type and we need to clarify the value

# Classes
## Methods
- public: this method can be called any where, any time
- private: this method can only be called by other methods in this class
- protected: this method can be called by other methods in this class, or by other methods in child classes.