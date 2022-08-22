import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../../service/dictionary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {IWord} from '../../model/iword';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: IWord;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((pramMap: ParamMap) => {
      const mean = pramMap.get('mean');
      this.dictionary = this.dictionaryService.getByMean(mean);
    });
  }
}
