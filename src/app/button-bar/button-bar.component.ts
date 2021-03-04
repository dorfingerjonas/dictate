import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SpeechRecognitionService} from '../speech-recognition.service';

@Component({
  selector: 'app-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.scss']
})
export class ButtonBarComponent implements OnInit {

  @Input() content = '';
  @Input() speechRecoService: SpeechRecognitionService;
  @Output() isContinued = new EventEmitter<boolean>();
  @Output() resetHandler = new EventEmitter();
  recoOnceStarted = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  start(): void {
    if (!this.speechRecoService.recoStarted) {
      this.recoOnceStarted = true;
      this.speechRecoService.start();
    }
  }

  stop(): void {
    this.speechRecoService.stop();
  }

  reset(): void {
    this.recoOnceStarted = false;
    this.speechRecoService.stop();
    this.resetHandler.emit();
    this.isContinued.emit(false);
  }

  continue(): void {
    this.isContinued.emit(true);
    this.speechRecoService.start();
  }

  encode(text): string {
    const placeholders = [
      {regEx: '\n', content: '%0D%0A'}
    ];

    for (const placeholder of placeholders) {
      while (text.includes(placeholder.regEx)) {
        text = text.replace(placeholder.regEx, placeholder.content);
      }
    }

    return text;
  }
}
