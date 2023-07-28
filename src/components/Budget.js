import React, {useContext, useState} from 'react'
import {AppContext} from '../context/AppContext'


const Budget = () => {
    const {budget} = useContext(AppContext);
    const [editedBudget, setEditedBudget] = useState(budget);
    return (
        <div className = 'alert alert-secondary'>
            <span>Budget: £ <input type = 'number' required = 'required' value = {editedBudget}
            onChange={(event) => setEditedBudget(event.target.value)} step = '10'
            max = '20000'/></span>
        </div>
    );
}

export default Budget;
