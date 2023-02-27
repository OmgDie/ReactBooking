import React, { useEffect, useState } from 'react';
import frameStyles from './FrameReg.css'

const FrameReg = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Логин не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)

//Если пользователь покинул поле ввода и оставил пустым, вызываем ошибку
    const blurHandler = (e) => {
        switch(e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }
//При некорректных данных кнопка недоступна
    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError]) //Если изменяется какой-либо элемент массива, то вызывается функция, переданная 1-ым параметром

//Валидация логина
    const emailHandler = (e) => {
        setEmail(e.target.value) //Изменяем состояние на значение, которое находится в текущем таргете
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный логин')
            if (!e.target.value) {
                setEmailError('Логин не может быть пустым')
            }
        } else {
            setEmailError('')
        }
    }
    
//Валидация пароля
    const passwordHandler = (e) => {
        setPassword(e.target.value) //изменяем состояние по аналогии с логином
        const rp = /^[a-zA-Z0-9!@#$%^&*]{8,20}$/
        if (!rp.test(String(e.target.value))) {
            setPasswordError('Пароль должен содержать от 8 до 20 символов и не содержать кириллицу')
            if (!e.target.value) {
                setPasswordError('Пароль не может быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }

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
                        <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type='text' className='inputFrame'/>

                        {(emailDirty && emailError) && <div className='error'>
                        {emailError}
                        </div>}
                    </div>
                    <div className='pswFrame'>
                        <div className='description'>
                            Пароль
                        </div>
                        <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type='password' className='inputFrame'/>

                        {(passwordError && passwordDirty) && <div className='error'>
                        {passwordError}
                        </div>}
                    </div>  
                </div>
                <button disabled={!formValid} type='submit' className='loginButton'>
                    <div className='enter'>
                            Войти
                    </div>
                </button>
            </div>
    );
};

export default FrameReg;