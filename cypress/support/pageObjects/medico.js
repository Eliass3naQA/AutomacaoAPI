class Medico {
  getMedicoXml({ crm, nome }) {
    return `<medico crm="${crm}" nome="${nome}"/>`;
  }

  getMedicosXml(medicos) {
    return `<medicos>${medicos.map(this.getMedicoXml).join('')}</medicos>`;
  }
}

export default new Medico();
