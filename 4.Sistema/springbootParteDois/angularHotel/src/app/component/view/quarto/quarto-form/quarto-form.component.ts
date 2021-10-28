import { QuartoService } from './../../../../service/quarto.service';
import { Quarto } from './../../../../model/quarto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quarto-form',
  templateUrl: './quarto-form.component.html',
  styleUrls: ['./quarto-form.component.css']
})
export class QuartoFormComponent implements OnInit {

  titulo: string = "Cadastrar nova Hospedagem";

  quarto: Quarto = {
    hotel: '', 
    categoriaQuarto: '',
    qtdLeito: 0,
    nrQuarto: 0, 
    prDiaria: 0
  }

  constructor(
    private service: QuartoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvar(): void {
    this.service.create(this.quarto).subscribe(() =>{
      this.service.showMessage("Quarto cadastrado com sucesso!")
      this.router.navigate(['/quartos']);
    });
  }

}
