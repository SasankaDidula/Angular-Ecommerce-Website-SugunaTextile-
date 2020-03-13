import { Component } from '@angular/core';
import { auth } from 'firebase';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  id = new FormControl('');
  constructor() { }


  insertdata(){
    this.id.setValue('5');

  }

}
