import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  finalResult:number;
  txtCalc: string;
  textValue: string;
  arrTable: number[][] = [];
  arrInput: number[] = [];
  result: string = '';
  constructor() {
    this.setTable();
  }
  //=================1===============//
  setInput(): void {
    if (this.textValue == undefined || this.textValue == '')
      this.textValue = '0';
    this.arrInput.push(parseInt(this.textValue));
    this.textValue = '';
  }
  setTable(): void {
    let arrTemp: number[] = [];
    let i: number = 1;
    for (i; i < 26; i++) {
      for (let j = i; j < i + 5; j++) {
        arrTemp.push(j);
      }
      this.arrTable.push(arrTemp);
      arrTemp = [];
      i += 4;
    }
    this.getBingo();
  }
  getBingo() {
    let bingo = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (this.arrInput.indexOf(this.arrTable[j][i])) {
          bingo++;
        }
        if (bingo == 5) {
          this.result = 'Bingo';
        } else {
          bingo = 0;
        }
      }
    }
  }

  //=================2===============//
  getIndex(): void {
    let closed: number = 0;
    let opened: number = 0;
    let arr: string[] = this.txtCalc.split(/+-*()/)
    for (let index = 0; index < this.txtCalc.length; index++) {
      if (arr[index] == ')') {
        closed = index;
        for (let j = index; j > 0; j--) {
          if (arr[j] == '(') {
            opened = j;
            this.getCalc(arr,opened,closed);
          }
        }
      }
    }
  }

  getCalc(arr: string[], start: number, end: number): void {
    for (let i = start; i < end+1; i++) {
      let result: number[] = [];
      let oper: string;
      let no: number[] = [];
      let calc: number = 0;
      if ("+-*/()".indexOf(arr[i]) > -1) {
        no.push(parseInt(arr[i]));
        calc++;
      }
      else {
        oper = arr[i];
      }
      if (calc == 2) {
        switch (oper) {
          case '+':
            result.push(no[0] + no[1]);
            break;
          case '-':
            result.push(no[0] - no[1]);
            break;
          case '*':
            result.push(no[0] * no[1]);
            break;
          case '/':
            result.push(no[0] / no[1]);
            break;
        }
        no=[];      
      }
    }
  }
}
