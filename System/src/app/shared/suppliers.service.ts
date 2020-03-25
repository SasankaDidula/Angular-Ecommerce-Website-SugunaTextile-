import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key:new FormControl(null),
    supName : new FormControl(''),
    compName : new FormControl(''),
    email : new FormControl(''),
    mobile : new FormControl(''),
    address : new FormControl(''),
    oType : new FormControl(0),

  });
}
