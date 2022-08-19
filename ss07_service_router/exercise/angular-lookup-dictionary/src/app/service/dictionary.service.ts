import { Injectable } from '@angular/core';
import {IWord} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  iWordList: IWord[] = [];
  constructor() {
    this.iWordList.push({
      word: 'Toán',
      mean: 'Math',
    }, {
      word: 'Lý',
      mean: 'Physical',
    }, {
      word: 'Hoá',
      mean: 'subjectization',
    }, {
      word: 'Sinh',
      mean: 'disciple',
    });
  }
  getAll() {
    return this.iWordList;
  }
  getByMean(mean) {
    return this.iWordList.find(dictionary => dictionary.mean === mean);
  }
}
