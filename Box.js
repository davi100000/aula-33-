class Box {
  constructor(x, y, largura, altura) {
    this.posX = x;
    this.posY = y;
    this.lar = largura;
    this.alt = altura;
    var options = {
        'restitution': 0.8,
        'friction': 1.0,
        'density': 1.0
    }
    this.body = Bodies.rectangle(this.posX, this.posY, this.lar, this.alt, options);
    World.add(world, this.body);

}
display() {
    /*var pos =this.body.position;//alias para this.body.position é opicional
    var angle = this.body.angle;
    */
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    rect(0, 0, this.lar, this.alt);
    pop();
}
};
