import React from 'react';
import frameStyles from './FrameReg.css'

const FrameReg = () => {
    return (
            <div className='frameReg'>
                <strong className='brand'>
                    Simple Hotel Check
                </strong>
                
                <div className='inputbox'>
                    <div className='logFrame'>
                        <div className='description'>
                            Логин
                        </div>
                        <input className='inputFrame'>

                        </input>
                        <div className='error'>
                        Описание ошибки будет тут
                        </div>
                    </div>
                    <div className='pswFrame'>
                        <div className='description'>
                            Пароль
                        </div>
                        <input className='inputFrame'>

                        </input>
                        <div className='error'>
                        Описание ошибки будет тут
                        </div>
                    </div>  
                </div>
                <button className='loginButton'>
                    <div className='enter'>
                            Войти
                    </div>
                </button>
            </div>
    );
};

export default FrameReg;