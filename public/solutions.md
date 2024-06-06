<details>
    <summary><h3>Factory Method Design Pattern</h3></summary>

**Problem Statement Recap:**
You need to create objects without specifying the exact class of the object that will be created. This is particularly useful when the exact type of the object isn't known until runtime.

**Solution Steps:**

1. **Define a Product Interface:**

   - Create an interface that defines the common behavior for the objects that will be created by the factory method.

2. **Implement Concrete Products:**

   - Implement the concrete classes that conform to the product interface.

3. **Define a Creator Class:**

   - Create an abstract class or interface that declares the factory method, which returns an object of the product interface type.

4. **Implement Concrete Creators:**

   - Implement concrete creator classes that override the factory method to return instances of concrete products.

5. **Client Code:**
   - The client code calls the factory method on the creator class to get an instance of the product.

**Pseudo Code Example:**

```pseudo
// Step 1: Define a Product Interface
interface Product {
    methodA();
    methodB();
}

// Step 2: Implement Concrete Products
class ConcreteProduct1 implements Product {
    methodA() {
        // Implementation of methodA for ConcreteProduct1
    }

    methodB() {
        // Implementation of methodB for ConcreteProduct1
    }
}

class ConcreteProduct2 implements Product {
    methodA() {
        // Implementation of methodA for ConcreteProduct2
    }

    methodB() {
        // Implementation of methodB for ConcreteProduct2
    }
}

// Step 3: Define a Creator Class
abstract class Creator {
    // Factory Method
    abstract createProduct(): Product;

    someOperation() {
        // Call the factory method to create a Product object
        Product product = createProduct();
        // Use the product
        product.methodA();
    }
}

// Step 4: Implement Concrete Creators
class ConcreteCreator1 extends Creator {
    createProduct(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    createProduct(): Product {
        return new ConcreteProduct2();
    }
}

// Step 5: Client Code
function clientCode(creator: Creator) {
    // Use the creator to get a product
    creator.someOperation();
}

// Usage
creator1 = new ConcreteCreator1();
clientCode(creator1); // Will create and use ConcreteProduct1

creator2 = new ConcreteCreator2();
clientCode(creator2); // Will create and use ConcreteProduct2
```

<details>
    <summary><h3>Steps Explained:</h3></summary>

1. **Define a Product Interface:**

   - Create a `Product` interface that declares the methods `methodA` and `methodB`.

2. **Implement Concrete Products:**

   - Implement `ConcreteProduct1` and `ConcreteProduct2` classes that provide specific implementations for the methods declared in the `Product` interface.

3. **Define a Creator Class:**

   - Create an abstract `Creator` class that declares the `createProduct` factory method. This method will return a `Product` object. The `someOperation` method uses the `createProduct` method to create a product and then perform operations on it.

4. **Implement Concrete Creators:**

   - Implement `ConcreteCreator1` and `ConcreteCreator2` classes that override the `createProduct` method to return instances of `ConcreteProduct1` and `ConcreteProduct2`, respectively.

5. **Client Code:**

   - The client code calls the `someOperation` method on the creator object. Depending on which concrete creator is used (`ConcreteCreator1` or `ConcreteCreator2`), it will create and use either `ConcreteProduct1` or `ConcreteProduct2`.

   </details>
</details>

---

### Abstract Factory Design Pattern

**Problem Statement Recap:**
You need to create families of related or dependent objects without specifying their concrete classes. This is particularly useful when the system needs to be independent of how its objects are created, composed, and represented.

**Solution Steps:**

1. **Define Abstract Product Interfaces:**

   - Create interfaces for each type of product in the family.

2. **Implement Concrete Products:**

   - Implement the concrete classes that conform to each product interface.

3. **Define an Abstract Factory Interface:**

   - Create an interface that declares factory methods for creating each type of product.

4. **Implement Concrete Factories:**

   - Implement concrete factory classes that override the factory methods to return instances of concrete products.

5. **Client Code:**
   - The client code uses the abstract factory to create families of related objects.

**Pseudo Code Example:**

```pseudo
// Step 1: Define Abstract Product Interfaces
interface AbstractProductA {
    methodA();
}

interface AbstractProductB {
    methodB();
}

// Step 2: Implement Concrete Products
class ConcreteProductA1 implements AbstractProductA {
    methodA() {
        // Implementation of methodA for ConcreteProductA1
    }
}

class ConcreteProductA2 implements AbstractProductA {
    methodA() {
        // Implementation of methodA for ConcreteProductA2
    }
}

class ConcreteProductB1 implements AbstractProductB {
    methodB() {
        // Implementation of methodB for ConcreteProductB1
    }
}

class ConcreteProductB2 implements AbstractProductB {
    methodB() {
        // Implementation of methodB for ConcreteProductB2
    }
}

// Step 3: Define an Abstract Factory Interface
interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}

// Step 4: Implement Concrete Factories
class ConcreteFactory1 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

class ConcreteFactory2 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}

// Step 5: Client Code
function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    // Use the products
    productA.methodA();
    productB.methodB();
}

// Usage
factory1 = new ConcreteFactory1();
clientCode(factory1); // Will create and use ConcreteProductA1 and ConcreteProductB1

factory2 = new ConcreteFactory2();
clientCode(factory2); // Will create and use ConcreteProductA2 and ConcreteProductB2
```

### Steps Explained:

1. **Define Abstract Product Interfaces:**

   - Create `AbstractProductA` and `AbstractProductB` interfaces that declare methods for the products in the family.

2. **Implement Concrete Products:**

   - Implement `ConcreteProductA1`, `ConcreteProductA2`, `ConcreteProductB1`, and `ConcreteProductB2` classes that provide specific implementations for the methods declared in the product interfaces.

3. **Define an Abstract Factory Interface:**

   - Create an `AbstractFactory` interface that declares factory methods `createProductA` and `createProductB`. These methods will return `AbstractProductA` and `AbstractProductB` objects, respectively.

4. **Implement Concrete Factories:**

   - Implement `ConcreteFactory1` and `ConcreteFactory2` classes that override the factory methods to return instances of the respective concrete products (`ConcreteProductA1`, `ConcreteProductA2`, `ConcreteProductB1`, and `ConcreteProductB2`).

5. **Client Code:**
   - The client code calls the factory methods on the `AbstractFactory` object to create families of related products. Depending on which concrete factory is used (`ConcreteFactory1` or `ConcreteFactory2`), it will create and use different combinations of product families.

---

### Builder Design Pattern

**Problem Statement Recap:**
You need to construct a complex object step by step, allowing for more flexibility in the creation process and ensuring that the final object is consistent and complete. This is particularly useful when constructing objects with many parts or options.

**Solution Steps:**

1. **Define a Product Class:**

   - Create a class that represents the complex object to be built. This class should have fields for the various parts or options.

2. **Define a Builder Interface:**

   - Create an interface that declares the methods for creating the different parts of the product.

3. **Implement Concrete Builders:**

   - Implement concrete builder classes that provide specific implementations for the methods declared in the builder interface.

4. **Define a Director Class:**

   - Create a director class that uses a builder to construct the product step by step. The director class controls the construction process.

5. **Client Code:**
   - The client code creates a builder and passes it to the director. The director then constructs the product using the builder.

**Pseudo Code Example:**

```pseudo
// Step 1: Define a Product Class
class Product {
    partA: string;
    partB: string;
    partC: string;

    show() {
        // Display the product parts
        print("PartA: " + partA);
        print("PartB: " + partB);
        print("PartC: " + partC);
    }
}

// Step 2: Define a Builder Interface
interface Builder {
    buildPartA();
    buildPartB();
    buildPartC();
    getResult(): Product;
}

// Step 3: Implement Concrete Builders
class ConcreteBuilder1 implements Builder {
    private product: Product = new Product();

    buildPartA() {
        product.partA = "PartA1";
    }

    buildPartB() {
        product.partB = "PartB1";
    }

    buildPartC() {
        product.partC = "PartC1";
    }

    getResult(): Product {
        return product;
    }
}

class ConcreteBuilder2 implements Builder {
    private product: Product = new Product();

    buildPartA() {
        product.partA = "PartA2";
    }

    buildPartB() {
        product.partB = "PartB2";
    }

    buildPartC() {
        product.partC = "PartC2";
    }

    getResult(): Product {
        return product;
    }
}

// Step 4: Define a Director Class
class Director {
    private builder: Builder;

    setBuilder(builder: Builder) {
        this.builder = builder;
    }

    construct() {
        builder.buildPartA();
        builder.buildPartB();
        builder.buildPartC();
    }
}

// Step 5: Client Code
function clientCode() {
    const director = new Director();

    const builder1 = new ConcreteBuilder1();
    director.setBuilder(builder1);
    director.construct();
    const product1 = builder1.getResult();
    product1.show(); // Displays parts built by ConcreteBuilder1

    const builder2 = new ConcreteBuilder2();
    director.setBuilder(builder2);
    director.construct();
    const product2 = builder2.getResult();
    product2.show(); // Displays parts built by ConcreteBuilder2
}

// Usage
clientCode();
```

### Steps Explained:

1. **Define a Product Class:**

   - Create a `Product` class with fields `partA`, `partB`, and `partC` representing the different parts of the product. Include a `show` method to display the product parts.

2. **Define a Builder Interface:**

   - Create a `Builder` interface that declares methods `buildPartA`, `buildPartB`, `buildPartC`, and `getResult`. These methods define the steps to build the product and retrieve the final product.

3. **Implement Concrete Builders:**

   - Implement `ConcreteBuilder1` and `ConcreteBuilder2` classes that provide specific implementations for the methods declared in the `Builder` interface. Each builder class maintains an instance of the `Product` class and constructs the product step by step.

4. **Define a Director Class:**

   - Create a `Director` class that controls the construction process. The `Director` class has a `setBuilder` method to set the builder and a `construct` method that calls the builder's methods to build the product step by step.

5. **Client Code:**
   - The client code creates instances of the `Director` and concrete builders. It sets the builder in the director and calls the `construct` method to build the product. The client then retrieves the final product using the builder's `getResult` method and displays it.

---

### Prototype Design Pattern

**Problem Statement Recap:**
You need to create new objects by copying existing ones, which is particularly useful when creating objects from scratch is costly or complex. This allows you to clone existing objects instead of instantiating new ones.

**Solution Steps:**

1. **Define a Prototype Interface:**

   - Create an interface that declares a method for cloning objects.

2. **Implement Concrete Prototypes:**

   - Implement concrete classes that conform to the prototype interface and provide specific implementations for the cloning method.

3. **Client Code:**
   - The client code uses the prototype interface to clone objects, rather than creating new instances directly.

**Pseudo Code Example:**

```pseudo
// Step 1: Define a Prototype Interface
interface Prototype {
    clone(): Prototype;
}

// Step 2: Implement Concrete Prototypes
class ConcretePrototype1 implements Prototype {
    field1: string;
    field2: number;

    constructor(field1: string, field2: number) {
        this.field1 = field1;
        this.field2 = field2;
    }

    clone(): Prototype {
        return new ConcretePrototype1(this.field1, this.field2);
    }
}

class ConcretePrototype2 implements Prototype {
    fieldA: string;
    fieldB: boolean;

    constructor(fieldA: string, fieldB: boolean) {
        this.fieldA = fieldA;
        this.fieldB = fieldB;
    }

    clone(): Prototype {
        return new ConcretePrototype2(this.fieldA, this.fieldB);
    }
}

// Step 3: Client Code
function clientCode() {
    const prototype1 = new ConcretePrototype1("Prototype1", 123);
    const clone1 = prototype1.clone();
    print(clone1); // Output: ConcretePrototype1 { field1: "Prototype1", field2: 123 }

    const prototype2 = new ConcretePrototype2("Prototype2", true);
    const clone2 = prototype2.clone();
    print(clone2); // Output: ConcretePrototype2 { fieldA: "Prototype2", fieldB: true }
}

// Usage
clientCode();
```

### Steps Explained:

1. **Define a Prototype Interface:**

   - Create a `Prototype` interface that declares a `clone` method. This method will be used to clone objects.

2. **Implement Concrete Prototypes:**

   - Implement `ConcretePrototype1` and `ConcretePrototype2` classes that conform to the `Prototype` interface. Each class provides specific implementations for the `clone` method, which creates and returns a new instance of the class with the same state as the original object.

3. **Client Code:**
   - The client code creates instances of concrete prototypes and then clones them using the `clone` method. The cloned objects have the same state as the original prototypes.

**Additional Example with Shallow and Deep Copy:**

- **Shallow Copy:** The clone method creates a new object but does not clone the objects that the original object references.
- **Deep Copy:** The clone method creates a new object and also clones all objects referenced by the original object.

```pseudo
// Shallow Copy Example
class ShallowCopyPrototype implements Prototype {
    field1: string;
    nestedObject: SomeObject;

    constructor(field1: string, nestedObject: SomeObject) {
        this.field1 = field1;
        this.nestedObject = nestedObject;
    }

    clone(): Prototype {
        return new ShallowCopyPrototype(this.field1, this.nestedObject); // Shallow copy
    }
}

// Deep Copy Example
class DeepCopyPrototype implements Prototype {
    field1: string;
    nestedObject: SomeObject;

    constructor(field1: string, nestedObject: SomeObject) {
        this.field1 = field1;
        this.nestedObject = nestedObject;
    }

    clone(): Prototype {
        return new DeepCopyPrototype(this.field1, this.nestedObject.clone()); // Deep copy
    }
}

// SomeObject class that implements Prototype
class SomeObject implements Prototype {
    data: string;

    constructor(data: string) {
        this.data = data;
    }

    clone(): Prototype {
        return new SomeObject(this.data); // Deep copy
    }
}
```

