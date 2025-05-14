## Blog Post 1: Interface vs Type - What's the difference?

#### I Explore the key difference between `interface` and `type` in typescript, complete with examples, use cases and best practices
---

### 1 Basic Usage
Both interface and type can be used to define the shape of an object.

Using interface:
```ts
interface User {
  name: string;
  age: number;
}

Using type:
type User = {
  name: string;
  age: number;
}
They both do the same thing here.