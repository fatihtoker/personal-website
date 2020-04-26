import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-quarantine-clock',
  templateUrl: './quarantine-clock.component.html',
  styleUrls: ['./quarantine-clock.component.scss']
})
export class QuarantineClockComponent implements OnInit {

  constructor(private title: Title) { 
    title.setTitle('Quarantine Clock - Privacy Policy')
  }

  ngOnInit() {
  }

}
