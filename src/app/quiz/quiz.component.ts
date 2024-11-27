import {Component} from '@angular/core';
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
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  protected readonly questions: Question[] = questionsList;
  protected currentQuestionIndex: number = 0;
  protected currentQuestion: Question = this.questions[this.currentQuestionIndex];
  protected loading = false;
  private selectedItems: string[] = [];
  private score = 0;

  protected selectNextQuestion() {
    this.currentQuestionIndex++;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.selectedItems = [];
  }

  protected updateSelectedItems(selectedItems: string[]) {
    this.selectedItems = selectedItems;
  }

  protected checkAnswer() {
    this.loading = true;
    const correctChoices = this.currentQuestion.correctAnswerIds;
    const correctChoicesCount = correctChoices.length;
    const choicePoint = this.currentQuestion.point / correctChoicesCount;
    this.selectedItems.forEach((item, index) => {
      if (correctChoices.includes(item)) {
        this.score = this.score + choicePoint;
      }
    })
    this.loading = false;
  }
}
