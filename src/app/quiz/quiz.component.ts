import {ChangeDetectionStrategy, Component} from '@angular/core';
import questionsList from "../../assets/questions.json"
import {Question} from "./question/question";
import {QuestionComponent} from "./question/question.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    QuestionComponent,
    MatButton
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizComponent {
  protected readonly questions: Question[] = questionsList;
  protected currentQuestionIndex: number = 0;
  protected currentQuestion: Question = this.questions[this.currentQuestionIndex];
  protected isNextBtnDisable = true;
  protected score = 0;
  protected isCompleted = false;
  private selectedItems: string[] = [];

  protected selectNextQuestion() {
    if (this.currentQuestionIndex === this.questions.length-1){
      this.isCompleted = true;
      return;
    }
    this.currentQuestionIndex++;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.selectedItems = [];
    this.isNextBtnDisable = true
  }

  protected updateSelectedItems(selectedItems: string[]) {
    this.selectedItems = selectedItems;
  }

  protected RecalculateScore() {
    this.isNextBtnDisable = false;
    const correctChoices = this.currentQuestion.correctAnswerIds;
    const correctChoicesCount = correctChoices.length;
    const choicePoint = this.currentQuestion.point / correctChoicesCount;
    let acceptedPoint = 0
    this.selectedItems.forEach((item, index) => {
      if (correctChoices.includes(item)) {
        acceptedPoint = acceptedPoint + choicePoint;
      } else {
        acceptedPoint = acceptedPoint - choicePoint;
      }
    })
    if(acceptedPoint>0){
      this.score = this.score + acceptedPoint;
    }
  }
}
