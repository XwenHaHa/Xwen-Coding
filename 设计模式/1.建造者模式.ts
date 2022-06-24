// 建造者模式就是将一个复杂对象分解成多个相对简单的部分,然后根据不同需要分别创建它们，最后构建成该复杂对象
class Car {
  constructor(
    public engine: string,
    public chassis: string,
    public body: string
  ) {}
}

class CarBuilder {
  engine!: string; //引擎
  chassis!: string; //底盘
  body!: string; //车身

  addChassis(chassis: string) {
    this.chassis = chassis;
    return this;
  }

  addEngine(engine: string) {
    this.engine = engine;
    return this;
  }

  addBody(body: string) {
    this.body = body;
    return this;
  }

  build() {
    return new Car(this.engine, this.chassis, this.body);
  }
}

const car = new CarBuilder();

car.addChassis("复合材料");
car.addEngine("v12");
car.addBody("钛合金");

console.log(car.build().body);