In this extended example, `ShallowCopyPrototype` creates a shallow copy, whereas `DeepCopyPrototype` creates a deep copy by also cloning the `nestedObject`.

---

### Singleton Design Pattern

**Problem Statement Recap:**
You need to ensure a class has only one instance and provide a global point of access to that instance. This is particularly useful for managing shared resources, configuration settings, or any other type of data that needs to be globally accessible and consistent.

**Solution Steps:**

1. **Private Constructor:**

   - Ensure that the class constructor is private to prevent direct instantiation.

2. **Static Variable:**

   - Declare a static variable to hold the single instance of the class.

3. **Public Static Method:**
   - Provide a public static method that returns the instance of the class. This method creates the instance if it does not exist and returns the existing instance if it does.

**Pseudo Code Example:**

```pseudo
// Step 1: Private Constructor
class Singleton {
    private static instance: Singleton;

    // Private constructor to prevent instantiation
    private constructor() {
        // Initialization code
    }

    // Step 3: Public Static Method
    public static getInstance(): Singleton {
        if (this.instance == null) {
            this.instance = new Singleton();
        }
        return this.instance;
    }

    // Example method
    public someBusinessLogic() {
        // Business logic implementation
    }
}

// Step 4: Client Code
function clientCode() {
    const singleton1 = Singleton.getInstance();
    const singleton2 = Singleton.getInstance();

    if (singleton1 === singleton2) {
        print("Both variables contain the same instance.");
    } else {
        print("Variables contain different instances.");
    }

    singleton1.someBusinessLogic();
}

// Usage
clientCode();  // Output: Both variables contain the same instance.
```

### Steps Explained:

1. **Private Constructor:**

   - The `Singleton` class has a private constructor to prevent the creation of instances from outside the class. This ensures that the class can only be instantiated from within the class itself.

2. **Static Variable:**

   - The `instance` static variable holds the single instance of the `Singleton` class. This variable is initialized to `null` and will be assigned the single instance when `getInstance` is first called.

3. **Public Static Method:**

   - The `getInstance` method is a public static method that returns the single instance of the `Singleton` class. If the instance does not exist (`null`), it creates a new instance. If it does exist, it returns the existing instance.

4. **Client Code:**
   - The client code calls `Singleton.getInstance()` to get the single instance of the `Singleton` class. It then checks if two variables hold the same instance and calls a method on the singleton instance.

**Thread-Safe Singleton Implementation:**

To make the singleton thread-safe, especially in multi-threaded applications, you can use synchronized methods or double-checked locking.

```pseudo
// Thread-Safe Singleton with Synchronized Method
class ThreadSafeSingleton {
    private static instance: ThreadSafeSingleton;

    // Private constructor to prevent instantiation
    private constructor() {
        // Initialization code
    }

    // Public static method with synchronized block
    public static getInstance(): ThreadSafeSingleton {
        synchronized(this) {
            if (this.instance == null) {
                this.instance = new ThreadSafeSingleton();
            }
        }
        return this.instance;
    }

    // Example method
    public someBusinessLogic() {
        // Business logic implementation
    }
}

// Thread-Safe Singleton with Double-Checked Locking
class DoubleCheckedLockingSingleton {
    private static instance: DoubleCheckedLockingSingleton;
    private static lock = new Object();

    // Private constructor to prevent instantiation
    private constructor() {
        // Initialization code
    }

    // Public static method with double-checked locking
    public static getInstance(): DoubleCheckedLockingSingleton {
        if (this.instance == null) {
            synchronized(lock) {
                if (this.instance == null) {
                    this.instance = new DoubleCheckedLockingSingleton();
                }
            }
        }
        return this.instance;
    }

    // Example method
    public someBusinessLogic() {
        // Business logic implementation
    }
}
```

In these examples, `ThreadSafeSingleton` uses a synchronized block to ensure thread safety, and `DoubleCheckedLockingSingleton` uses double-checked locking to minimize synchronization overhead.

---

### Adapter Design Pattern

**Problem Statement Recap:**
You need to allow objects with incompatible interfaces to work together. This is particularly useful when you need to integrate new functionality with existing systems or reuse existing classes that don't match the required interface.

**Solution Steps:**

1. **Define Target Interface:**

   - Create an interface that the client expects.

2. **Implement Adaptee Class:**

   - Implement the existing class that needs to be adapted.

3. **Implement Adapter Class:**

   - Create an adapter class that implements the target interface and holds a reference to an instance of the adaptee. Implement the methods of the target interface in the adapter to delegate calls to the adaptee.

4. **Client Code:**
   - The client uses the adapter class to interact with the adaptee through the target interface.

**Pseudo Code Example:**

```pseudo
// Step 1: Define Target Interface
interface Target {
    request(): void;
}

// Step 2: Implement Adaptee Class
class Adaptee {
    specificRequest(): void {
        // Implementation of specificRequest
        print("Adaptee: specificRequest called");
    }
}

// Step 3: Implement Adapter Class
class Adapter implements Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        this.adaptee = adaptee;
    }

    request(): void {
        // Delegating call to the adaptee's specificRequest method
        this.adaptee.specificRequest();
    }
}

// Step 4: Client Code
function clientCode(target: Target) {
    // Using the target interface to call the request method
    target.request();
}

// Usage
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
clientCode(adapter);  // Output: Adaptee: specificRequest called
```

### Steps Explained:

1. **Define Target Interface:**

   - Create a `Target` interface with a method `request` that the client expects. This defines the interface that the client code will use.

2. **Implement Adaptee Class:**

   - Implement the `Adaptee` class with a method `specificRequest`. This class has an existing interface that needs to be adapted to the `Target` interface.

3. **Implement Adapter Class:**

   - Create an `Adapter` class that implements the `Target` interface and holds a reference to an instance of the `Adaptee` class. Implement the `request` method in the `Adapter` to delegate the call to the `Adaptee`'s `specificRequest` method.

4. **Client Code:**
   - The client code interacts with the `Target` interface. It calls the `request` method on the adapter, which in turn calls the `specificRequest` method on the adaptee.

**Additional Example: Adapting Different APIs**

Imagine you have two different payment processing APIs that you need to integrate into your application. Each API has a different interface. You can use the Adapter pattern to create a uniform interface for both.

```pseudo
// Target Interface for Payment Processing
interface PaymentProcessor {
    processPayment(amount: number): void;
}

// Adaptee 1: Old Payment System
class OldPaymentSystem {
    makePayment(amount: number): void {
        // Implementation for making payment in the old system
        print("OldPaymentSystem: Processing payment of " + amount);
    }
}

// Adaptee 2: New Payment System
class NewPaymentSystem {
    sendPayment(amount: number): void {
        // Implementation for sending payment in the new system
        print("NewPaymentSystem: Sending payment of " + amount);
    }
}

// Adapter for Old Payment System
class OldPaymentAdapter implements PaymentProcessor {
    private oldPaymentSystem: OldPaymentSystem;

    constructor(oldPaymentSystem: OldPaymentSystem) {
        this.oldPaymentSystem = oldPaymentSystem;
    }

    processPayment(amount: number): void {
        this.oldPaymentSystem.makePayment(amount);
    }
}

// Adapter for New Payment System
class NewPaymentAdapter implements PaymentProcessor {
    private newPaymentSystem: NewPaymentSystem;

    constructor(newPaymentSystem: NewPaymentSystem) {
        this.newPaymentSystem = newPaymentSystem;
    }

    processPayment(amount: number): void {
        this.newPaymentSystem.sendPayment(amount);
    }
}

// Client Code
function clientCode(paymentProcessor: PaymentProcessor) {
    paymentProcessor.processPayment(100);
}

// Usage
const oldPaymentSystem = new OldPaymentSystem();
const oldPaymentAdapter = new OldPaymentAdapter(oldPaymentSystem);
clientCode(oldPaymentAdapter);  // Output: OldPaymentSystem: Processing payment of 100

const newPaymentSystem = new NewPaymentSystem();
const newPaymentAdapter = new NewPaymentAdapter(newPaymentSystem);
clientCode(newPaymentAdapter);  // Output: NewPaymentSystem: Sending payment of 100
```

In this extended example, `OldPaymentAdapter` and `NewPaymentAdapter` adapt the interfaces of `OldPaymentSystem` and `NewPaymentSystem` to the `PaymentProcessor` interface, allowing the client code to use them interchangeably.

---

### Bridge Design Pattern

**Problem Statement Recap:**
You need to decouple an abstraction from its implementation so that both can vary independently. This is particularly useful when you have multiple ways of implementing an abstraction and want to switch between implementations dynamically.

**Solution Steps:**

1. **Define Abstraction Interface:**

   - Create an interface or abstract class for the abstraction that declares methods that the client will use.

2. **Implement Refined Abstractions:**

   - Create concrete classes that extend the abstraction interface or abstract class.

3. **Define Implementor Interface:**

   - Create an interface for the implementor that declares methods to be implemented by the concrete implementors.

4. **Implement Concrete Implementors:**

   - Implement concrete classes that conform to the implementor interface.

5. **Associate Implementor with Abstraction:**

   - Modify the abstraction to include a reference to an implementor object. Implement methods in the abstraction that delegate calls to the implementor.

6. **Client Code:**
   - The client interacts with the abstraction, which in turn delegates the operations to the implementor.

**Pseudo Code Example:**

```pseudo
// Step 1: Define Abstraction Interface
abstract class Abstraction {
    protected implementor: Implementor;

    constructor(implementor: Implementor) {
        this.implementor = implementor;
    }

    abstract operation(): void;
}

// Step 2: Implement Refined Abstractions
class RefinedAbstraction extends Abstraction {
    operation(): void {
        // Delegating the implementation to the implementor
        this.implementor.operationImpl();
    }
}

// Step 3: Define Implementor Interface
interface Implementor {
    operationImpl(): void;
}

// Step 4: Implement Concrete Implementors
class ConcreteImplementorA implements Implementor {
    operationImpl(): void {
        // Implementation for ConcreteImplementorA
        print("ConcreteImplementorA: operationImpl");
    }
}

class ConcreteImplementorB implements Implementor {
    operationImpl(): void {
        // Implementation for ConcreteImplementorB
        print("ConcreteImplementorB: operationImpl");
    }
}

// Step 5: Associate Implementor with Abstraction
// (Handled in the constructor of the Abstraction class)

// Step 6: Client Code
function clientCode(abstraction: Abstraction) {
    // Using the abstraction to call the operation
    abstraction.operation();
}

// Usage
const implementorA = new ConcreteImplementorA();
const abstractionA = new RefinedAbstraction(implementorA);
clientCode(abstractionA);  // Output: ConcreteImplementorA: operationImpl

const implementorB = new ConcreteImplementorB();
const abstractionB = new RefinedAbstraction(implementorB);
clientCode(abstractionB);  // Output: ConcreteImplementorB: operationImpl
```

### Steps Explained:

1. **Define Abstraction Interface:**

   - Create an abstract class `Abstraction` that declares an `operation` method. This class holds a reference to an `Implementor` object.

2. **Implement Refined Abstractions:**

   - Create a `RefinedAbstraction` class that extends `Abstraction` and implements the `operation` method by delegating the call to the `Implementor` object.

3. **Define Implementor Interface:**

   - Create an `Implementor` interface that declares the `operationImpl` method. This interface will be implemented by concrete implementors.

4. **Implement Concrete Implementors:**

   - Implement `ConcreteImplementorA` and `ConcreteImplementorB` classes that provide specific implementations for the `operationImpl` method.

5. **Associate Implementor with Abstraction:**

   - In the `Abstraction` class constructor, associate the `Implementor` object with the abstraction. The `operation` method in `RefinedAbstraction` calls the `operationImpl` method on the `Implementor`.

6. **Client Code:**
   - The client code interacts with the `Abstraction` object, which in turn delegates the operations to the `Implementor` object.

**Additional Example: Drawing Shapes**

Consider a scenario where you need to draw shapes using different drawing APIs. The Bridge pattern allows you to separate the shape abstraction from the drawing API implementation.

```pseudo
// Step 1: Define Abstraction Interface
abstract class Shape {
    protected renderer: Renderer;

    constructor(renderer: Renderer) {
        this.renderer = renderer;
    }

    abstract draw(): void;
}

// Step 2: Implement Refined Abstractions
class Circle extends Shape {
    private radius: number;

    constructor(renderer: Renderer, radius: number) {
        super(renderer);
        this.radius = radius;
    }

    draw(): void {
        this.renderer.renderCircle(this.radius);
    }
}

class Square extends Shape {
    private side: number;

    constructor(renderer: Renderer, side: number) {
        super(renderer);
        this.side = side;
    }

    draw(): void {
        this.renderer.renderSquare(this.side);
    }
}

// Step 3: Define Implementor Interface
interface Renderer {
    renderCircle(radius: number): void;
    renderSquare(side: number): void;
}

// Step 4: Implement Concrete Implementors
class VectorRenderer implements Renderer {
    renderCircle(radius: number): void {
        print("Drawing a circle with radius " + radius + " using VectorRenderer");
    }

    renderSquare(side: number): void {
        print("Drawing a square with side " + side + " using VectorRenderer");
    }
}

class RasterRenderer implements Renderer {
    renderCircle(radius: number): void {
        print("Drawing a circle with radius " + radius + " using RasterRenderer");
    }

    renderSquare(side: number): void {
        print("Drawing a square with side " + side + " using RasterRenderer");
    }
}

// Step 5: Associate Implementor with Abstraction
// (Handled in the constructor of the Shape class)

// Step 6: Client Code
function clientCode() {
    const vectorRenderer = new VectorRenderer();
    const rasterRenderer = new RasterRenderer();

    const circle = new Circle(vectorRenderer, 5);
    const square = new Square(rasterRenderer, 10);

    circle.draw();  // Output: Drawing a circle with radius 5 using VectorRenderer
    square.draw();  // Output: Drawing a square with side 10 using RasterRenderer
}

// Usage
clientCode();
```

