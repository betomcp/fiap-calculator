import { Component, Input, OnInit } from '@angular/core';
import { FiapSubject } from 'src/app/model/subject-model';
import { CalculatorService } from 'src/app/services/calculator-service/calculator.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  @Input() public subject: FiapSubject = new FiapSubject();
  public isDisable: boolean = true;
  public editValue: string = 'Editar';
  public bordeActive: string = '';

  constructor(private calculator: CalculatorService) { }

  ngOnInit(): void {
  }

  public getCalc(){
    return {
      year: this.calculator.calculate(this.subject).year,
      needs: this.calculator.calculate(this.subject).needs,
      gsPoints: this.calculator.calculate(this.subject).gsPoints
    }
  }

  public toFixedOnTwo(value: number){
    return value.toFixed(2);
  }

  public editName(){
    if(this.isDisable){
      this.editValue = 'Salvar'
      this.isDisable = false;
      this.bordeActive = 'border: solid 1px gray;';
    }
    else {
      this.editValue = 'Editar'
      this.isDisable = true;
      this.bordeActive = '';
    }
  }
}
