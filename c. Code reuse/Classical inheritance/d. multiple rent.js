// you can inherit from many object using the rent pattern

function Cat() {
  this.legs = 4;
  this.tails = true;
}

function Bird() {
  this.fly = true;
  this.feather = true;
}

function FlyingFeline() {
  Cat.apply(this);
  Bird.apply(this);
}

var animal = new FlyingFeline();
