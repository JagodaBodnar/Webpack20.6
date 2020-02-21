import React from 'react';
import style from './Todo.css';

export default (props) => (
<div className={style.listContainer}>
    <div className={style.taskContainer}> 
        <button className={style.delete} onClick={props.onDelete}><i className="fas fa-times"></i></button>
        {props.text}
    </div>
</div>

)