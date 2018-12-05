import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../../services/jarwis.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

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
  	private notify: SnotifyModule
  ) { }

  ngOnInit() {
  }

  onSubmit() {
  	this.Jarwis.sendPasswordResetLink(this.form).subscribe(
  		data => this.handleResponse(data),
  		error => this.notify.error(error.error.error)
  	);

  }

  // Removes email in input field after submitted
  handleResponse(res) {
  	this.form.email = null;
  }

}
