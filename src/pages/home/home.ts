import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KestyonPage } from '../kestyon/kestyon';
//import { QuestionProvider } from '../../providers/question/question';
//import { Question } from '../model/question';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /* questions: Question[] = []; */
/*  */
  constructor(public navCtrl: NavController) { }

 /*  ionViewDidLoad() {
    //console.log("ionViewDidLoad");
    this.questionProvider.getQuestions().then(res => {
      if (!res) res = [];
      this.questionProvider.setQuestions(res);
    })
  }

  ionViewDidEnter() {
    this.questionProvider.getQuestions().then(res => {
      this.questions = res;
    })
  } */

  playing() {
    this.navCtrl.push(KestyonPage);
  }

}
