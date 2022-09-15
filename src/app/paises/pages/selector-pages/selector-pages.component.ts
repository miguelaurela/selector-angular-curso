import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from "@angular/forms";
@Component({
  selector: 'app-selector-pages',
  templateUrl: './selector-pages.component.html',
})
export class SelectorPagesComponent implements OnInit {

  miFormulario!:FormGroup
  regiones:string[]=['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario=this.formBuilder.group({
      region:['',[Validators.required]]
    })
  }

}
