import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  textoSerFalado: string = 'Olá Mundo';

  constructor(private tts: TextToSpeech) {

  }

  falar() {
    this.tts.speak({
      text: this.textoSerFalado,
      locale: 'pt-BR',
      rate: 0.75})
      .then(() => alert('Falou com sucesso!'))
      .catch((reason: any) => alert(reason))
  }

}
