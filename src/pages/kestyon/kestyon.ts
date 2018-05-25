import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { QuestionProvider } from '../../providers/question/question';
import { Question } from '../model/question';

@IonicPage()
@Component({
  selector: 'page-kestyon',
  templateUrl: 'kestyon.html',
})
export class KestyonPage {
  questions  = {};
  answer = 0;
  hideButtonNext = true;
  stickers = 0;

  constructor(public navCtrl: NavController, public questionProvider: QuestionProvider ) {

  }

  ionViewDidLoad() {
    
  }

  ionViewDidEnter() {
    this.questions = this.questionProvider.getQuestion();
  }

  clickOnTrue() {
  this.hideButtonNext = false;
    if (this.questions['answer'] === true ) {
      this.answer = 1;
      this.stickers = 1;
    } else { 
      this.answer = 2;
      this.stickers = 2;
    }
  }

  clickOnFalse() {
    this.hideButtonNext = false;
    if (this.questions['answer'] === false ) {
      this.answer = 1;
      this.stickers = 1;
    } else {
      this.answer = 2;
      this.stickers = 2;
    }
  }

}
