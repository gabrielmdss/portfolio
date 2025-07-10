import { Component } from '@angular/core';
import { InformacoesPessoaisComponent } from "./components/informacoes-pessoais/informacoes-pessoais.component";
import { ProjetosComponent } from "./components/projetos/projetos.component";
import { HabilidadesComponent } from "./components/habilidades/habilidades.component";

@Component({
  selector: 'app-body',
  imports: [InformacoesPessoaisComponent, ProjetosComponent, HabilidadesComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