In this example, the `Shape` abstraction is decoupled from the `Renderer` implementation, allowing you to mix and match shapes and rendering methods independently.

---

### Composite Design Pattern

**Problem Statement Recap:**
You need to work with tree structures of objects where individual objects and groups of objects need to be treated uniformly. This is particularly useful when dealing with hierarchical data structures.

**Solution Steps:**

1. **Define Component Interface:**

   - Create an interface that declares operations common to both simple and complex objects.

2. **Implement Leaf Class:**

   - Implement the leaf class that represents the end objects in a composition. A leaf cannot have any children.

3. **Implement Composite Class:**

   - Implement the composite class that represents complex components that may have children. This class implements the component interface and also maintains a collection of child components.

4. **Client Code:**
   - The client interacts with objects using the component interface. It treats both leaf and composite objects uniformly.

**Pseudo Code Example:**

```pseudo
// Step 1: Define Component Interface
interface Graphic {
    draw(): void;
}

// Step 2: Implement Leaf Class
class Circle implements Graphic {
    draw(): void {
        print("Drawing a Circle");
    }
}

class Square implements Graphic {
    draw(): void {
        print("Drawing a Square");
    }
}

// Step 3: Implement Composite Class
class CompositeGraphic implements Graphic {
    private children: List<Graphic> = new ArrayList<Graphic>();

    add(graphic: Graphic): void {
        children.add(graphic);
    }

    remove(graphic: Graphic): void {
        children.remove(graphic);
    }

    draw(): void {
        for each (child in children) {
            child.draw();
        }
    }
}

// Step 4: Client Code
function clientCode() {
    // Creating leaf objects
    const circle1 = new Circle();
    const circle2 = new Circle();
    const square1 = new Square();

    // Creating a composite object
    const composite1 = new CompositeGraphic();
    composite1.add(circle1);
    composite1.add(circle2);

    // Creating another composite object
    const composite2 = new CompositeGraphic();
    composite2.add(square1);
    composite2.add(composite1);

    // Client interacts with composite and leaf objects uniformly
    composite2.draw();
    // Output:
    // Drawing a Square
    // Drawing a Circle
    // Drawing a Circle
}

// Usage
clientCode();
```

### Steps Explained:

1. **Define Component Interface:**

   - Create a `Graphic` interface that declares a `draw` method. Both leaf and composite objects will implement this interface.

2. **Implement Leaf Class:**

   - Implement `Circle` and `Square` classes that represent simple graphic objects. Each class implements the `draw` method to perform its specific drawing operation.

3. **Implement Composite Class:**

   - Implement a `CompositeGraphic` class that represents a complex graphic object. This class implements the `Graphic` interface and maintains a collection of child `Graphic` objects. The `draw` method in `CompositeGraphic` iterates over its children and calls their `draw` methods.

4. **Client Code:**
   - The client code creates leaf objects and composite objects. It adds leaf objects to composite objects and composite objects to other composite objects, forming a tree structure. The client interacts with the composite structure using the `Graphic` interface, treating both individual and composite objects uniformly.

**Additional Example: File System**

Consider a scenario where you need to represent a file system with files and directories.

```pseudo
// Step 1: Define Component Interface
interface FileSystemComponent {
    showDetails(): void;
}

// Step 2: Implement Leaf Class
class File implements FileSystemComponent {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    showDetails(): void {
        print("File: " + name);
    }
}

// Step 3: Implement Composite Class
class Directory implements FileSystemComponent {
    private name: string;
    private children: List<FileSystemComponent> = new ArrayList<FileSystemComponent>();

    constructor(name: string) {
        this.name = name;
    }

    add(component: FileSystemComponent): void {
        children.add(component);
    }

    remove(component: FileSystemComponent): void {
        children.remove(component);
    }

    showDetails(): void {
        print("Directory: " + name);
        for each (child in children) {
            child.showDetails();
        }
    }
}

// Step 4: Client Code
function clientCode() {
    // Creating leaf objects (files)
    const file1 = new File("file1.txt");
    const file2 = new File("file2.jpg");
    const file3 = new File("file3.pdf");

    // Creating a composite object (directory)
    const dir1 = new Directory("dir1");
    dir1.add(file1);
    dir1.add(file2);

    // Creating another composite object (directory)
    const dir2 = new Directory("dir2");
    dir2.add(file3);
    dir2.add(dir1);

    // Client interacts with composite and leaf objects uniformly
    dir2.showDetails();
    // Output:
    // Directory: dir2
    // File: file3.pdf
    // Directory: dir1
    // File: file1.txt
    // File: file2.jpg
}

// Usage
clientCode();
```

In this example, the `FileSystemComponent` interface represents both files and directories. The `File` class represents individual files, and the `Directory` class represents directories that can contain both files and other directories. The client code interacts with the file system using the `FileSystemComponent` interface, treating files and directories uniformly.

---

### Decorator Design Pattern

**Problem Statement Recap:**
You need to add responsibilities to individual objects dynamically without affecting the behavior of other objects from the same class. This is particularly useful when you want to add or augment behavior to objects at runtime.

**Solution Steps:**

1. **Define Component Interface:**

   - Create an interface that defines the methods to be implemented by the base component and decorators.

2. **Implement Concrete Component:**

   - Implement the concrete class that conforms to the component interface. This class represents the core functionality.

3. **Implement Base Decorator:**

   - Create an abstract decorator class that implements the component interface and holds a reference to a component object. This class delegates the operations to the component.

4. **Implement Concrete Decorators:**

   - Implement concrete decorator classes that extend the base decorator class and add new behavior before or after calling the base component's methods.

5. **Client Code:**
   - The client code uses decorators to wrap components and can add multiple layers of decorators as needed.

**Pseudo Code Example:**

```pseudo
// Step 1: Define Component Interface
interface Component {
    operation(): void;
}

// Step 2: Implement Concrete Component
class ConcreteComponent implements Component {
    operation(): void {
        print("ConcreteComponent: operation");
    }
}

// Step 3: Implement Base Decorator
abstract class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    operation(): void {
        this.component.operation();
    }
}

// Step 4: Implement Concrete Decorators
class ConcreteDecoratorA extends Decorator {
    operation(): void {
        print("ConcreteDecoratorA: Before operation");
        super.operation();
        print("ConcreteDecoratorA: After operation");
    }
}

class ConcreteDecoratorB extends Decorator {
    operation(): void {
        print("ConcreteDecoratorB: Before operation");
        super.operation();
        print("ConcreteDecoratorB: After operation");
    }
}

// Step 5: Client Code
function clientCode(component: Component) {
    component.operation();
}

// Usage
const simple = new ConcreteComponent();
print("Client: I've got a simple component:");
clientCode(simple);
// Output:
// ConcreteComponent: operation

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
print("\nClient: Now I've got a decorated component:");
clientCode(decorator2);
// Output:
// ConcreteDecoratorB: Before operation
// ConcreteDecoratorA: Before operation
// ConcreteComponent: operation
// ConcreteDecoratorA: After operation
// ConcreteDecoratorB: After operation
```

### Steps Explained:

1. **Define Component Interface:**

   - Create a `Component` interface with an `operation` method. This interface will be implemented by both the base component and decorators.

2. **Implement Concrete Component:**

   - Implement a `ConcreteComponent` class that provides the core functionality by implementing the `operation` method.

3. **Implement Base Decorator:**

   - Create an abstract `Decorator` class that implements the `Component` interface and holds a reference to a `Component` object. The `Decorator` class delegates the `operation` method to the component it wraps.

4. **Implement Concrete Decorators:**

   - Implement `ConcreteDecoratorA` and `ConcreteDecoratorB` classes that extend the `Decorator` class. These classes add new behavior before or after calling the `operation` method of the base component.

5. **Client Code:**
   - The client code interacts with components and decorators through the `Component` interface. It can wrap components with multiple layers of decorators to add different behaviors dynamically.

**Additional Example: Adding Features to a Text Editor**

Consider a scenario where you need to add features like spell checking and auto-correct to a text editor dynamically.

```pseudo
// Step 1: Define Component Interface
interface TextEditor {
    edit(): void;
}

// Step 2: Implement Concrete Component
class BasicTextEditor implements TextEditor {
    edit(): void {
        print("BasicTextEditor: Editing text");
    }
}

// Step 3: Implement Base Decorator
abstract class TextEditorDecorator implements TextEditor {
    protected editor: TextEditor;

    constructor(editor: TextEditor) {
        this.editor = editor;
    }

    edit(): void {
        this.editor.edit();
    }
}

// Step 4: Implement Concrete Decorators
class SpellCheckDecorator extends TextEditorDecorator {
    edit(): void {
        super.edit();
        print("SpellCheckDecorator: Checking spelling");
    }
}

class AutoCorrectDecorator extends TextEditorDecorator {
    edit(): void {
        super.edit();
        print("AutoCorrectDecorator: Auto-correcting text");
    }
}

// Step 5: Client Code
function clientCode(editor: TextEditor) {
    editor.edit();
}

// Usage
const basicEditor = new BasicTextEditor();
print("Client: I've got a basic text editor:");
clientCode(basicEditor);
// Output:
// BasicTextEditor: Editing text

const spellCheckedEditor = new SpellCheckDecorator(basicEditor);
const autoCorrectedEditor = new AutoCorrectDecorator(spellCheckedEditor);
print("\nClient: Now I've got a decorated text editor:");
clientCode(autoCorrectedEditor);
// Output:
// BasicTextEditor: Editing text
// SpellCheckDecorator: Checking spelling
// AutoCorrectDecorator: Auto-correcting text
```

In this example, `BasicTextEditor` is the base component, and `SpellCheckDecorator` and `AutoCorrectDecorator` are decorators that add spell checking and auto-correct features to the text editor, respectively. The client code can dynamically add these features by wrapping the base editor with the decorators.

---

### Facade Design Pattern

**Problem Statement Recap:**
You need to provide a simplified interface to a complex subsystem of classes. This pattern helps to reduce the complexity of interacting with a subsystem by hiding its details behind a facade.

**Solution Steps:**

1. **Identify the Subsystem:**

   - Determine the complex subsystem or a set of classes that need to be simplified.

2. **Define a Facade Interface:**

   - Create a facade class that provides a simplified interface to the subsystem.

3. **Implement Subsystem Classes:**

   - Implement the subsystem classes that perform the actual work. These classes are usually hidden from the client.

4. **Implement Facade Methods:**

   - Implement methods in the facade class that interact with the subsystem classes. These methods provide a simplified interface to the client.

5. **Client Code:**
   - The client interacts with the facade instead of the complex subsystem directly.

**Pseudo Code Example:**

```pseudo
// Step 1: Identify the Subsystem
// (Not explicitly shown in code, but the subsystem consists of classes like SubsystemA, SubsystemB, etc.)

// Step 2: Define a Facade Interface
class Facade {
    private subsystemA: SubsystemA;
    private subsystemB: SubsystemB;

    constructor() {
        this.subsystemA = new SubsystemA();
        this.subsystemB = new SubsystemB();
    }

    // Step 4: Implement Facade Methods
    public simplifiedOperation(): void {
        this.subsystemA.operationA1();
        this.subsystemA.operationA2();
        this.subsystemB.operationB1();
    }
}

// Step 3: Implement Subsystem Classes
class SubsystemA {
    operationA1(): void {
        print("SubsystemA: operationA1");
    }

    operationA2(): void {
        print("SubsystemA: operationA2");
    }
}

class SubsystemB {
    operationB1(): void {
        print("SubsystemB: operationB1");
    }
}

// Step 5: Client Code
function clientCode(facade: Facade) {
    // Using the facade to interact with the complex subsystem
    facade.simplifiedOperation();
}

// Usage
const facade = new Facade();
clientCode(facade);
// Output:
// SubsystemA: operationA1
// SubsystemA: operationA2
// SubsystemB: operationB1
```

### Steps Explained:

1. **Identify the Subsystem:**

   - Identify the complex subsystem that you want to simplify. This subsystem may consist of multiple classes with complex interactions.

2. **Define a Facade Interface:**

   - Create a `Facade` class that will provide a simplified interface to the subsystem. This class will interact with the subsystem on behalf of the client.

3. **Implement Subsystem Classes:**

   - Implement the subsystem classes (`SubsystemA`, `SubsystemB`, etc.). These classes contain the detailed implementation of the subsystem's functionality.

4. **Implement Facade Methods:**

   - Implement methods in the `Facade` class that delegate calls to the subsystem classes. These methods provide a simplified interface to the client by hiding the complexity of the subsystem.

5. **Client Code:**
   - The client code interacts with the `Facade` class instead of the subsystem classes directly. The facade handles the interaction with the subsystem, simplifying the client's task.

**Additional Example: Home Theater System**

Consider a scenario where you have a complex home theater system with multiple components like a DVD player, projector, sound system, and lights. The Facade pattern can simplify the process of turning on the home theater.

