import { Injectable } from '@angular/core';
import { Question } from '../../pages/model/question';

@Injectable()
export class QuestionProvider {
  public questions: Question[] = [
    {question: 'Paris est la capitale de la france ?', answer: true, moreInfo: 'Oui c\'est la capitale'},
    {question: 'Barcelone est la capitale de l\'espagne ?', answer: false, moreInfo: 'non la capitale est Madrid'},
    {question: 'Porto est la capitale du portugal ?', answer: false, moreInfo: 'non la capitale du portugal est Lisbonne'}    
  ];
 
   constructor() {}
    
    getQuestions() {
      return this.questions; 
     }

    getQuestion() {
      var nb = Math.floor(Math.random() * this.questions.length);

      let current_question = this.questions[nb];

      
      return current_question;
    } 

}
