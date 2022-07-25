import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myCalculator';
  toshow = '0';
  currvalue = '';
  writetoinput(value: string) {
    this.currvalue = this.currvalue + value;
    this.toshow = this.currvalue;
  }
  equals() {
    this.toshow = eval(this.currvalue);
    this.currvalue = this.toshow;
    return eval(this.currvalue);
  }
  clear() {
    this.currvalue = '';
    this.toshow = '0';
  }
  back() {
    this.currvalue = this.currvalue.slice(0, -1);
    this.toshow = this.currvalue;
    if (this.toshow == '') {
      this.toshow = '0';
    }
  }

  calcval(solve: any) {
    if (solve.charAt(0) == '0') {
      solve = solve.slice(1);
    }

    this.toshow = eval(solve);
  }
}
