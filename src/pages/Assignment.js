import './Assignments.css';
import react from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Assignment({courseName, name, dueDate, weight, priority}){
    
    const [active, setActive] = useState(false);

    const off = () => { setActive(false) };
    const on = () => { setActive(true) }

    const [formActive, setFormActive] = useState(false);

    const toggleForm = () => { setFormActive(!formActive) };

    const initialValues = {
      estimatedCompletionTime: "",
      scoreReceived: ""
    };
    
    return (
        <div className={active ? "assignment touched-assignment" : "assignment"} onMouseOver={on} onMouseLeave={off}>
            <span class="course-name">{courseName}</span>
            <span class="name">{name}</span>
            <span class="dueDate">{dueDate}</span>
            <span class="weight">?/{weight}</span>
            {active && <button onClick={toggleForm}>Update</button>}
            {formActive && <Formik initialValues={initialValues}>
              <Form>
                <label>Score received: </label> 
                <ErrorMessage name="scoreReceived" component="span"/>
                <Field 
                        id="scoreReceived"
                        name="scoreReceived" 
                        type="text"
                        placeholder="(Ex: 100)"
                />

                <label>Estimated Completion Time: </label> 
                <ErrorMessage name="estimatedCompletionTime" component="span"/>
                <Field 
                        id="estimatedCompletionTime"
                        name="estimatedCompletionTime" 
                        type="text"
                        placeholder="(Ex: 2 hours)"
                />
              </Form>
            </Formik>}
        </div>
      );
}

export default Assignment;