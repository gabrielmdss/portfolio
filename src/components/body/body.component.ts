import { Component } from '@angular/core';
import { InformacoesPessoaisComponent } from "./components/informacoes-pessoais/informacoes-pessoais.component";
import { ProjetosComponent } from "./components/projetos/projetos.component";

@Component({
  selector: 'app-body',
  imports: [InformacoesPessoaisComponent, ProjetosComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
