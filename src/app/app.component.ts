import { Component } from '@angular/core';
import sampleRaw from './sample.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  sample = sampleRaw;
}

if (sampleRaw === undefined) {
  throw Error('sample raw is undefined');
} else {
  console.log(sampleRaw);
}
