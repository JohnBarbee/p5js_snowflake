class Particle {
  constructor(x,y,w,minMax){
  	this.x = x;
  	this.y = y;
    this.w = w;
    this.minMax = minMax;
    this.step = 0;
    this.inPlace = false;
  }
  
  move(){
		this.x -= 1;
    this.y += random(-this.minMax, this.minMax);
    if(this.y < 0){
      this.y = 0;
    }
    for(var j = 0; j < p.length; j += 1){
      	if(p[j] == this){
        	continue;
        }
    	 	var dx = p[j].x - this.x;
        var dy = p[j].y - this.y;
        var radii = (this.w/2) + (p[j].w/2);
        if ( ( dx * dx )  + ( dy * dy ) < radii * radii ) 
        {
          	if(this.step == 0){
            	isDone = true;
              break;
            } else {
            	addParticle();
              break;
            }
        }
    }
    if(this.x <= 0){
    	 addParticle();
    }
    this.step += 1;
  }
  
  snapMove(){
    while(this.inPlace == false){
      this.x -= 1;
      this.y += random(-this.minMax, this.minMax);
      if(this.y < 0){
        this.y = 0;
      }
      for(var j = 0; j < p.length; j += 1){
          if(p[j] == this){
            continue;
          }
          var dx = p[j].x - this.x;
          var dy = p[j].y - this.y;
          var radii = (this.w/2) + (p[j].w/2);
          if ((dx * dx)  + (dy * dy) < radii * radii) 
          {
              if(this.step == 0){
                isDone = true;
                this.inPlace = true;
                break;
              } else {
                addParticle();
                this.inPlace = true;
                return;
              }
          }
      }
      if(this.x <= 0){
        addParticle();
        this.inPlace = true;
      }
      this.step += 1;
    }
  }
  
  show(){
  	for(var v = 0; v < 8; v += 1){
      rotate((PI/4) * v)
      stroke(255);
    	ellipse(this.x, this.y, this.w, this.w);
      stroke(255);
    	ellipse(this.x, -this.y, this.w, this.w);
    }
  }
}