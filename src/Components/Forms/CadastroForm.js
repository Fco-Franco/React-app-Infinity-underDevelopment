// Importando o hook de estado `useState` da biblioteca React
import { useState } from "react";

// Definindo um componente chamado EventForm que recebe a prop onAddEvent
function EventForm({ onAddEvent }) {
    // Criando três estados usando o hook de estado
    const [eventName, setEventName] = useState(''); // Estado para o nome do evento
    const [eventDate, setEventDate] = useState(''); // Estado para a data do evento
    const [eventImage, setEventImage] = useState(''); // Estado para a imagem do evento

    // Definindo funções para atualizar os estados com base em mudanças nos campos
    const eventNameChange = (e) => {
        setEventName(e.target.value);
    };

    const eventDateChange = (e) => {
        setEventDate(e.target.value);
    };

    const eventImageChange = (e) => {
        setEventImage(e.target.value);
    };

    // Definindo uma função para lidar com o envio do formulário
    const eventSubmit = (e) => {
        e.preventDefault(); // Impede o comportamento padrão de recarregar a página

        // Verificando se todos os campos estão preenchidos
        if (eventName && eventDate && eventImage) {
            // Criando um objeto com os dados do evento
            const newEvent = {
                name: eventName,
                date: eventDate,
                image: eventImage,
            };

            // Chamando a função onAddEvent com o novo evento como argumento
            onAddEvent(newEvent);

            // Resetando os estados para limpar os campos após o envio
            setEventName('');
            setEventDate('');
            setEventImage('');
        }
    };

    // Retornando um formulário com campos para inserção de informações
    return (
        <form onSubmit={eventSubmit}>
            <label>Nome do Evento:</label>&nbsp;&nbsp;
            <input type="text" value={eventName} onChange={eventNameChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <label>Data do Evento:</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="date" value={eventDate} onChange={eventDateChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <label>Link da Imagem:</label>&nbsp;&nbsp;&nbsp;
            <input type="text" value={eventImage} onChange={eventImageChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="submit">Cadastrar Evento</button>

        </form>
    );
}

// Exportando o componente EventForm
export default EventForm;
