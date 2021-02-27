import {Component, OnInit} from '@angular/core';
import {SpeechRecognitionService} from './speech-recognition.service';
import {ConsoleLogger} from '@angular/compiler-cli/ngcc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dictate';
  content = '';

  constructor(public speechReco: SpeechRecognitionService) {
  }

  ngOnInit(): void {
    this.speechReco.init();

    this.speechReco.interimResult.subscribe(result => {
      this.content = result;
    });

    this.speechReco.speechEnded.subscribe(() => {

    });
  }
}
