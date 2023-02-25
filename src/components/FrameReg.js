import React from 'react';


const FrameReg = () => {
    return (
            <div className='frameReg'>
                <h4 className='brand'>Simple Holet Check</h4>
                
                    <div className='inputbox'>
                        <div className='login'>
                            Логин
                        </div>
                    </div>
                    <div className='inputbox'>
                        <div className='password'>
                            Пароль
                        </div>
                    </div>
                    <button className='buttonEnter'>
                        <div className='enter'>
                            Войти
                        </div>
                    </button>
            </div>
    );
};

export default FrameReg;