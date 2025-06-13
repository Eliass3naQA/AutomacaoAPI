class Paciente {
  getPacienteXml({ codigolis, datanasc, nome, cpf, nomeSocial, sexo }) {
    return `<paciente codigolis="${codigolis}" datanasc="${datanasc}" nome="${nome}" cpf="${cpf}" nomeSocial="${nomeSocial}" sexo="${sexo}"/>`;
  }

  getPacientesXml(pacientes) {
    return `<pacientes>${pacientes.map(this.getPacienteXml).join('')}</pacientes>`;
  }
}

export default new Paciente();