```pseudo
// Step 1: Identify the Subsystem
// (The subsystem consists of DVDPlayer, Projector, SoundSystem, and Lights)

// Step 2: Define a Facade Interface
class HomeTheaterFacade {
    private dvdPlayer: DVDPlayer;
    private projector: Projector;
    private soundSystem: SoundSystem;
    private lights: Lights;

    constructor(dvdPlayer: DVDPlayer, projector: Projector, soundSystem: SoundSystem, lights: Lights) {
        this.dvdPlayer = dvdPlayer;
        this.projector = projector;
        this.soundSystem = soundSystem;
        this.lights = lights;
    }

    // Step 4: Implement Facade Methods
    public watchMovie(): void {
        this.lights.dim();
        this.projector.on();
        this.dvdPlayer.on();
        this.soundSystem.on();
        this.dvdPlayer.play();
    }

    public endMovie(): void {
        this.dvdPlayer.stop();
        this.dvdPlayer.off();
        this.projector.off();
        this.soundSystem.off();
        this.lights.on();
    }
}

// Step 3: Implement Subsystem Classes
class DVDPlayer {
    on(): void { print("DVDPlayer: on"); }
    off(): void { print("DVDPlayer: off"); }
    play(): void { print("DVDPlayer: play"); }
    stop(): void { print("DVDPlayer: stop"); }
}

class Projector {
    on(): void { print("Projector: on"); }
    off(): void { print("Projector: off"); }
}

class SoundSystem {
    on(): void { print("SoundSystem: on"); }
    off(): void { print("SoundSystem: off"); }
}

class Lights {
    dim(): void { print("Lights: dim"); }
    on(): void { print("Lights: on"); }
}

// Step 5: Client Code
function clientCode(homeTheater: HomeTheaterFacade) {
    homeTheater.watchMovie();
    // Output:
    // Lights: dim
    // Projector: on
    // DVDPlayer: on
    // SoundSystem: on
    // DVDPlayer: play

    homeTheater.endMovie();
    // Output:
    // DVDPlayer: stop
    // DVDPlayer: off
    // Projector: off
    // SoundSystem: off
    // Lights: on
}

// Usage
const dvdPlayer = new DVDPlayer();
const projector = new Projector();
const soundSystem = new SoundSystem();
const lights = new Lights();
const homeTheater = new HomeTheaterFacade(dvdPlayer, projector, soundSystem, lights);
clientCode(homeTheater);
```

In this example, the `HomeTheaterFacade` class provides a simplified interface for watching and ending a movie. It hides the complexity of interacting with the individual components of the home theater system (`DVDPlayer`, `Projector`, `SoundSystem`, and `Lights`) from the client.

---

### Flyweight Design Pattern

**Problem Statement Recap:**
You need to efficiently manage a large number of fine-grained objects that share a lot of common data to reduce memory usage. This pattern is useful when many objects share common properties, and you want to minimize memory consumption by sharing as much data as possible.

**Solution Steps:**

1. **Identify Intrinsic and Extrinsic State:**

   - Determine the intrinsic (shared) and extrinsic (unique) state of objects. The intrinsic state is stored in flyweight objects, while the extrinsic state is stored outside and passed to the flyweight objects when needed.

2. **Define Flyweight Interface:**

   - Create an interface that declares methods for using the flyweight objects.

3. **Implement Concrete Flyweights:**

   - Implement concrete flyweight classes that store the intrinsic state and implement the methods declared in the flyweight interface.

4. **Create Flyweight Factory:**

   - Implement a factory that creates and manages flyweight objects, ensuring that they are shared properly.

5. **Client Code:**
   - The client code uses the flyweight factory to get flyweight objects and passes the extrinsic state to the flyweight objects as needed.

**Pseudo Code Example:**

```pseudo
// Step 1: Identify Intrinsic and Extrinsic State
// Intrinsic state is shared (e.g., Character type)
// Extrinsic state is unique (e.g., position)

// Step 2: Define Flyweight Interface
interface Flyweight {
    operation(extrinsicState: string): void;
}

// Step 3: Implement Concrete Flyweights
class ConcreteFlyweight implements Flyweight {
    private intrinsicState: string;

    constructor(intrinsicState: string) {
        this.intrinsicState = intrinsicState;
    }

    operation(extrinsicState: string): void {
        print("Flyweight with intrinsic state " + this.intrinsicState + " and extrinsic state " + extrinsicState);
    }
}

// Step 4: Create Flyweight Factory
class FlyweightFactory {
    private flyweights: Map<string, Flyweight> = new Map<string, Flyweight>();

    getFlyweight(key: string): Flyweight {
        if (!this.flyweights.has(key)) {
            this.flyweights.set(key, new ConcreteFlyweight(key));
        }
        return this.flyweights.get(key);
    }

    listFlyweights(): void {
        const count = this.flyweights.size();
        print("FlyweightFactory: I have " + count + " flyweights.");
        for (const key in this.flyweights) {
            print(key);
        }
    }
}

// Step 5: Client Code
function clientCode() {
    const factory = new FlyweightFactory();

    // Add shared flyweights
    const flyweight1 = factory.getFlyweight("A");
    const flyweight2 = factory.getFlyweight("B");

    // Use flyweights with extrinsic state
    flyweight1.operation("Extrinsic State 1");
    flyweight2.operation("Extrinsic State 2");

    // Adding more shared flyweights
    const flyweight3 = factory.getFlyweight("A");
    const flyweight4 = factory.getFlyweight("B");

    // Use flyweights with extrinsic state
    flyweight3.operation("Extrinsic State 3");
    flyweight4.operation("Extrinsic State 4");

    factory.listFlyweights();
    // Output:
    // Flyweight with intrinsic state A and extrinsic state Extrinsic State 1
    // Flyweight with intrinsic state B and extrinsic state Extrinsic State 2
    // Flyweight with intrinsic state A and extrinsic state Extrinsic State 3
    // Flyweight with intrinsic state B and extrinsic state Extrinsic State 4
    // FlyweightFactory: I have 2 flyweights.
    // A
    // B
}

// Usage
clientCode();
```

### Steps Explained:

1. **Identify Intrinsic and Extrinsic State:**

   - Determine which parts of the object state are shared (intrinsic) and which parts are unique (extrinsic). The intrinsic state is stored within the flyweight objects, while the extrinsic state is passed in as needed.

2. **Define Flyweight Interface:**

   - Create a `Flyweight` interface that declares an `operation` method. This interface will be implemented by all concrete flyweight classes.

3. **Implement Concrete Flyweights:**

   - Implement a `ConcreteFlyweight` class that stores the intrinsic state and implements the `operation` method. The `operation` method takes the extrinsic state as a parameter.

4. **Create Flyweight Factory:**

   - Implement a `FlyweightFactory` class that manages a collection of flyweight objects. The `getFlyweight` method returns a flyweight object, creating it if it does not already exist. The `listFlyweights` method lists all existing flyweights.

5. **Client Code:**
   - The client code uses the `FlyweightFactory` to obtain flyweight objects and interacts with them by passing the extrinsic state. The client code can reuse existing flyweight objects, thereby minimizing memory usage.

**Additional Example: Character Rendering**

Consider a scenario where you need to render a large number of characters in a text document.

```pseudo
// Step 1: Identify Intrinsic and Extrinsic State
// Intrinsic state is shared (e.g., Character code, font)
// Extrinsic state is unique (e.g., position, color)

// Step 2: Define Flyweight Interface
interface CharacterFlyweight {
    render(position: Position, color: Color): void;
}

// Step 3: Implement Concrete Flyweights
class ConcreteCharacterFlyweight implements CharacterFlyweight {
    private character: string;
    private font: string;

    constructor(character: string, font: string) {
        this.character = character;
        this.font = font;
    }

    render(position: Position, color: Color): void {
        print("Rendering character " + this.character + " at " + position + " with color " + color + " and font " + this.font);
    }
}

// Position and Color classes for extrinsic state
class Position {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class Color {
    r: number;
    g: number;
    b: number;

    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

// Step 4: Create Flyweight Factory
class CharacterFlyweightFactory {
    private flyweights: Map<string, CharacterFlyweight> = new Map<string, CharacterFlyweight>();

    getFlyweight(character: string, font: string): CharacterFlyweight {
        const key = character + font;
        if (!this.flyweights.has(key)) {
            this.flyweights.set(key, new ConcreteCharacterFlyweight(character, font));
        }
        return this.flyweights.get(key);
    }

    listFlyweights(): void {
        const count = this.flyweights.size();
        print("CharacterFlyweightFactory: I have " + count + " flyweights.");
        for (const key in this.flyweights) {
            print(key);
        }
    }
}

// Step 5: Client Code
function clientCode() {
    const factory = new CharacterFlyweightFactory();

    // Add shared flyweights
    const flyweightA = factory.getFlyweight("A", "Arial");
    const flyweightB = factory.getFlyweight("B", "Arial");

    // Use flyweights with extrinsic state
    flyweightA.render(new Position(10, 20), new Color(255, 0, 0));
    flyweightB.render(new Position(30, 40), new Color(0, 255, 0));

    // Adding more shared flyweights
    const flyweightA2 = factory.getFlyweight("A", "Arial");
    const flyweightB2 = factory.getFlyweight("B", "Arial");

    // Use flyweights with extrinsic state
    flyweightA2.render(new Position(50, 60), new Color(0, 0, 255));
    flyweightB2.render(new Position(70, 80), new Color(255, 255, 0));

    factory.listFlyweights();
    // Output:
    // Rendering character A at (10, 20) with color (255, 0, 0) and font Arial
    // Rendering character B at (30, 40) with color (0, 255, 0) and font Arial
    // Rendering character A at (50, 60) with color (0, 0, 255) and font Arial
    // Rendering character B at (70, 80) with color (255, 255, 0) and font Arial
    // CharacterFlyweightFactory: I have 2 flyweights.
    // AArial
    // BArial
}

// Usage
clientCode();
```

In this example, the `CharacterFlyweightFactory` manages flyweights for characters with specific fonts. The client code uses these flyweights to render characters at different positions and with different colors, minimizing memory usage by reusing flyweights.

---

### Proxy Design Pattern

**Problem Statement Recap:**
You need to control access to an object by providing a surrogate or placeholder for it. This pattern is useful when you want to add additional functionality, such as lazy initialization, access control, logging, or remote access, without modifying the original object.

**Solution Steps:**

1. **Define Subject Interface:**

   - Create an interface that defines the common methods for both the real subject and the proxy.

2. **Implement Real Subject:**

   - Implement the class that represents the actual object. This class provides the core functionality.

3. **Implement Proxy Class:**

   - Implement a proxy class that implements the subject interface and holds a reference to the real subject. The proxy controls access to the real subject and may add additional functionality.

4. **Client Code:**
   - The client interacts with the proxy object instead of the real subject. The proxy forwards the requests to the real subject as needed.

**Pseudo Code Example:**

```pseudo
// Step 1: Define Subject Interface
interface Subject {
    request(): void;
}

// Step 2: Implement Real Subject
class RealSubject implements Subject {
    request(): void {
        print("RealSubject: Handling request.");
    }
}

// Step 3: Implement Proxy Class
class Proxy implements Subject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    private checkAccess(): boolean {
        // Check access permissions before forwarding the request
        print("Proxy: Checking access before forwarding the request.");
        return true;
    }

    private logAccess(): void {
        // Log the request
        print("Proxy: Logging the time of request.");
    }
}

// Step 4: Client Code
function clientCode(subject: Subject) {
    // Using the subject to call the request method
    subject.request();
}

// Usage
const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);
clientCode(proxy);
// Output:
// Proxy: Checking access before forwarding the request.
// RealSubject: Handling request.
// Proxy: Logging the time of request.
```

### Steps Explained:

1. **Define Subject Interface:**

   - Create a `Subject` interface that declares a `request` method. Both the real subject and the proxy will implement this interface.

2. **Implement Real Subject:**

   - Implement a `RealSubject` class that provides the core functionality by implementing the `request` method.

3. **Implement Proxy Class:**

   - Implement a `Proxy` class that also implements the `Subject` interface. The `Proxy` class holds a reference to a `RealSubject` object and controls access to it. The `request` method in the proxy checks access permissions, forwards the request to the real subject, and logs the access.

4. **Client Code:**
   - The client code interacts with the `Proxy` object instead of the `RealSubject` object. The proxy handles the client's requests, providing additional functionality as needed.

**Additional Example: Virtual Proxy for Lazy Initialization**

Consider a scenario where you have a resource-intensive object that should only be created when it is actually needed.

```pseudo
// Step 1: Define Subject Interface
interface ExpensiveObject {
    process(): void;
}

// Step 2: Implement Real Subject
class RealExpensiveObject implements ExpensiveObject {
    constructor() {
        // Simulate expensive initialization
        print("RealExpensiveObject: Initialized");
    }

    process(): void {
        print("RealExpensiveObject: Processing request.");
    }
}

// Step 3: Implement Proxy Class
class ExpensiveObjectProxy implements ExpensiveObject {
    private realExpensiveObject: RealExpensiveObject;

    process(): void {
        if (this.realExpensiveObject == null) {
            this.realExpensiveObject = new RealExpensiveObject();
        }
        this.realExpensiveObject.process();
    }
}

// Step 4: Client Code
function clientCode(object: ExpensiveObject) {
    // Using the object to call the process method
    object.process();
}

// Usage
const proxy = new ExpensiveObjectProxy();
clientCode(proxy);  // Output: RealExpensiveObject: Initialized
                    //         RealExpensiveObject: Processing request.

clientCode(proxy);  // Output: RealExpensiveObject: Processing request.
```

In this example, the `ExpensiveObjectProxy` class delays the creation of the `RealExpensiveObject` until the `process` method is called for the first time. This is an example of a virtual proxy that provides lazy initialization of the resource-intensive object.

---

### Chain of Responsibility Design Pattern

**Problem Statement Recap:**
You need to decouple the sender of a request from its receiver by allowing multiple objects to handle the request. This pattern allows a request to be passed along a chain of handlers until it is processed.

**Solution Steps:**

1. **Define Handler Interface:**

   - Create an interface that declares a method for handling requests and a method to set the next handler in the chain.

2. **Implement Concrete Handlers:**

   - Implement concrete handler classes that process the request or pass it to the next handler in the chain.

3. **Create a Chain of Handlers:**

   - Assemble the chain by setting the next handler for each handler.

4. **Client Code:**
   - The client sends requests to the first handler in the chain. Each handler either processes the request or passes it to the next handler.

