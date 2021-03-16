import React from 'react';
import './index.scss';

const Modal = ({active, setActive, fields, movieListHook, movieList}) => {
                    return <div className={active ? 'modal modalActive': 'modal'}>
                        <div className='modal__content' onClick={e => e.stopPropagation()}>
                            <a href='#' className='closeModal' onClick={(e) => {e.preventDefault(); setActive(false)}}>✖</a>
                            {fields.func(movieListHook, movieList, setActive, fields.index)}
                        </div>
                    </div>}

export default Modal;