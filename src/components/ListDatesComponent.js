import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteDateAction } from '../actions/datesAction';

const ListDatesComponent = () => {
    const dates = useSelector((state) => state.dates);
    //dispatch pata eliminar
    const dispatch = useDispatch();

    return ( 
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">{dates.dates.length === 0 ? 'No hay citas' : 'Administrar las citas aquí'}</h2>

                <div className="lista-citas">
                   {dates.dates.map(date => (
                    <div className="media mt-3" key={date.id}>
                        <div className="media-body">
                            <h3 className="mt-0">{date.newDate.petName}</h3>
                            <p className="card-text"><span>Nombre Dueño: </span>{date.newDate.petOwner}</p>
                            <p className="card-text"><span>Fecha: </span>{date.newDate.date}</p>
                            <p className="card-text"><span>Hora: </span>{date.newDate.hour}</p>
                            <p className="card-text"><span>Sintomas: </span> <br /> {date.newDate.symptom}</p>
                            <button 
                                className="btn btn-danger"
                                onClick= {() => dispatch(deleteDateAction(date.id))}
                                >Borrar &times;
                            </button>
                        </div>
                    </div>  
                   ))} 
                </div>
            </div>
        </div>
     );
}
 
export default ListDatesComponent;