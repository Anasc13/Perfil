import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  form: FormGroup;

constructor(private formBuilder: FormBuilder) {
      this.form = formBuilder.group({
        password:['',[]],
        mail:['',[]],
      })
     }
  
  ngOnInit(){}
  
}
