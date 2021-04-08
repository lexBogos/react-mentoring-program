import React from 'react';
import { moviesLoaded, moviesRequested, onMovieEdit, onMovieRemove, onMovieAdd, onModalDisable } from '../../actions';
import { connect } from 'react-redux';
import { withMovieStoreService } from '../hoc'
import {EditMovieModalFields, DeleteMovieModalFields, AddMovieModalFields} from './payload'
import './index.scss';

const Modal = ({modalActionType,
                modalActive,
                movies,
                chosenMovieId,
                onMovieEdit,
                onMovieAdd,
                onMovieRemove, 
                onModalDisable, 
                chosenMovieIndex,
                movieStoreService}) => {
                    return <div className={modalActive ? 'modal modalActive': 'modal'}>
                        <div className='modal__content' onClick={e => e.stopPropagation()}>
                            <a href='#' className='closeModal' onClick={(e) => {e.preventDefault(); onModalDisable()}}>✖</a>
                            {(()=>{
                                switch (modalActionType) {
                                    case 'EDIT_MOVIE':
                                        return <EditMovieModalFields  
                                                onMovieEdit={onMovieEdit}
                                                onModalDisable={onModalDisable}
                                                data={movies[chosenMovieIndex]}
                                                movieStoreService={movieStoreService}
                                        />
                                    case 'REMOVE_MOVIE':
                                            return<DeleteMovieModalFields
                                             onMovieRemove={onMovieRemove}
                                             chosenMovieId={chosenMovieId}
                                             movieStoreService={movieStoreService}
                                            />
                                    case 'MOVIE_ADD':
                                            return<AddMovieModalFields
                                            onMovieAdd={onMovieAdd}
                                            movieStoreService={movieStoreService}
                                            />           
                                    default:
                                        break;
                                }
                            })()}
                        </div>
                    </div>}

const mapStateToProps = ({ movies, modalActive, chosenMovieId, chosenMovieIndex, modalActionType }) => {
    return {
      movies,
      modalActive,
      chosenMovieId,
      modalActionType,
      chosenMovieIndex,
    }
  };
  
const mapDispatchToProps = {moviesLoaded, moviesRequested, onMovieEdit, onMovieAdd, onMovieRemove, onModalDisable};

export default withMovieStoreService()(connect(mapStateToProps, mapDispatchToProps)(Modal));