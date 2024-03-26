import { Input } from "./Input";

export const Form = () => {
    return(
        <form action="#" method="post">
            <fieldset className="flex-column">
                <Input labelText="Nome" inputId="name" inputName="name" />
                <Input labelText="Email" inputId="email" inputName="email" />
                <div className="textarea-container flex-column">
                    <label>Mensagem</label>
                    <textarea></textarea>
                </div>
                <input className="submit-btn" type="submit" value="Enviar"  />
            </fieldset>
        </form>
    );
}