**Pseudo Code Example:**

```pseudo
// Step 1: Define Handler Interface
interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): void;
}

// Abstract Handler with default implementation
abstract class AbstractHandler implements Handler {
    private nextHandler: Handler;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}

// Step 2: Implement Concrete Handlers
class ConcreteHandler1 extends AbstractHandler {
    public handle(request: string): void {
        if (request === "Request1") {
            print("ConcreteHandler1: Handling request " + request);
        } else {
            super.handle(request);
        }
    }
}

class ConcreteHandler2 extends AbstractHandler {
    public handle(request: string): void {
        if (request === "Request2") {
            print("ConcreteHandler2: Handling request " + request);
        } else {
            super.handle(request);
        }
    }
}

class ConcreteHandler3 extends AbstractHandler {
    public handle(request: string): void {
        if (request === "Request3") {
            print("ConcreteHandler3: Handling request " + request);
        } else {
            super.handle(request);
        }
    }
}

// Step 3: Create a Chain of Handlers
function createChain(): Handler {
    const handler1 = new ConcreteHandler1();
    const handler2 = new ConcreteHandler2();
    const handler3 = new ConcreteHandler3();

    handler1.setNext(handler2).setNext(handler3);
    return handler1;
}

// Step 4: Client Code
function clientCode(handler: Handler) {
    const requests = ["Request1", "Request2", "Request3", "Request4"];

    for (const request in requests) {
        print("Client: Who wants to handle " + request + "?");
        handler.handle(request);
    }
}

// Usage
const handlerChain = createChain();
clientCode(handlerChain);
// Output:
// Client: Who wants to handle Request1?
// ConcreteHandler1: Handling request Request1
// Client: Who wants to handle Request2?
// ConcreteHandler2: Handling request Request2
// Client: Who wants to handle Request3?
// ConcreteHandler3: Handling request Request3
// Client: Who wants to handle Request4?
// (No handler available to handle Request4)
```

### Steps Explained:

1. **Define Handler Interface:**

   - Create a `Handler` interface that declares `setNext` and `handle` methods. The `setNext` method sets the next handler in the chain, and the `handle` method processes the request or forwards it to the next handler.

2. **Implement Concrete Handlers:**

   - Implement concrete handler classes (`ConcreteHandler1`, `ConcreteHandler2`, `ConcreteHandler3`) that process specific requests. If a handler cannot process the request, it calls the `handle` method of the next handler in the chain.

3. **Create a Chain of Handlers:**

   - Assemble the chain by setting the next handler for each handler. This creates a linked sequence of handlers.

4. **Client Code:**
   - The client sends requests to the first handler in the chain. Each handler either processes the request or forwards it to the next handler.

**Additional Example: Support Ticket System**

Consider a scenario where you need to handle support tickets at different levels (e.g., Basic Support, Intermediate Support, Advanced Support).

```pseudo
// Step 1: Define Handler Interface
interface SupportHandler {
    setNext(handler: SupportHandler): SupportHandler;
    handle(ticket: SupportTicket): void;
}

// SupportTicket class
class SupportTicket {
    level: string;
    description: string;

    constructor(level: string, description: string) {
        this.level = level;
        this.description = description;
    }
}

// Abstract Handler with default implementation
abstract class AbstractSupportHandler implements SupportHandler {
    private nextHandler: SupportHandler;

    public setNext(handler: SupportHandler): SupportHandler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(ticket: SupportTicket): void {
        if (this.nextHandler) {
            this.nextHandler.handle(ticket);
        }
    }
}

// Step 2: Implement Concrete Handlers
class BasicSupportHandler extends AbstractSupportHandler {
    public handle(ticket: SupportTicket): void {
        if (ticket.level === "Basic") {
            print("BasicSupportHandler: Handling ticket " + ticket.description);
        } else {
            super.handle(ticket);
        }
    }
}

class IntermediateSupportHandler extends AbstractSupportHandler {
    public handle(ticket: SupportTicket): void {
        if (ticket.level === "Intermediate") {
            print("IntermediateSupportHandler: Handling ticket " + ticket.description);
        } else {
            super.handle(ticket);
        }
    }
}

class AdvancedSupportHandler extends AbstractSupportHandler {
    public handle(ticket: SupportTicket): void {
        if (ticket.level === "Advanced") {
            print("AdvancedSupportHandler: Handling ticket " + ticket.description);
        } else {
            super.handle(ticket);
        }
    }
}

// Step 3: Create a Chain of Handlers
function createSupportChain(): SupportHandler {
    const basicSupport = new BasicSupportHandler();
    const intermediateSupport = new IntermediateSupportHandler();
    const advancedSupport = new AdvancedSupportHandler();

    basicSupport.setNext(intermediateSupport).setNext(advancedSupport);
    return basicSupport;
}

// Step 4: Client Code
function clientCode(handler: SupportHandler) {
    const tickets = [
        new SupportTicket("Basic", "Password reset"),
        new SupportTicket("Intermediate", "Software installation"),
        new SupportTicket("Advanced", "Server configuration"),
        new SupportTicket("Unknown", "General inquiry")
    ];

    for (const ticket in tickets) {
        print("Client: Who wants to handle ticket: " + ticket.description + "?");
        handler.handle(ticket);
    }
}

// Usage
const supportChain = createSupportChain();
clientCode(supportChain);
// Output:
// Client: Who wants to handle ticket: Password reset?
// BasicSupportHandler: Handling ticket Password reset
// Client: Who wants to handle ticket: Software installation?
// IntermediateSupportHandler: Handling ticket Software installation
// Client: Who wants to handle ticket: Server configuration?
// AdvancedSupportHandler: Handling ticket Server configuration
// Client: Who wants to handle ticket: General inquiry?
// (No handler available to handle General inquiry)
```

In this example, different support handlers handle support tickets based on their level. The tickets are passed through the chain of handlers until they are processed.

---

### Command Design Pattern

**Problem Statement Recap:**
You need to encapsulate a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations. This pattern is useful for implementing undoable operations, logging, and transactional behaviors.

**Solution Steps:**

1. **Define Command Interface:**

   - Create an interface that declares a method for executing commands.

2. **Implement Concrete Commands:**

   - Implement concrete command classes that execute specific actions.

3. **Define Receiver Class:**

   - Create a receiver class that performs the actual work.

4. **Implement Invoker Class:**

   - Implement an invoker class that holds a command and calls its execute method.

5. **Client Code:**
   - The client creates command objects and associates them with the invoker.

**Pseudo Code Example:**

```pseudo
// Step 1: Define Command Interface
interface Command {
    execute(): void;
}

// Step 2: Implement Concrete Commands
class ConcreteCommandA implements Command {
    private receiver: Receiver;

    constructor(receiver: Receiver) {
        this.receiver = receiver;
    }

    execute(): void {
        this.receiver.actionA();
    }
}

class ConcreteCommandB implements Command {
    private receiver: Receiver;

    constructor(receiver: Receiver) {
        this.receiver = receiver;
    }

    execute(): void {
        this.receiver.actionB();
    }
}

// Step 3: Define Receiver Class
class Receiver {
    actionA(): void {
        print("Receiver: Executing action A.");
    }

    actionB(): void {
        print("Receiver: Executing action B.");
    }
}

// Step 4: Implement Invoker Class
class Invoker {
    private command: Command;

    setCommand(command: Command): void {
        this.command = command;
    }

    executeCommand(): void {
        this.command.execute();
    }
}

// Step 5: Client Code
function clientCode() {
    const receiver = new Receiver();

    const commandA = new ConcreteCommandA(receiver);
    const commandB = new ConcreteCommandB(receiver);

    const invoker = new Invoker();

    invoker.setCommand(commandA);
    invoker.executeCommand();
    // Output: Receiver: Executing action A.

    invoker.setCommand(commandB);
    invoker.executeCommand();
    // Output: Receiver: Executing action B.
}

// Usage
clientCode();
```

### Steps Explained:

1. **Define Command Interface:**

   - Create a `Command` interface that declares an `execute` method. This interface will be implemented by all concrete command classes.

2. **Implement Concrete Commands:**

   - Implement `ConcreteCommandA` and `ConcreteCommandB` classes that execute specific actions by calling methods on the receiver.

3. **Define Receiver Class:**

   - Create a `Receiver` class that contains the methods (`actionA` and `actionB`) that perform the actual work. The receiver methods are called by the command objects.

4. **Implement Invoker Class:**

   - Implement an `Invoker` class that holds a command object and calls its `execute` method. The invoker is responsible for initiating the command execution.

5. **Client Code:**
   - The client code creates instances of the receiver, concrete commands, and invoker. It sets the command on the invoker and triggers the command execution through the invoker.

**Additional Example: Text Editor with Undo/Redo Functionality**

Consider a scenario where you need to implement undo and redo functionality in a text editor.

```pseudo
// Step 1: Define Command Interface
interface Command {
    execute(): void;
    undo(): void;
}

// Step 2: Implement Concrete Commands
class InsertCommand implements Command {
    private receiver: TextEditor;
    private text: string;

    constructor(receiver: TextEditor, text: string) {
        this.receiver = receiver;
        this.text = text;
    }

    execute(): void {
        this.receiver.insert(this.text);
    }

    undo(): void {
        this.receiver.delete(this.text.length);
    }
}

class DeleteCommand implements Command {
    private receiver: TextEditor;
    private text: string;

    constructor(receiver: TextEditor, text: string) {
        this.receiver = receiver;
        this.text = text;
    }

    execute(): void {
        this.text = this.receiver.delete(this.text.length);
    }

    undo(): void {
        this.receiver.insert(this.text);
    }
}

// Step 3: Define Receiver Class
class TextEditor {
    private content: string = "";

    insert(text: string): void {
        this.content += text;
        print("TextEditor: Current content: " + this.content);
    }

    delete(length: number): string {
        const deletedText = this.content.slice(-length);
        this.content = this.content.slice(0, -length);
        print("TextEditor: Current content: " + this.content);
        return deletedText;
    }
}

// Step 4: Implement Invoker Class
class CommandManager {
    private commandHistory: List<Command> = new ArrayList<Command>();

    executeCommand(command: Command): void {
        command.execute();
        this.commandHistory.add(command);
    }

    undoCommand(): void {
        if (this.commandHistory.size() > 0) {
            const command = this.commandHistory.pop();
            command.undo();
        }
    }
}

// Step 5: Client Code
function clientCode() {
    const editor = new TextEditor();
    const commandManager = new CommandManager();

    const insertCommand = new InsertCommand(editor, "Hello, ");
    commandManager.executeCommand(insertCommand);  // Output: TextEditor: Current content: Hello,

    const insertCommand2 = new InsertCommand(editor, "world!");
    commandManager.executeCommand(insertCommand2);  // Output: TextEditor: Current content: Hello, world!

    commandManager.undoCommand();  // Output: TextEditor: Current content: Hello,
    commandManager.undoCommand();  // Output: TextEditor: Current content:
}

// Usage
clientCode();
```

In this example, the `TextEditor` class acts as the receiver, and `InsertCommand` and `DeleteCommand` classes are concrete commands. The `CommandManager` class acts as the invoker, managing the execution and undoing of commands.

---

### Iterator Design Pattern

**Problem Statement Recap:**
You need to provide a way to access the elements of a collection sequentially without exposing its underlying representation. This pattern is useful for traversing different types of collections in a uniform manner.

**Solution Steps:**

1. **Define Iterator Interface:**

   - Create an interface that declares methods for iterating over elements (e.g., `next`, `hasNext`).

2. **Define Collection Interface:**

   - Create an interface for the collection that declares a method to create an iterator.

3. **Implement Concrete Iterator:**

   - Implement a concrete iterator class that conforms to the iterator interface.

4. **Implement Concrete Collection:**

   - Implement a concrete collection class that conforms to the collection interface and returns an instance of the concrete iterator.

5. **Client Code:**
   - The client code uses the iterator to traverse the collection.

**Pseudo Code Example:**

```pseudo
// Step 1: Define Iterator Interface
interface Iterator {
    hasNext(): boolean;
    next(): any;
}

// Step 2: Define Collection Interface
interface Collection {
    createIterator(): Iterator;
}

// Step 3: Implement Concrete Iterator
class ConcreteIterator implements Iterator {
    private collection: ConcreteCollection;
    private position: number = 0;

    constructor(collection: ConcreteCollection) {
        this.collection = collection;
    }

    public hasNext(): boolean {
        return this.position < this.collection.getLength();
    }

    public next(): any {
        if (this.hasNext()) {
            return this.collection.getItem(this.position++);
        }
        return null;
    }
}

// Step 4: Implement Concrete Collection
class ConcreteCollection implements Collection {
    private items: List<any> = new ArrayList<any>();

    public getLength(): number {
        return this.items.size();
    }

    public getItem(index: number): any {
        return this.items.get(index);
    }

    public addItem(item: any): void {
        this.items.add(item);
    }

    public createIterator(): Iterator {
        return new ConcreteIterator(this);
    }
}

// Step 5: Client Code
function clientCode(collection: Collection) {
    const iterator = collection.createIterator();

    while (iterator.hasNext()) {
        const item = iterator.next();
        print("Item: " + item);
    }
}

// Usage
const collection = new ConcreteCollection();
collection.addItem("Item 1");
collection.addItem("Item 2");
collection.addItem("Item 3");

clientCode(collection);
// Output:
// Item: Item 1
// Item: Item 2
// Item: Item 3
```

### Steps Explained:

1. **Define Iterator Interface:**

   - Create an `Iterator` interface that declares the methods `hasNext` and `next`. `hasNext` checks if there are more elements to iterate, and `next` returns the next element.

2. **Define Collection Interface:**

   - Create a `Collection` interface that declares a `createIterator` method. This method returns an iterator for the collection.

