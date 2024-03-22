import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm, RegisterForm } from './auth';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }
  isAuthenticated: boolean = false;
  isloading: boolean = false;
  isAdmin: boolean = false;
  private URL = `http://localhost:3000/users`;

  login(form: LoginForm) {
    this.http.get<any[]>(this.URL).subscribe(users => {
      const user = users.find(user => user.email === form.email && user.password === form.password);
      if (user) {
        this.isAuthenticated = true;
        // Kiểm tra vai trò của người dùng ngay sau khi đăng nhập thành công
        this.isAdmin = user.role === 0;
        this.router.navigate(['']);
        alert('Đăng Nhập Thành Công!');
      } else {
        alert('Đăng Nhập Thất Bại!');
        this.isAuthenticated = false;
      }
    });
  }

  register(form: RegisterForm) {
    this.http.post(this.URL, form).subscribe(() => {
      this.router.navigate(['login']);
      this.isAuthenticated = true;
      alert('Đăng Ký Thành Công!');
    }, error => {
      console.error('Đăng Ký Thất Bại!', error);
    });
  }

  logout() {
    this.router.navigate(['login']);
    this.isAuthenticated = false;
  }
}
