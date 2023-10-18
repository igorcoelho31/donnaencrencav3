import { Component, OnInit } from '@angular/core';
import { localidade } from '../model/localidade.model';
import { HttpClient } from '@angular/common/http';
import { profissao } from '../model/profissao.model';

@Component({
  selector: 'app-dadosfunc',
  templateUrl: './dadosfunc.page.html',
  styleUrls: ['./dadosfunc.page.scss'],
})
export class DadosfuncPage implements OnInit {

meusLocais: localidade[] = [];
minhasProfissoes: profissao[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void{
    this.http.get<localidade[]>('http://localhost:3000/localidade').subscribe(caixinha => this.meusLocais = caixinha );

    this.http.get<profissao[]>('http://localhost:3000/profissao').subscribe(caixinha => this.minhasProfissoes = caixinha );
  }

  salvarDados(): void {
    const profissaoSelecionada = (document.getElementById('profissao') as HTMLSelectElement).value;
    const localidadeSelecionada = (document.getElementById('localidade') as HTMLSelectElement).value;

    // Agora, você pode enviar os dados para o banco de dados usando o HttpClient
    const idUsuario = '1'; // Substitua pelo id do usuário

    this.http.patch(`http://localhost:3000/localidade/${idUsuario}`, { profissao: profissaoSelecionada, localidade: localidadeSelecionada })
      .subscribe(response => {
        console.log('Dados salvos com sucesso no banco de dados.');
      }, error => {
        console.error('Erro ao salvar dados no banco de dados:', error);
      });
  }

  /* salvarDados(): void {
    const profissaoSelecionada = document.getElementById('profissao') as HTMLSelectElement;
    const localidadeSelecionada = document.getElementById('localidade') as HTMLSelectElement;

    const profissao = profissaoSelecionada.value;
    const localidade = localidadeSelecionada.value;

    // Agora, você pode enviar os dados para o banco de dados usando o HttpClient
    const id = '1';

    this.http.patch(`http://localhost:3000/localidade`, { profissao, localidade })
      .subscribe(response => {
        console.log('Dados salvos com sucesso no banco de dados.');
      }, error => {
        console.error('Erro ao salvar dados no banco de dados:', error);
      });
  }
 */
}
