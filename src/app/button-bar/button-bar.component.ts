import {Component, Input, OnInit} from '@angular/core';
import {SpeechRecognitionService} from '../speech-recognition.service';

@Component({
  selector: 'app-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.scss']
})
export class ButtonBarComponent implements OnInit {

  @Input() content = '';
  @Input() speechRecoService: SpeechRecognitionService;

  constructor() {
  }

  ngOnInit(): void {
  }

  startReco(): void {
    if (!this.speechRecoService.recoStarted) {
      this.speechRecoService.start();
    }
  }

}
