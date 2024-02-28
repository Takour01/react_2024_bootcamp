import useAgendaViewModel from "../Agenda/AgendaVM";

const InsideVM = () => {
    const { lessons } = useAgendaViewModel();


    return { lessons }
}

export default InsideVM