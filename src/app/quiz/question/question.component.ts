import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Question} from "./question";
import {MatCheckbox, MatCheckboxChange} from "@angular/material/checkbox";
import {QuestionChoice} from "./question-choice";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    MatCheckbox,
    MatButton
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent {
  @Input({required: true, alias: 'question'}) set selectedQuestion(question: Question) {
    this.question = question;
    this.isDisable = false;
    this.selectedItems = [];
    this.showCorrectAnswers = false;
  };

  @Output() selectionChanged = new EventEmitter<string[]>();
  @Output() saveClicked = new EventEmitter();
  protected isDisable = false;
  protected showCorrectAnswers = false;
  protected question!: Question;
  private selectedItems: string[] = [];

  protected checkSelectedItems(matCheckboxChange: MatCheckboxChange, choice: QuestionChoice, index: number) {
    if (matCheckboxChange.checked) {
      this.selectedItems.push(choice.id)
    } else {
      this.selectedItems.splice(index, 1)
    }
    this.selectionChanged.emit(this.selectedItems);
  }

  protected save() {
    this.showCorrectAnswers = true;
    this.isDisable = true;
    this.saveClicked.emit();
  }

}
