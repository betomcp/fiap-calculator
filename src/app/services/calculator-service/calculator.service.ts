import { Injectable } from '@angular/core';
import { FiapSubject } from 'src/app/model/subject-model';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private med1: number = 0;
  private med2: number = 0;

  constructor() { }

  public calculate(subject: FiapSubject){
    if(subject.sem1Med != 0){
      this.med1 = subject.sem1Med;
      this.med2 = this.calculateSemesterMedia(subject, 2);

      return {
        year: this.getFinalMedia(),
        needs: this.getNeeds(),
        gsPoints: this.needGsCalculate(this.getNeeds())
      }

    }else{

      this.med1 = this.calculateSemesterMedia(subject, 1);

      return {
        year: this.getFinalMedia(),
        needs: this.getNeeds(),
        gsPoints: this.needGsCalculate(this.getNeeds())
      }
    }
  }

  private needGsCalculate(needs: number){
    return needs * 10 / 3.6;
  }

  public calculateSemesterMedia(subject: FiapSubject, sem: number){
    if(sem == 1){
      let cpsSpr = this.calculateCpsAndSprints(subject.sem1Cp1, subject.sem1Cp2, subject.sem1Cp3, subject.sprint1, subject.sprint2);
      return cpsSpr * 0.4 + subject.sem1Gs * 0.6;
    }else{
      let cpsSpr = this.calculateCpsAndSprints(subject.sem2Cp1, subject.sem2Cp2, subject.sem2Cp3, subject.sprint3, subject.sprint4);
      return cpsSpr * 0.4 + subject.sem2Gs * 0.6;
    }
  }

  public calculateCpsAndSprints(cp1: number, cp2: number, cp3: number, spr1: number, spr2: number){

    if(cp1 < cp2){
      let aux = cp1;
      cp1 = cp2;
      cp2 = aux;
    }

    if(cp2 < cp3){
      let aux = cp2;
      cp2 = cp3;
      cp3 = aux;
    }

    return (cp1 + cp2 + spr1 + spr2) / 4;

  }

  private getFinalMedia(){
    return this.med1 * 0.4 + this.med2 * 0.6;
  }

  private getNeeds(){
    return 6 - this.getFinalMedia();
  }

}
