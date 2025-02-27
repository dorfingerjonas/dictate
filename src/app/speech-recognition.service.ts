import {EventEmitter, Injectable} from '@angular/core';

declare let webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {

  public recoStarted = false;
  public text = '';
  public interimResult = new EventEmitter();
  private recognition;

  constructor() {
  }

  // init speech reco
  init(): void {
    // initialize recognition
    this.recognition = new webkitSpeechRecognition();
    // enable live results
    this.recognition.interimResults = true;
    // set reco lang
    this.recognition.lang = 'de-DE';

    this.recognition.continuous = true;

    // eventlistener for reco results
    this.recognition.addEventListener('result', e => {
      this.text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

      this.interimResult.emit(this.text);
    });
  }

  // start speech reco
  start(): void {
    if (!this.recoStarted) {
      this.recognition.start();
      this.recoStarted = true;
    }
  }

  // stop speech reco
  stop(): void {
    this.recognition.stop();
    this.recoStarted = false;
  }
}
