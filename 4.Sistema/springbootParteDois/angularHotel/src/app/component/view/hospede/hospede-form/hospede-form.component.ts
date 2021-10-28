import { HospedeService } from './../../../../service/hospede.service';
import { Hospede } from './../../../../model/hospede.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospede-form',
  templateUrl: './hospede-form.component.html',
  styleUrls: ['./hospede-form.component.css']
})
export class HospedeFormComponent implements OnInit {

  titulo: string = "Cadastrar novo Hospede";

  hospede: Hospede = {
    cpf: "",
    dtNascimento: "",
    nmHospede: "" 
  }

  constructor(
    private service: HospedeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvar(): void {
    this.service.create(this.hospede).subscribe(() =>{
      this.service.showMessage("Hospede cadastrado com sucesso!")
      this.router.navigate(['/hospedes']);
    });
  }

}