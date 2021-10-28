import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospedagem } from 'src/app/model/hospedagem.model';
import { HospedagemService } from 'src/app/service/hospedagem.service';

@Component({
  selector: 'app-hospedagem-update',
  templateUrl: './../hospedagem-form/hospedagem-form.component.html',
  styleUrls: ['./../hospedagem-form/hospedagem-form.component.css']
})
export class HospedagemUpdateComponent implements OnInit {
  titulo: string = "Alterar dados da Hospedagem";

  hospedagem: Hospedagem = {
    idQuarto: 0, 
    idHospede: 0,
    dtCheckin: '',
    dtCheckout: '' 
  }
  constructor(
    private route: ActivatedRoute,
    private service: HospedagemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null){
      this.service.findById(id).subscribe(hospedagem => {
        this.hospedagem = hospedagem;
      })
    }
  }

  salvar(): void {
    this.service.update(this.hospedagem).subscribe(() =>{
      this.service.showMessage("Hospedagem atualizada sucesso!")
      this.router.navigate(['/hospedagens']);
    });
  }
}