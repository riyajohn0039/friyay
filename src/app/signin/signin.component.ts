import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm!:FormGroup;

  constructor(private formbuilder: FormBuilder,private http:HttpClient,private r:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      email:[''],Password:['']
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/user").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email==this.loginForm.value.email && a.Password==this.loginForm.value.Password
      })
      if(user){
        alert("user exists")
        this.loginForm.reset()
      }
    })
  }

}