3. **Implement Concrete Iterator:**

   - Implement a `ConcreteIterator` class that maintains a reference to the collection and a position index. It implements the `hasNext` and `next` methods to iterate over the collection.

4. **Implement Concrete Collection:**

   - Implement a `ConcreteCollection` class that maintains a list of items. It provides methods to add items, get the length of the collection, retrieve items by index, and create an iterator.

5. **Client Code:**
   - The client code creates a collection, adds items to it, and uses the iterator to traverse the collection.

**Additional Example: Different Collection Types**

Consider a scenario where you need to iterate over different types of collections, such as arrays and linked lists.

```pseudo
// Step 1: Define Iterator Interface
interface Iterator {
    hasNext(): boolean;
    next(): any;
}

// Step 2: Define Collection Interface
interface Collection {
    createIterator(): Iterator;
}

// Concrete Array Iterator
class ArrayIterator implements Iterator {
    private array: Array<any>;
    private position: number = 0;

    constructor(array: Array<any>) {
        this.array = array;
    }

    public hasNext(): boolean {
        return this.position < this.array.length;
    }

    public next(): any {
        if (this.hasNext()) {
            return this.array[this.position++];
        }
        return null;
    }
}

// Concrete Linked List Iterator
class LinkedListIterator implements Iterator {
    private list: LinkedList;
    private currentNode: Node;

    constructor(list: LinkedList) {
        this.list = list;
        this.currentNode = list.head;
    }

    public hasNext(): boolean {
        return this.currentNode != null;
    }

    public next(): any {
        if (this.hasNext()) {
            const value = this.currentNode.value;
            this.currentNode = this.currentNode.next;
            return value;
        }
        return null;
    }
}

// Linked List Node Class
class Node {
    public value: any;
    public next: Node;

    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

// Linked List Class
class LinkedList implements Collection {
    public head: Node = null;

    public addItem(value: any): void {
        const newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    public createIterator(): Iterator {
        return new LinkedListIterator(this);
    }
}

// Step 5: Client Code
function clientCode(collection: Collection) {
    const iterator = collection.createIterator();

    while (iterator.hasNext()) {
        const item = iterator.next();
        print("Item: " + item);
    }
}

// Usage for Array
const arrayCollection = ["Item 1", "Item 2", "Item 3"];
const arrayIterator = new ArrayIterator(arrayCollection);
clientCode(arrayIterator);
// Output:
// Item: Item 1
// Item: Item 2
// Item: Item 3

// Usage for Linked List
const linkedList = new LinkedList();
linkedList.addItem("Item A");
linkedList.addItem("Item B");
linkedList.addItem("Item C");

clientCode(linkedList);
// Output:
// Item: Item A
// Item: Item B
// Item: Item C
```

In this example, `ArrayIterator` and `LinkedListIterator` are concrete iterators for arrays and linked lists, respectively. The `LinkedList` class represents a linked list and provides a method to create an iterator.

---

### Mediator Design Pattern

**Problem Statement Recap:**
You need to reduce the complexity of communication between multiple objects or classes. The Mediator pattern helps to reduce the direct dependencies between objects by introducing a mediator object that handles the interactions.

**Solution Steps:**

1. **Define Mediator Interface:**

   - Create an interface that declares methods for communicating with colleagues.

2. **Define Colleague Interface:**

   - Create an interface for the colleague classes that defines a method to set the mediator.

3. **Implement Concrete Mediator:**

   - Implement the concrete mediator class that coordinates the communication between colleague objects.

4. **Implement Concrete Colleagues:**

   - Implement concrete colleague classes that communicate through the mediator.

5. **Client Code:**
   - The client creates and sets up the mediator and colleague objects. Colleagues communicate via the mediator.

**Pseudo Code Example:**

```pseudo
// Step 1: Define Mediator Interface
interface Mediator {
    notify(sender: Colleague, event: string): void;
}

// Step 2: Define Colleague Interface
abstract class Colleague {
    protected mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }
}

// Step 3: Implement Concrete Mediator
class ConcreteMediator implements Mediator {
    private component1: ConcreteColleague1;
    private component2: ConcreteColleague2;

    setColleagues(colleague1: ConcreteColleague1, colleague2: ConcreteColleague2): void {
        this.component1 = colleague1;
        this.component2 = colleague2;
    }

    notify(sender: Colleague, event: string): void {
        if (event === "A") {
            print("Mediator reacts on A and triggers B.");
            this.component2.doB();
        } else if (event === "B") {
            print("Mediator reacts on B and triggers A.");
            this.component1.doA();
        }
    }
}

// Step 4: Implement Concrete Colleagues
class ConcreteColleague1 extends Colleague {
    doA(): void {
        print("ConcreteColleague1 does A.");
        this.mediator.notify(this, "A");
    }
}

class ConcreteColleague2 extends Colleague {
    doB(): void {
        print("ConcreteColleague2 does B.");
        this.mediator.notify(this, "B");
    }
}

// Step 5: Client Code
function clientCode() {
    const mediator = new ConcreteMediator();

    const colleague1 = new ConcreteColleague1(mediator);
    const colleague2 = new ConcreteColleague2(mediator);

    mediator.setColleagues(colleague1, colleague2);

    print("Client triggers operation A.");
    colleague1.doA();
    print("Client triggers operation B.");
    colleague2.doB();
}

// Usage
clientCode();
// Output:
// Client triggers operation A.
// ConcreteColleague1 does A.
// Mediator reacts on A and triggers B.
// ConcreteColleague2 does B.
// Client triggers operation B.
// ConcreteColleague2 does B.
// Mediator reacts on B and triggers A.
// ConcreteColleague1 does A.
```

### Steps Explained:

1. **Define Mediator Interface:**

   - Create a `Mediator` interface that declares a `notify` method. This method is used by colleagues to send events to the mediator.

2. **Define Colleague Interface:**

   - Create an abstract `Colleague` class that holds a reference to the mediator. This class will be extended by concrete colleague classes.

3. **Implement Concrete Mediator:**

   - Implement a `ConcreteMediator` class that coordinates communication between colleague objects. It holds references to the colleagues and defines the logic for reacting to events.

4. **Implement Concrete Colleagues:**

   - Implement `ConcreteColleague1` and `ConcreteColleague2` classes that extend the `Colleague` class. These classes communicate with each other through the mediator by calling the mediator's `notify` method.

5. **Client Code:**
   - The client code creates instances of the mediator and colleague classes, sets up their relationships, and triggers operations on the colleagues. The mediator handles the communication between the colleagues.

**Additional Example: Chat Room**

Consider a scenario where you need to implement a chat room where users can send messages to each other through a mediator.

```pseudo
// Step 1: Define Mediator Interface
interface ChatRoomMediator {
    showMessage(user: User, message: string): void;
}

// Step 2: Define Colleague Interface
abstract class User {
    protected mediator: ChatRoomMediator;
    protected name: string;

    constructor(mediator: ChatRoomMediator, name: string) {
        this.mediator = mediator;
        this.name = name;
    }

    public abstract send(message: string): void;
    public abstract receive(message: string): void;
}

// Step 3: Implement Concrete Mediator
class ChatRoom implements ChatRoomMediator {
    showMessage(user: User, message: string): void {
        const time = new Date().toLocaleTimeString();
        const sender = user.getName();

        print(time + " [" + sender + "]: " + message);
    }
}

// Step 4: Implement Concrete Colleagues
class ConcreteUser extends User {
    public send(message: string): void {
        print(this.name + " sends: " + message);
        this.mediator.showMessage(this, message);
    }

    public receive(message: string): void {
        print(this.name + " receives: " + message);
    }

    public getName(): string {
        return this.name;
    }
}

// Step 5: Client Code
function clientCode() {
    const mediator = new ChatRoom();

    const user1 = new ConcreteUser(mediator, "Alice");
    const user2 = new ConcreteUser(mediator, "Bob");

    user1.send("Hi Bob!");
    user2.send("Hello Alice!");
}

// Usage
clientCode();
// Output:
// Alice sends: Hi Bob!
// 10:34:56 AM [Alice]: Hi Bob!
// Bob sends: Hello Alice!
// 10:34:56 AM [Bob]: Hello Alice!
```

In this example, the `ChatRoom` class acts as the mediator, coordinating the communication between `ConcreteUser` objects. Users send messages to the chat room, which then displays them.

---

### Memento Design Pattern

**Problem Statement Recap:**
You need to capture and externalize an object's internal state so that it can be restored to this state later, without violating encapsulation. This pattern is particularly useful for implementing undo and redo functionality.

**Solution Steps:**

1. **Define Memento Class:**

   - Create a memento class that stores the internal state of the originator. This class should only expose the necessary state to the originator.

2. **Define Originator Class:**

   - Implement the originator class that creates and restores its state using memento objects. The originator knows how to save its state into a memento and restore it from a memento.

3. **Define Caretaker Class:**

   - Implement a caretaker class that is responsible for keeping the mementos. It requests mementos from the originator and restores the originator's state when needed.

4. **Client Code:**
   - The client interacts with the originator and caretaker to save and restore states.

**Pseudo Code Example:**

```pseudo
// Step 1: Define Memento Class
class Memento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    getState(): string {
        return this.state;
    }
}

// Step 2: Define Originator Class
class Originator {
    private state: string;

    setState(state: string): void {
        print("Originator: Setting state to " + state);
        this.state = state;
    }

    getState(): string {
        return this.state;
    }

    saveStateToMemento(): Memento {
        print("Originator: Saving to Memento.");
        return new Memento(this.state);
    }

    restoreStateFromMemento(memento: Memento): void {
        this.state = memento.getState();
        print("Originator: State after restoring from Memento: " + this.state);
    }
}

// Step 3: Define Caretaker Class
class Caretaker {
    private mementoList: List<Memento> = new ArrayList<Memento>();

    add(memento: Memento): void {
        this.mementoList.add(memento);
    }

    get(index: number): Memento {
        return this.mementoList.get(index);
    }
}

// Step 4: Client Code
function clientCode() {
    const originator = new Originator();
    const caretaker = new Caretaker();

    originator.setState("State #1");
    originator.setState("State #2");
    caretaker.add(originator.saveStateToMemento());

    originator.setState("State #3");
    caretaker.add(originator.saveStateToMemento());

    originator.setState("State #4");
    print("Current State: " + originator.getState());

    originator.restoreStateFromMemento(caretaker.get(0));
    print("First saved State: " + originator.getState());

    originator.restoreStateFromMemento(caretaker.get(1));
    print("Second saved State: " + originator.getState());
}

// Usage
clientCode();
// Output:
// Originator: Setting state to State #1
// Originator: Setting state to State #2
// Originator: Saving to Memento.
// Originator: Setting state to State #3
// Originator: Saving to Memento.
// Originator: Setting state to State #4
// Current State: State #4
// Originator: State after restoring from Memento: State #2
// First saved State: State #2
// Originator: State after restoring from Memento: State #3
// Second saved State: State #3
```

### Steps Explained:

1. **Define Memento Class:**

   - The `Memento` class stores the state of the originator. It has a constructor to initialize the state and a method to retrieve the stored state.

2. **Define Originator Class:**

   - The `Originator` class has methods to set and get its state. It also has methods to save its current state to a memento and restore its state from a memento.

3. **Define Caretaker Class:**

   - The `Caretaker` class is responsible for keeping track of the memento objects. It has methods to add mementos to a list and retrieve mementos from the list.

4. **Client Code:**
   - The client code creates an instance of the originator and the caretaker. It changes the state of the originator, saves states to mementos via the caretaker, and restores states from mementos.

**Additional Example: Text Editor with Undo Functionality**

Consider a scenario where you need to implement undo functionality in a text editor.

```pseudo
// Step 1: Define Memento Class
class TextMemento {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    getContent(): string {
        return this.content;
    }
}

// Step 2: Define Originator Class
class TextEditor {
    private content: string = "";

    setContent(content: string): void {
        this.content = content;
    }

    getContent(): string {
        return this.content;
    }

    saveContentToMemento(): TextMemento {
        return new TextMemento(this.content);
    }

    restoreContentFromMemento(memento: TextMemento): void {
        this.content = memento.getContent();
    }
}

// Step 3: Define Caretaker Class
class History {
    private mementoList: List<TextMemento> = new ArrayList<TextMemento>();

    add(memento: TextMemento): void {
        this.mementoList.add(memento);
    }

    get(index: number): TextMemento {
        return this.mementoList.get(index);
    }
}

// Step 4: Client Code
function clientCode() {
    const editor = new TextEditor();
    const history = new History();

    editor.setContent("Version 1");
    history.add(editor.saveContentToMemento());

    editor.setContent("Version 2");
    history.add(editor.saveContentToMemento());

    editor.setContent("Version 3");
    print("Current Content: " + editor.getContent());

    editor.restoreContentFromMemento(history.get(1));
    print("Restored to: " + editor.getContent());

    editor.restoreContentFromMemento(history.get(0));
    print("Restored to: " + editor.getContent());
}

// Usage
clientCode();
// Output:
// Current Content: Version 3
// Restored to: Version 2
// Restored to: Version 1
```

In this example, the `TextEditor` class acts as the originator, `TextMemento` stores the state of the text editor, and `History` acts as the caretaker. The client code can save and restore different versions of the text editor's content.

---

### Observer Design Pattern

**Problem Statement Recap:**
You need to create a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. This pattern is particularly useful for implementing distributed event-handling systems.

**Solution Steps:**

1. **Define Subject Interface:**

   - Create an interface that declares methods for attaching, detaching, and notifying observers.

2. **Define Observer Interface:**

   - Create an interface that declares the update method, which will be called by the subject.

3. **Implement Concrete Subject:**

   - Implement the concrete subject class that maintains a list of observers and notifies them of state changes.

