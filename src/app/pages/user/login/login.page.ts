import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm;
  error: string;
  register;
  loading;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public navCtrl: NavController,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.authService.getErrorMessage().subscribe((e) => {
      this.error = e;
    });

    this.authService.getLoading().subscribe((loading) => {
      this.loading = loading;
    });

    this.authService.getRegisterStatus().subscribe((r) => {
      this.register = r;
    });
  }

  // To hide error message when coming back from other pages
  ionViewWillEnter(){
    this.authService.setLoginPageOpen(false); 
  }

  login() {
    // if device is not connected to internet, show notification
    if (!this.utilService.getIsOnlineValue()) {
      // show no connection notification
      this.utilService.showAlertNoConnection();
      // return; // ToDo --- uncomment it after further testing
    }

    // Remove extra spaces before and after username string
    this.loginForm.setValue({username: (this.loginForm.getRawValue().username).trim(), password:this.loginForm.getRawValue().password})
    this.authService.login(this.loginForm.getRawValue());
  }

  navigateRegister() {
    this.navCtrl.navigateForward('user/register');
  }

  navigateForgotPassword() {
    this.navCtrl.navigateForward('user/forgot-password');
  }
}
