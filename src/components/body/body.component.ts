import { Component } from '@angular/core';
import { InformacoesPessoaisComponent } from "./components/informacoes-pessoais/informacoes-pessoais.component";

@Component({
  selector: 'app-body',
  imports: [InformacoesPessoaisComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