4. **Implement Concrete Observers:**

   - Implement concrete observer classes that update their state based on the subject's state changes.

5. **Client Code:**
   - The client code creates instances of the subject and observers, attaches observers to the subject, and triggers state changes in the subject.

**Pseudo Code Example:**

```pseudo
// Step 1: Define Subject Interface
interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

// Step 2: Define Observer Interface
interface Observer {
    update(subject: Subject): void;
}

// Step 3: Implement Concrete Subject
class ConcreteSubject implements Subject {
    private observers: List<Observer> = new ArrayList<Observer>();
    private state: string;

    public getState(): string {
        return this.state;
    }

    public setState(state: string): void {
        this.state = state;
        this.notify();
    }

    public attach(observer: Observer): void {
        this.observers.add(observer);
    }

    public detach(observer: Observer): void {
        this.observers.remove(observer);
    }

    public notify(): void {
        for (const observer in this.observers) {
            observer.update(this);
        }
    }
}

// Step 4: Implement Concrete Observers
class ConcreteObserverA implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject) {
            print("ConcreteObserverA: Reacted to the event. New state: " + subject.getState());
        }
    }
}

class ConcreteObserverB implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject) {
            print("ConcreteObserverB: Reacted to the event. New state: " + subject.getState());
        }
    }
}

// Step 5: Client Code
function clientCode() {
    const subject = new ConcreteSubject();

    const observerA = new ConcreteObserverA();
    subject.attach(observerA);

    const observerB = new ConcreteObserverB();
    subject.attach(observerB);

    subject.setState("State #1");
    // Output:
    // ConcreteObserverA: Reacted to the event. New state: State #1
    // ConcreteObserverB: Reacted to the event. New state: State #1

    subject.setState("State #2");
    // Output:
    // ConcreteObserverA: Reacted to the event. New state: State #2
    // ConcreteObserverB: Reacted to the event. New state: State #2

    subject.detach(observerA);

    subject.setState("State #3");
    // Output:
    // ConcreteObserverB: Reacted to the event. New state: State #3
}

// Usage
clientCode();
```

### Steps Explained:

1. **Define Subject Interface:**

   - Create a `Subject` interface that declares methods for attaching, detaching, and notifying observers (`attach`, `detach`, and `notify`).

2. **Define Observer Interface:**

   - Create an `Observer` interface that declares an `update` method. This method will be called by the subject to notify observers of state changes.

3. **Implement Concrete Subject:**

   - Implement a `ConcreteSubject` class that maintains a list of observers and a state. The `setState` method updates the state and calls the `notify` method to update all observers.

4. **Implement Concrete Observers:**

   - Implement `ConcreteObserverA` and `ConcreteObserverB` classes that implement the `Observer` interface. These classes update their state based on the subject's state changes.

5. **Client Code:**
   - The client code creates instances of the subject and observers, attaches observers to the subject, changes the subject's state, and observes the notifications received by the observers.

**Additional Example: Stock Market Monitoring**

Consider a scenario where you need to implement a stock market monitoring system where stock prices are observed by multiple entities.

```pseudo
// Step 1: Define Subject Interface
interface Stock {
    attach(observer: StockObserver): void;
    detach(observer: StockObserver): void;
    notify(): void;
}

// Step 2: Define Observer Interface
interface StockObserver {
    update(stock: Stock): void;
}

// Step 3: Implement Concrete Subject
class ConcreteStock implements Stock {
    private observers: List<StockObserver> = new ArrayList<StockObserver>();
    private price: number;

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
        this.notify();
    }

    public attach(observer: StockObserver): void {
        this.observers.add(observer);
    }

    public detach(observer: StockObserver): void {
        this.observers.remove(observer);
    }

    public notify(): void {
        for (const observer in this.observers) {
            observer.update(this);
        }
    }
}

// Step 4: Implement Concrete Observers
class ConcreteStockObserverA implements StockObserver {
    public update(stock: Stock): void {
        if (stock instanceof ConcreteStock) {
            print("ConcreteStockObserverA: Stock price updated to: " + stock.getPrice());
        }
    }
}

class ConcreteStockObserverB implements StockObserver {
    public update(stock: Stock): void {
        if (stock instanceof ConcreteStock) {
            print("ConcreteStockObserverB: Stock price updated to: " + stock.getPrice());
        }
    }
}

// Step 5: Client Code
function clientCode() {
    const stock = new ConcreteStock();

    const observerA = new ConcreteStockObserverA();
    stock.attach(observerA);

    const observerB = new ConcreteStockObserverB();
    stock.attach(observerB);

    stock.setPrice(100);
    // Output:
    // ConcreteStockObserverA: Stock price updated to: 100
    // ConcreteStockObserverB: Stock price updated to: 100

    stock.setPrice(150);
    // Output:
    // ConcreteStockObserverA: Stock price updated to: 150
    // ConcreteStockObserverB: Stock price updated to: 150

    stock.detach(observerA);

    stock.setPrice(200);
    // Output:
    // ConcreteStockObserverB: Stock price updated to: 200
}

// Usage
clientCode();
```

In this example, the `ConcreteStock` class acts as the subject, and `ConcreteStockObserverA` and `ConcreteStockObserverB` classes act as observers. The stock price changes are observed by the attached observers.

---

### State Design Pattern

**Problem Statement Recap:**
You need to allow an object to change its behavior when its internal state changes, making the object appear to change its class. This pattern is particularly useful when an object's behavior is dependent on its state and it needs to change behavior dynamically at runtime.

**Solution Steps:**

1. **Define State Interface:**

   - Create an interface that declares methods that correspond to the various behaviors of the context.

2. **Implement Concrete States:**

   - Implement concrete state classes that implement the state interface. Each class represents a different state of the context.

3. **Define Context Class:**

   - Implement the context class that maintains an instance of a concrete state class and delegates state-specific behavior to this instance.

4. **Client Code:**
   - The client interacts with the context object, which changes its behavior based on its current state.

**Pseudo Code Example:**

```pseudo
// Step 1: Define State Interface
interface State {
    handle(context: Context): void;
}

// Step 2: Implement Concrete States
class ConcreteStateA implements State {
    public handle(context: Context): void {
        print("ConcreteStateA: Handling request and transitioning to State B.");
        context.setState(new ConcreteStateB());
    }
}

class ConcreteStateB implements State {
    public handle(context: Context): void {
        print("ConcreteStateB: Handling request and transitioning to State A.");
        context.setState(new ConcreteStateA());
    }
}

// Step 3: Define Context Class
class Context {
    private state: State;

    constructor(state: State) {
        this.transitionTo(state);
    }

    public transitionTo(state: State): void {
        print("Context: Transitioning to " + state.constructor.name + ".");
        this.state = state;
    }

    public request(): void {
        this.state.handle(this);
    }
}

// Step 4: Client Code
function clientCode() {
    const context = new Context(new ConcreteStateA());
    context.request();  // Output: ConcreteStateA: Handling request and transitioning to State B.
                        //         Context: Transitioning to ConcreteStateB.
    context.request();  // Output: ConcreteStateB: Handling request and transitioning to State A.
                        //         Context: Transitioning to ConcreteStateA.
}

// Usage
clientCode();
```

### Steps Explained:

1. **Define State Interface:**

   - Create a `State` interface that declares the `handle` method. This method takes a context object as a parameter and defines the behavior associated with the state.

2. **Implement Concrete States:**

   - Implement `ConcreteStateA` and `ConcreteStateB` classes that implement the `State` interface. Each class provides its specific implementation of the `handle` method and transitions the context to another state.

3. **Define Context Class:**

   - Implement a `Context` class that maintains a reference to an instance of a `State` object. The `transitionTo` method changes the current state, and the `request` method delegates the request to the current state's `handle` method.

4. **Client Code:**
   - The client code creates a context object with an initial state and makes requests to the context. The context handles the requests by delegating them to the current state and transitioning between states as needed.

**Additional Example: Traffic Light System**

Consider a scenario where you need to implement a traffic light system that changes its behavior based on its current state (e.g., Red, Green, Yellow).

```pseudo
// Step 1: Define State Interface
interface TrafficLightState {
    changeLight(context: TrafficLightContext): void;
}

// Step 2: Implement Concrete States
class RedLightState implements TrafficLightState {
    public changeLight(context: TrafficLightContext): void {
        print("Red Light: Stop! Transitioning to Green Light.");
        context.setState(new GreenLightState());
    }
}

class GreenLightState implements TrafficLightState {
    public changeLight(context: TrafficLightContext): void {
        print("Green Light: Go! Transitioning to Yellow Light.");
        context.setState(new YellowLightState());
    }
}

class YellowLightState implements TrafficLightState {
    public changeLight(context: TrafficLightContext): void {
        print("Yellow Light: Caution! Transitioning to Red Light.");
        context.setState(new RedLightState());
    }
}

// Step 3: Define Context Class
class TrafficLightContext {
    private state: TrafficLightState;

    constructor(state: TrafficLightState) {
        this.transitionTo(state);
    }

    public transitionTo(state: TrafficLightState): void {
        print("TrafficLightContext: Transitioning to " + state.constructor.name + ".");
        this.state = state;
    }

    public requestChange(): void {
        this.state.changeLight(this);
    }
}

// Step 4: Client Code
function clientCode() {
    const trafficLight = new TrafficLightContext(new RedLightState());
    trafficLight.requestChange();  // Output: Red Light: Stop! Transitioning to Green Light.
                                   //         TrafficLightContext: Transitioning to GreenLightState.
    trafficLight.requestChange();  // Output: Green Light: Go! Transitioning to Yellow Light.
                                   //         TrafficLightContext: Transitioning to YellowLightState.
    trafficLight.requestChange();  // Output: Yellow Light: Caution! Transitioning to Red Light.
                                   //         TrafficLightContext: Transitioning to RedLightState.
}

// Usage
clientCode();
```

In this example, the `TrafficLightContext` class acts as the context, and `RedLightState`, `GreenLightState`, and `YellowLightState` classes act as concrete states. The traffic light changes its behavior based on its current state.

---

### Strategy Design Pattern

**Problem Statement Recap:**
You need to define a family of algorithms, encapsulate each one, and make them interchangeable. This pattern allows the algorithm to vary independently from clients that use it. It is particularly useful when you have multiple ways of doing something and want to switch between them easily.

**Solution Steps:**

1. **Define Strategy Interface:**

   - Create an interface that declares the method for the algorithm.

2. **Implement Concrete Strategies:**

   - Implement concrete strategy classes that implement the strategy interface.

3. **Define Context Class:**

   - Implement the context class that maintains a reference to a strategy object and uses it to execute the algorithm.

4. **Client Code:**
   - The client sets the desired strategy on the context and calls the context's method to execute the algorithm.

**Pseudo Code Example:**

```pseudo
// Step 1: Define Strategy Interface
interface Strategy {
    execute(a: number, b: number): number;
}

// Step 2: Implement Concrete Strategies
class ConcreteStrategyAdd implements Strategy {
    public execute(a: number, b: number): number {
        return a + b;
    }
}

class ConcreteStrategySubtract implements Strategy {
    public execute(a: number, b: number): number {
        return a - b;
    }
}

class ConcreteStrategyMultiply implements Strategy {
    public execute(a: number, b: number): number {
        return a * b;
    }
}

// Step 3: Define Context Class
class Context {
    private strategy: Strategy;

    public setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    public executeStrategy(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}

// Step 4: Client Code
function clientCode() {
    const context = new Context();

    context.setStrategy(new ConcreteStrategyAdd());
    print("Addition Strategy: " + context.executeStrategy(5, 3));  // Output: Addition Strategy: 8

    context.setStrategy(new ConcreteStrategySubtract());
    print("Subtraction Strategy: " + context.executeStrategy(5, 3));  // Output: Subtraction Strategy: 2

    context.setStrategy(new ConcreteStrategyMultiply());
    print("Multiplication Strategy: " + context.executeStrategy(5, 3));  // Output: Multiplication Strategy: 15
}

// Usage
clientCode();
```

### Steps Explained:

1. **Define Strategy Interface:**

   - Create a `Strategy` interface that declares the `execute` method. This method will be implemented by all concrete strategy classes.

2. **Implement Concrete Strategies:**

   - Implement `ConcreteStrategyAdd`, `ConcreteStrategySubtract`, and `ConcreteStrategyMultiply` classes that implement the `Strategy` interface. Each class provides its specific implementation of the `execute` method.

3. **Define Context Class:**

   - Implement a `Context` class that maintains a reference to a `Strategy` object. The `setStrategy` method sets the current strategy, and the `executeStrategy` method calls the `execute` method on the current strategy.

4. **Client Code:**
   - The client code creates a `Context` object, sets different strategies on it, and calls the `executeStrategy` method to perform operations using the current strategy.

**Additional Example: Sorting Algorithms**

Consider a scenario where you need to implement different sorting algorithms (e.g., bubble sort, quick sort, merge sort).

