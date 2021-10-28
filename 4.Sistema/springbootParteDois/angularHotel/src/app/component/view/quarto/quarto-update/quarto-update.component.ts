import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quarto } from 'src/app/model/quarto.model';
import { QuartoService } from 'src/app/service/quarto.service';

@Component({
  selector: 'app-quarto-update',
  templateUrl: './../quarto-form/quarto-form.component.html',
  styleUrls: ['./../quarto-form/quarto-form.component.css']
})
export class QuartoUpdateComponent implements OnInit {

  titulo: string = "Alterar dados do Quarto";

  quarto: Quarto = {
    hotel: '', 
    categoriaQuarto: '',
    qtdLeito: 0,
    nrQuarto: 0, 
    prDiaria: 0
  }
  constructor(
    private route: ActivatedRoute,
    private service: QuartoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null){
      this.service.findById(id).subscribe(quarto => {
        this.quarto = quarto;
      })
    }
  }

  salvar(): void {
    this.service.update(this.quarto).subscribe(() =>{
      this.service.showMessage("Quarto atualizado sucesso!")
      this.router.navigate(['/quartos']);
    });
  }
}