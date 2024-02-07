import React from 'react';
import style from './index.module.css'
function FilledButton ({text, color}) {
    return (
        <div>
            <button className={style.btn} style={{background: color}}>
                <span>{text}</span>
            </button>
        </div>
    );
}

export default FilledButton;