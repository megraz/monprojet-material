import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClear() {
    //let $key = this.service.form.get('$key').value;
    //à utili this.service.form.reset();
    //à utili this.service.initializeFormGroup();
    //this.service.form.patchValue({ $key });
  }

}
