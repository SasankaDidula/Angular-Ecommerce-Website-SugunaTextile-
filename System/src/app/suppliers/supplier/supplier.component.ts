import { Component, OnInit } from '@angular/core';
import { SuppliersService } from "../../shared/suppliers.service";

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor(private service: SuppliersService,) { }

  ngOnInit(): void {
  }

}
