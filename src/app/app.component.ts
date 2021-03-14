import {Component, OnInit} from '@angular/core';
import {SpeechRecognitionService} from './speech-recognition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dictate';
  content = '';
  isContinued = false;
  oldValue = '';

  constructor(public speechReco: SpeechRecognitionService) {
  }

  ngOnInit(): void {
    this.speechReco.init();

    this.speechReco.interimResult.subscribe(result => {
      if (this.isContinued) {
        this.content = this.oldValue + result;
      } else {
        this.content = result;
      }
    });
  }

  isContinuedHandler(event: boolean): void {
    this.isContinued = event;

    if (event) {
      this.oldValue = this.content + ' ';
    }
  }

  reset(): void {
    this.content = '';
  }

  isBrowserChrome(): boolean {
    return navigator.userAgent.indexOf('Chrome') !== -1;
  }
}
