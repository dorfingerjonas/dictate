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
    this.content = '';
    this.recoOnceStarted = false;
    this.speechRecoService.stop();
    this.isContinued.emit(false);
  }

  continue(): void {
    this.isContinued.emit(true);
    this.speechRecoService.start();
  }
}
