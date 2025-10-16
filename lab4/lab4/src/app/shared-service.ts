import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  share: string = '';

  sharing() {
    // The service itself assigns the value
    this.share = 'share123';
  }
}
