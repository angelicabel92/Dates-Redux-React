import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddDatesAction } from '../actions/datesAction';
import uuid from 'uuid/v4';
import { validationAction } from '../actions/validationAction';

const AddDatesComponent = () => {
    const InitialState = {
        petName: '',
        petOwner: '',
        date: '',
        hour: '',
        symptom: ''
    }

    const [newDate, setNewDate] = useState(InitialState);

    const handleChange = e => {
        setNewDate ({
            ...newDate,
            [e.target.name] : e.target.value
        })
    };

    // Dispatch excute actions
    const dispatch = useDispatch();
    const addNewDate = date => dispatch(AddDatesAction(date));
    const validationForm = state => dispatch(validationAction(state));

    // useSelector es similar a mapStateToProps en Hooks
    const error = useSelector((state) => state.error);

    const onSubmitNewDate = e => {
        e.preventDefault();

        // Form Validation
        if (newDate.petName.trim() === '' || newDate.petOwner.trim() === '' || newDate.date.trim() === '' || newDate.hour.trim() === '' || newDate.symptom.trim() === '') {
            validationForm(true);
            return;
        }

        // Create New Date
        addNewDate ({
            id: uuid(),
            newDate
        });
        // Update Form
        setNewDate(InitialState);
    }

    return ( 
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
                <form onSubmit={onSubmitNewDate}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Nombre Mascota"
                                name="petName"
                                value={newDate.petName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control"  
                                placeholder="Nombre Dueño de la Mascota"
                                name="petOwner"
                                value={newDate.petOwner}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input 
                                type="date" 
                                className="form-control"
                                name="date"
                                value={newDate.date}
                                onChange={handleChange}
                            />
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="col-sm-8 col-lg-4">
                            <input 
                                type="time" 
                                className="form-control"
                                name="hour"
                                value={newDate.hour}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea 
                                className="form-control"
                                name="symptom"
                                value={newDate.symptom}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
                        </div>
                    </div>
                </form>
                {error.error ? <div className="alert alert-danger text-center p2">
                    Todos los campos son obligatorios
                </div> : null}     
            </div>
        </div>
     );
}
 
export default AddDatesComponent;
