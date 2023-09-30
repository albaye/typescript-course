class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("blue");

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color); // reference to the contructor of the parent
  }
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(3, "red");
car.startDrivingProcess();

console.log(car.color);
