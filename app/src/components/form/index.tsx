import './styles.scss'

export function FooterForm() {
  return (
    <form>
      <div className="name-container flex-column">
        <label htmlFor="">NOME</label>
        <input type="text" placeholder="Digite seu Nome" />
      </div>
      <div className="phone-container flex-column">
        <label htmlFor="">TELEFONE</label>
        <input type="text" placeholder="(21) 00000-0000" />
      </div>
      <div className="email-container flex-column">
        <label htmlFor="">E-MAIL</label>
        <input type="email" placeholder="email@email.com.br" />
      </div>
      <div className="subject-container flex-column">
        <label htmlFor="">ASSUNTO</label>
        <select id="assunto" name="assunto">
          <option value="unmarked">Selecione um Assunto</option>
          <option value="option1">Opção 1</option>
          <option value="option2">Opção 2</option>
          <option value="option3">Opção 3</option>
          <option value="option4">Opção 4</option>
        </select>
      </div>
      <div className="message-container flex-column">
        <label htmlFor="">MENSAGEM</label>
        <textarea name="mensagem" id="mensagem" placeholder="Escreva aqui sua mensagem"></textarea>
      </div>
    </form>
  )
}