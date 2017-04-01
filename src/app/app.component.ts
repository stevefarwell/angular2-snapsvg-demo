import {Component} from "@angular/core";

import "snapsvg-cjs";
declare var Snap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  ngOnInit(){
    this.createSvg();
  }

  //Create svg
  createSvg() {

    let svgCanvas;
    svgCanvas = Snap("#svg");

    // Lets create big circle in the middle:
    var bigCircle = svgCanvas.circle(150, 150, 100);
    // By default its black, lets change its attributes
    bigCircle.attr({
      fill: "#bada55",
      stroke: "#000",
      strokeWidth: 5
    });
    // Now lets create another small circle:
    var smallCircle = svgCanvas.circle(100, 150, 70);

  }
}
