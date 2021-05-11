class Form
{
    constructor(){
       this.title = createElement("h1");
       this. btn = createButton("Play");
       this.story = createElement("h3");
       this.line1 = createElement("h4");
       this.line2 = createElement("h4");
       this.line3 = createElement("h4");
       this.line4 = createElement("h4");
       this.rule = createElement("h3");
       this.rule1 = createElement("h4");
       this.rule2 = createElement("h4");
       this.rule3 = createElement("h4");
       this.rule4 = createElement("h4");
       this.rule5 = createElement("h4");
       this.rule6 = createElement("h4");
}
    display(){
        this.title.position(510,3)
  this.title.html("The living bag");
 this.btn.position(600,500);
  this.btn.mousePressed(()=>{gameState = 1});
  this.story.position(600,50);
  this.story.html("Story");
  this.line1.position(250,100);
  this.line1.html("There is a poor old man starving for food, there is a forest which has a bag, into which when you");
  this.line2.position(250,125);
  this.line2.html("plunge your hand you get anything you want! But the forest has many hurdles, whoever came here");
  this.line3.position(250,150);
  this.line3.html("in greed died! But you are here for a good cause so do you have the skill to help the poor man?");
  this.line4.position(250,175);
  this.line4.html("You can do it!");
  this.rule.position(300,200);
  this.rule.html("Rules :-")
  this.rule1.position(250,225);
  this.rule1.html("1) To start the game make the player touch the button near him in his cage, controlling him through the arrow keys.");
  this.rule2.position(250,250);
  this.rule2.html("2) Control the player with your arrow keys.");
  this.rule3.position(250,275);
  this.rule3.html("3) Remember! You only have 3 chances to help the old man. So do not touch the hurdles!");
  this.rule4.position(250,300);
  this.rule4.html("4) When you come near the bag press space to grab and carry it.");
  this.rule5.position(250,325);
  this.rule5.html("5) Come to the end point where there is the old man.")
  this.rule6.position(250,350);
  this.rule6.html("6) To end the game make the player press the button near the old man outside his cage, so that you can enter it and give the bag to the man.")
 }
    
hide(){
this.title.hide();
this.line1.hide();
this.line2.hide();
this.line3.hide();
this.line4.hide();
this.story.hide();
this.rule.hide();
this.rule1.hide();
this.rule2.hide();
this.rule3.hide();
this.rule4.hide();
this.rule5.hide();
this.rule6.hide();
this.btn.hide();
    }
}