```pseudo
// Step 1: Define Strategy Interface
interface SortingStrategy {
    sort(data: List<number>): List<number>;
}

// Step 2: Implement Concrete Strategies
class BubbleSortStrategy implements SortingStrategy {
    public sort(data: List<number>): List<number> {
        // Implement bubble sort
        const n = data.size();
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (data.get(j) > data.get(j + 1)) {
                    const temp = data.get(j);
                    data.set(j, data.get(j + 1));
                    data.set(j + 1, temp);
                }
            }
        }
        return data;
    }
}

class QuickSortStrategy implements SortingStrategy {
    public sort(data: List<number>): List<number> {
        // Implement quick sort
        if (data.size() < 2) {
            return data;
        }
        const pivot = data.get(0);
        const less = new ArrayList<number>();
        const greater = new ArrayList<number>();
        for (let i = 1; i < data.size(); i++) {
            if (data.get(i) <= pivot) {
                less.add(data.get(i));
            } else {
                greater.add(data.get(i));
            }
        }
        const sortedLess = this.sort(less);
        const sortedGreater = this.sort(greater);
        return sortedLess.concat(pivot, sortedGreater);
    }
}

class MergeSortStrategy implements SortingStrategy {
    public sort(data: List<number>): List<number> {
        // Implement merge sort
        if (data.size() <= 1) {
            return data;
        }
        const middle = Math.floor(data.size() / 2);
        const left = data.slice(0, middle);
        const right = data.slice(middle);

        const sortedLeft = this.sort(left);
        const sortedRight = this.sort(right);

        return this.merge(sortedLeft, sortedRight);
    }

    private merge(left: List<number>, right: List<number>): List<number> {
        const result = new ArrayList<number>();
        while (left.size() && right.size()) {
            if (left.get(0) <= right.get(0)) {
                result.add(left.shift());
            } else {
                result.add(right.shift());
            }
        }
        return result.concat(left).concat(right);
    }
}

// Step 3: Define Context Class
class SortingContext {
    private strategy: SortingStrategy;

    public setStrategy(strategy: SortingStrategy): void {
        this.strategy = strategy;
    }

    public sort(data: List<number>): List<number> {
        return this.strategy.sort(data);
    }
}

// Step 4: Client Code
function clientCode() {
    const context = new SortingContext();

    const data = new ArrayList<number>([5, 3, 8, 2, 1, 4]);

    context.setStrategy(new BubbleSortStrategy());
    print("Bubble Sort: " + context.sort(data).toString());  // Output: Bubble Sort: [1, 2, 3, 4, 5, 8]

    context.setStrategy(new QuickSortStrategy());
    print("Quick Sort: " + context.sort(data).toString());  // Output: Quick Sort: [1, 2, 3, 4, 5, 8]

    context.setStrategy(new MergeSortStrategy());
    print("Merge Sort: " + context.sort(data).toString());  // Output: Merge Sort: [1, 2, 3, 4, 5, 8]
}

// Usage
clientCode();
```

In this example, the `SortingContext` class acts as the context, and `BubbleSortStrategy`, `QuickSortStrategy`, and `MergeSortStrategy` classes act as concrete strategies. The context dynamically changes the sorting strategy based on the client's request.

---

### Template Method Design Pattern

**Problem Statement Recap:**
You need to define the skeleton of an algorithm in a method, deferring some steps to subclasses. This pattern allows subclasses to redefine certain steps of an algorithm without changing its structure.

**Solution Steps:**

1. **Define Abstract Base Class:**

   - Create an abstract class that defines the template method. The template method should call abstract methods that will be implemented by subclasses.

2. **Implement Concrete Subclasses:**

   - Implement concrete subclasses that provide specific implementations for the abstract methods defined in the base class.

3. **Client Code:**
   - The client interacts with the concrete subclasses through the template method.

**Pseudo Code Example:**

```pseudo
// Step 1: Define Abstract Base Class
abstract class AbstractClass {
    // Template method
    public final templateMethod(): void {
        this.baseOperation1();
        this.requiredOperations1();
        this.baseOperation2();
        this.requiredOperations2();
        this.hook();
    }

    // These operations already have implementations
    protected baseOperation1(): void {
        print("AbstractClass: Base operation 1");
    }

    protected baseOperation2(): void {
        print("AbstractClass: Base operation 2");
    }

    // These operations must be implemented in subclasses
    protected abstract requiredOperations1(): void;
    protected abstract requiredOperations2(): void;

    // This is a "hook." Subclasses may override it, but it's optional
    protected hook(): void {}
}

// Step 2: Implement Concrete Subclasses
class ConcreteClass1 extends AbstractClass {
    protected requiredOperations1(): void {
        print("ConcreteClass1: Implemented Operation1");
    }

    protected requiredOperations2(): void {
        print("ConcreteClass1: Implemented Operation2");
    }
}

class ConcreteClass2 extends AbstractClass {
    protected requiredOperations1(): void {
        print("ConcreteClass2: Implemented Operation1");
    }

    protected requiredOperations2(): void {
        print("ConcreteClass2: Implemented Operation2");
    }

    protected hook(): void {
        print("ConcreteClass2: Overridden Hook");
    }
}

// Step 3: Client Code
function clientCode(abstractClass: AbstractClass) {
    abstractClass.templateMethod();
}

// Usage
print("Client: Testing ConcreteClass1:");
clientCode(new ConcreteClass1());
// Output:
// AbstractClass: Base operation 1
// ConcreteClass1: Implemented Operation1
// AbstractClass: Base operation 2
// ConcreteClass1: Implemented Operation2

print("Client: Testing ConcreteClass2:");
clientCode(new ConcreteClass2());
// Output:
// AbstractClass: Base operation 1
// ConcreteClass2: Implemented Operation1
// AbstractClass: Base operation 2
// ConcreteClass2: Implemented Operation2
// ConcreteClass2: Overridden Hook
```

### Steps Explained:

1. **Define Abstract Base Class:**

   - Create an abstract class `AbstractClass` that defines the `templateMethod`. This method calls a series of operations, some of which have default implementations (`baseOperation1`, `baseOperation2`) and others that are abstract (`requiredOperations1`, `requiredOperations2`). A hook method (`hook`) is also provided, which can be optionally overridden by subclasses.

2. **Implement Concrete Subclasses:**

   - Implement `ConcreteClass1` and `ConcreteClass2` classes that extend `AbstractClass`. These subclasses provide specific implementations for the abstract methods defined in the base class. `ConcreteClass2` also overrides the hook method to provide additional behavior.

3. **Client Code:**
   - The client interacts with the concrete subclasses through the `templateMethod`. It calls this method on instances of the concrete subclasses, which execute the steps of the algorithm defined in the base class, including the steps provided by the subclasses.

**Additional Example: Data Processing**

Consider a scenario where you need to implement a data processing algorithm that reads, processes, and saves data. The steps for reading and saving data might be the same, but the processing step can vary.

```pseudo
// Step 1: Define Abstract Base Class
abstract class DataProcessor {
    // Template method
    public final processData(): void {
        this.readData();
        this.processDataStep();
        this.saveData();
    }

    // These operations already have implementations
    protected readData(): void {
        print("DataProcessor: Reading data");
    }

    protected saveData(): void {
        print("DataProcessor: Saving data");
    }

    // This operation must be implemented in subclasses
    protected abstract processDataStep(): void;
}

// Step 2: Implement Concrete Subclasses
class CSVDataProcessor extends DataProcessor {
    protected processDataStep(): void {
        print("CSVDataProcessor: Processing data in CSV format");
    }
}

class XMLDataProcessor extends DataProcessor {
    protected processDataStep(): void {
        print("XMLDataProcessor: Processing data in XML format");
    }
}

// Step 3: Client Code
function clientCode(dataProcessor: DataProcessor) {
    dataProcessor.processData();
}

// Usage
print("Client: Testing CSVDataProcessor:");
clientCode(new CSVDataProcessor());
// Output:
// DataProcessor: Reading data
// CSVDataProcessor: Processing data in CSV format
// DataProcessor: Saving data

print("Client: Testing XMLDataProcessor:");
clientCode(new XMLDataProcessor());
// Output:
// DataProcessor: Reading data
// XMLDataProcessor: Processing data in XML format
// DataProcessor: Saving data
```

In this example, the `DataProcessor` class acts as the abstract base class, and `CSVDataProcessor` and `XMLDataProcessor` classes act as concrete subclasses. The concrete subclasses provide specific implementations for processing data in different formats.

---

### Visitor Design Pattern

**Problem Statement Recap:**
You need to add further operations to objects without modifying their structure. This pattern allows you to define a new operation without changing the classes of the elements on which it operates.

**Solution Steps:**

1. **Define Visitor Interface:**

   - Create an interface that declares visit methods for each type of element.

2. **Define Element Interface:**

   - Create an interface that declares an accept method, which takes a visitor as an argument.

3. **Implement Concrete Visitors:**

   - Implement concrete visitor classes that provide specific implementations for the visit methods.

4. **Implement Concrete Elements:**

   - Implement concrete element classes that implement the accept method to call the appropriate visitor method.

5. **Client Code:**
   - The client creates elements and visitors, and passes visitors to elements via the accept method.

**Pseudo Code Example:**

```pseudo
// Step 1: Define Visitor Interface
interface Visitor {
    visitConcreteElementA(element: ConcreteElementA): void;
    visitConcreteElementB(element: ConcreteElementB): void;
}

// Step 2: Define Element Interface
interface Element {
    accept(visitor: Visitor): void;
}

// Step 3: Implement Concrete Visitors
class ConcreteVisitor1 implements Visitor {
    public visitConcreteElementA(element: ConcreteElementA): void {
        print("ConcreteVisitor1: Visiting ConcreteElementA.");
    }

    public visitConcreteElementB(element: ConcreteElementB): void {
        print("ConcreteVisitor1: Visiting ConcreteElementB.");
    }
}

class ConcreteVisitor2 implements Visitor {
    public visitConcreteElementA(element: ConcreteElementA): void {
        print("ConcreteVisitor2: Visiting ConcreteElementA.");
    }

    public visitConcreteElementB(element: ConcreteElementB): void {
        print("ConcreteVisitor2: Visiting ConcreteElementB.");
    }
}

// Step 4: Implement Concrete Elements
class ConcreteElementA implements Element {
    public accept(visitor: Visitor): void {
        visitor.visitConcreteElementA(this);
    }
}

class ConcreteElementB implements Element {
    public accept(visitor: Visitor): void {
        visitor.visitConcreteElementB(this);
    }
}

// Step 5: Client Code
function clientCode(elements: List<Element>, visitor: Visitor) {
    for (const element in elements) {
        element.accept(visitor);
    }
}

// Usage
const elements = new ArrayList<Element>();
elements.add(new ConcreteElementA());
elements.add(new ConcreteElementB());

print("Client: Using ConcreteVisitor1:");
const visitor1 = new ConcreteVisitor1();
clientCode(elements, visitor1);
// Output:
// ConcreteVisitor1: Visiting ConcreteElementA.
// ConcreteVisitor1: Visiting ConcreteElementB.

print("Client: Using ConcreteVisitor2:");
const visitor2 = new ConcreteVisitor2();
clientCode(elements, visitor2);
// Output:
// ConcreteVisitor2: Visiting ConcreteElementA.
// ConcreteVisitor2: Visiting ConcreteElementB.
```

### Steps Explained:

1. **Define Visitor Interface:**

   - Create a `Visitor` interface that declares visit methods for each type of element. For example, `visitConcreteElementA` and `visitConcreteElementB`.

2. **Define Element Interface:**

   - Create an `Element` interface that declares an `accept` method. This method takes a visitor as an argument.

3. **Implement Concrete Visitors:**

   - Implement `ConcreteVisitor1` and `ConcreteVisitor2` classes that implement the `Visitor` interface. Each class provides specific implementations for the visit methods.

4. **Implement Concrete Elements:**

   - Implement `ConcreteElementA` and `ConcreteElementB` classes that implement the `Element` interface. Each class implements the `accept` method to call the appropriate visit method on the visitor.

5. **Client Code:**
   - The client creates instances of elements and visitors, and passes visitors to elements via the `accept` method. The visitors perform their operations on the elements.

**Additional Example: File System with Visitors**

Consider a scenario where you need to implement operations on different types of files (e.g., text files, image files) without modifying their classes.

```pseudo
// Step 1: Define Visitor Interface
interface FileVisitor {
    visitTextFile(file: TextFile): void;
    visitImageFile(file: ImageFile): void;
}

// Step 2: Define Element Interface
interface File {
    accept(visitor: FileVisitor): void;
}

// Step 3: Implement Concrete Visitors
class ConcreteFileVisitor1 implements FileVisitor {
    public visitTextFile(file: TextFile): void {
        print("ConcreteFileVisitor1: Visiting TextFile.");
    }

    public visitImageFile(file: ImageFile): void {
        print("ConcreteFileVisitor1: Visiting ImageFile.");
    }
}

class ConcreteFileVisitor2 implements FileVisitor {
    public visitTextFile(file: TextFile): void {
        print("ConcreteFileVisitor2: Visiting TextFile.");
    }

    public visitImageFile(file: ImageFile): void {
        print("ConcreteFileVisitor2: Visiting ImageFile.");
    }
}

// Step 4: Implement Concrete Elements
class TextFile implements File {
    public accept(visitor: FileVisitor): void {
        visitor.visitTextFile(this);
    }
}

class ImageFile implements File {
    public accept(visitor: FileVisitor): void {
        visitor.visitImageFile(this);
    }
}

// Step 5: Client Code
function clientCode(files: List<File>, visitor: FileVisitor) {
    for (const file in files) {
        file.accept(visitor);
    }
}

// Usage
const files = new ArrayList<File>();
files.add(new TextFile());
files.add(new ImageFile());

print("Client: Using ConcreteFileVisitor1:");
const fileVisitor1 = new ConcreteFileVisitor1();
clientCode(files, fileVisitor1);
// Output:
// ConcreteFileVisitor1: Visiting TextFile.
// ConcreteFileVisitor1: Visiting ImageFile.

print("Client: Using ConcreteFileVisitor2:");
const fileVisitor2 = new ConcreteFileVisitor2();
clientCode(files, fileVisitor2);
// Output:
// ConcreteFileVisitor2: Visiting TextFile.
// ConcreteFileVisitor2: Visiting ImageFile.
```

In this example, the `FileVisitor` interface acts as the visitor, and `TextFile` and `ImageFile` classes act as elements. The visitors perform operations on the files without modifying their classes.
