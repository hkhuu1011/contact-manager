import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../../services/jarwis.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  public form = {
  	email: null
  };

  constructor(
  	private Jarwis: JarwisService,
  	private notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  // Jarwis service send password reset link
  onSubmit() {
  	this.Jarwis.sendPasswordResetLink(this.form).subscribe(
  		data => this.handleResponse(data),
  		error => this.notify.error(error.error.error)
  	);

  }

  // Removes email in input field after submitted
  handleResponse(res) {
  	console.log(res);
  	this.form.email = null;
  }

}
