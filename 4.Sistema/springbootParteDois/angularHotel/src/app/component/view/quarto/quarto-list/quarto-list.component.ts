import { ConfirmDeleteComponent } from './../../../template/confirm-delete/confirm-delete.component';
import { QuartoService } from './../../../../service/quarto.service';
import { Component, OnInit } from '@angular/core';
import { Quarto } from 'src/app/model/quarto.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-quarto-list',
  templateUrl: './quarto-list.component.html',
  styleUrls: ['./quarto-list.component.css']
})
export class QuartoListComponent implements OnInit {

  quartos: Quarto[] = [];
  displayedColumns: string[] = ['id','categoriaQuarto','qtdLeito','nrQuarto','prDiaria', 'acao'];
  constructor(
    private service : QuartoService,
    private dialog: MatDialog
  ) { }

  atualizarDados(): void {
    this.service.findAll().subscribe(quartos => {
      this.quartos = quartos;
    });
  }

  ngOnInit(): void {
    this.atualizarDados();
  }

  excluir(quarto: Quarto): void{

    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      data: {
        message: `Deseja realmente excluir o hotel ${quarto.idQuarto}?`,
        buttonText: {
          ok: 'Excluir',
          cancel: 'Desistir'
        }
      }
    })

    dialogRef.afterClosed().subscribe((confirm: boolean) =>{
      if(confirm){
        this.service.delete(quarto).subscribe(() => {
          this.service.showMessage("Hotel excluído com sucesso!");
          this.atualizarDados();
        });
      }
    })
    
  }

}