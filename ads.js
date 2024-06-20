class Tabela extends React.Component {
  constructor(props) {
    super(props)
    this.state = {disciplina: 'Sistemas Operacionais', carga: 66.7, periodo: 'Noturno' }
    this.state2 = {disciplina: 'Inglês', carga: 33.3, periodo: 'Noturno' }
    this.state3 = {disciplina: 'Laboratório de Estruturas de Dados e Programação', carga: 33.3, periodo: 'Noturno' }
    this.state4 = {disciplina: 'Introdução a Banco de Dados', carga: 66.7, periodo: 'Noturno'}
  }

  render() {
    return <div>
      <h2 id='titulo'>Componentes curriculares</h2>
      <table id='dados'>
        <tr>
          <th>Disciplina</th>
          <th>Carga</th>
          <th>Periodo</th>
        </tr>
          
        <tr>
          <td>{this.state.disciplina}</td>
          <td>{this.state.carga}</td>
          <td>{this.state.periodo}</td>
        </tr>
        <tr>
          <td>{this.state2.disciplina}</td>
          <td>{this.state2.carga}</td>
          <td>{this.state2.periodo}</td>
        </tr>
        <tr>
          <td>{this.state3.disciplina}</td>
          <td>{this.state3.carga}</td>
          <td>{this.state3.periodo}</td>
        </tr>
        <tr>
          <td>{this.state4.disciplina}</td>
          <td>{this.state4.carga}</td>
          <td>{this.state4.periodo}</td>
        </tr>          
      </table>
    </div>;
  }
}

ReactDOM.render(<Tabela />, document.getElementById('tabela'));