import React from 'react';
import { useForm } from 'react-hook-form';
import '../../styles/components/NewEvent.css'
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const { register, handleSubmit } = useForm()
    const addPost = data => console.log(data)
    return (
        <section>

            <main>
                <div className="card-post">
                    <h1 className="titulos">Solicitar novo evento</h1>
                    <span>Aqui voce pode solicitar a adiçao de seu evento em nosso site</span>
                    <div className="card-body-post">
                        <form onSubmit={handleSubmit(addPost)}>
                            <div className="fields">
                                <label className="labelsEvents"> Nome do Evento </label>
                                <input type="text" required id="NewEventInput" name="EventName" {...register("EventName")} />
                            </div>
                            <div className="fields">
                                <label className="labelsEvents">Data Do evento</label>
                                <input type="date" required id="NewEventInput" name="DateEvent" {...register("DateEvent")} />
                            </div>
                            <div className="fields">
                                <label className="labelsEvents">CEP do Evento</label>
                                <input type="number" required id="NewEventInput" name="CepEvent" {...register("CepEvent")} />
                            </div>
                            <div className="fields">
                                <label className="labelsEvents">Descricao do evento</label>
                                <textarea id="NewEventInput" required name="Description" {...register("Description")} />
                            </div>
                            <div className="fields">
                                <label className="labelsEvents">Imagem do Evento</label>
                                <input type="file" required accept="image/png, image/jpeg" single id="NewEventInput" name="image" {...register("Image")} />
                            </div>
                            <div className="fields">
                                <label className="labelsEvents">Nome do organizador</label>
                                <input type="text" required id="NewEventInput" name="EventManager" {...register("EventManager")} />
                            </div>
                            <div className="fields">
                                <label className="labelsEvents">Email para contato</label>
                                <input type="mail" required="@" id="NewEventInput" name="ManagerMail" {...register("IManagerMail")} />
                            </div>
                            <div className="fields">
                                <label className="labelsEvents">Telefone para contato</label>
                                <input type="number" id="NewEventInput" required name="ManagerTel" {...register("ManagerTel")} />
                            </div>
                            <div ClassName="btn-post">
                       <button id="botaoNewEvents" type="submit">ENVIAR EMAIL</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </section>
    )
}