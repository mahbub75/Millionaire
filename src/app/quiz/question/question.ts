import {QuestionChoice} from "./question-choice";

export interface Question {
  id: string;
  correctAnswerIds: string[];
  point: number;
  title:string;
  choices: QuestionChoice[]
}


