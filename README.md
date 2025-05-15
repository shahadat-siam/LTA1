## Blog Post 1: Interface vs Type - What's the difference?

#### I Explore the key difference between `interface` and `type` in typescript, complete with examples, use cases and best practices

---

### 1. Basic Usage
Both interface and type can be used to define the shape of an object.

#### Using interface:
```ts
interface User {
  name: string;
  age: number;
}
```
#### Using type:
```ts
type User = {
  name: string;
  age: number;
}
```
They both do the same thing here.


### 2. Extending and Reusability

#### Interfaces:
Interfaces support extends.
``` ts
interface Person {
  name: string;
}

interface Employee extends Person {
  jobTitle: string;
}
```
#### Types:
Types use & (intersection) to combine types.
``` ts
type Person = {
  name: string;
};

type Employee = Person & {
  jobTitle: string;
};
```
Both work well, but interface is cleaner when working with object inheritance.
 


### 3. Declaration Merging
Only `interface` supports declaration merging.
``` ts
interface Car {
  wheels: number;
}

interface Car {
  color: string;
}

const myCar: Car = {
  wheels: 4,
  color: "blue",
};
```
If you try this with type, it will throw an error. 
 

### 4. Using type with a Union & tuple
only `type` have this oportunity 
``` ts
type ID = number | string;  
type Point = [number, number]; 
```
You can’t do this with interface. 

--- 

### Which One Should You Use?

#### When to use `interface :`

- You’re defining object shapes.

- You want to extend or merge types.

- You're working with classes or libraries.

#### When to use `type :`

- You need to use union, intersection, tuples, or primitives.

- You want more flexibility in defining types.


### Final Thoughts

Both interface and type are powerful tools in TypeScript. While they have similarities, they also have unique features that make them better suited for specific use cases. Understanding their differences helps you write cleaner, scalable, and more maintainable code.

---





## Blog Post 2: Understanding Union and Intersection Types in TypeScript
#### Typescripts has many features, `union` and `intersection` types help you write flexible yet safe code. Let’s dive into what they are and how you can use them effectively.


### Union Types (|):

Union types allow a variable to hold more than one type. This is useful when a value can be one of several types.

``` ts
type Status = "success" | "error" | "loading";

function showStatus(status: Status) {
  console.log("Current status:", status);
}

showStatus("success"); 
showStatus("error");
```


### Intersection Types (&)

Intersection types combine multiple types into one. The resulting type has all properties from the combined types.

``` ts
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Alice",
  age: 30,
  employeeId: 101,
  department: "Engineering"
};

console.log(staffMember);
