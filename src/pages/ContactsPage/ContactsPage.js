import './ContactsPage.css'
import Header from '../../components/home-page/Header/Header';
import Footer from '../../components/home-page/Footer/Footer';
import { useState, useEffect } from 'react';






function ContactsPage() {
    // initialState
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('Мужчина')
    const [message, setMessage] = useState('')
    const [file, setFile] = useState()
    const [checkbox, setСheckbox] = useState(true)

    const [nameDirty, setNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)


    const [nameError, setNameError] = useState('Поле обязательно для заполнения')
    const [emailError, setEmailError] = useState('Поле обязательно для заполнения')


    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (nameError || emailError || !checkbox) {
            setFormValid(false)

        } else {
            setFormValid(true)
        }

    }, [nameError, emailError, checkbox])

    const nameHandler = (e) => {
        setName(e.target.value)
        if (e.target.value) {
            setNameError('')
        } else {
            setNameError('Поле обязательно для заполнения')
        }

    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email введён некорректно')
        } else {
            setEmailError('')
        }
    }
    const messageHandler = (e) => {
        setMessage(e.target.value)
    }
    const fileHandler = (e) => {
        setFile(e.target.value)

    }




    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const obj = {
            name: name,
            email: email,
            checkbox: checkbox,
            gender: gender,
            file: file,
            message: message,
        }
        const nameFile = file

        console.log(obj, 'Отправлена форма.');

    }


    /*------------------------------------*/

    // const [name, setName] = useState('')

    return (
        <div className="wrapper">
            <Header />
            <main className="main">

                <div className="main__container _container">
                    <div className="from">
                        <form onSubmit={handleSubmit} action='#' id='form' className="from__body">
                            <h1 className='form__title'>отправка данных на почту</h1>
                            <div className="form__item">

                                <label htmlFor="formName" className="form__label">Имя* {(nameDirty && nameError) && <div className='_error'>{nameError}</div>}</label>
                                <input onChange={e => nameHandler(e)}
                                    value={name}
                                    onBlur={e => blurHandler(e)} id='formName' type="text" name='name' className="form__input _req" />
                            </div>
                            <div className="form__item">

                                <label htmlFor="formEmail" className="form__label ">Email* {(emailDirty && emailError) && <div className='_error'>{emailError}</div>}</label>
                                <input onChange={e => emailHandler(e)}
                                    value={email}
                                    onBlur={e => blurHandler(e)} id='formEmail' type="text" name='email' className="form__input _req _email" />
                            </div>
                            <div className="form__item">
                                <div className="form__label">Пол</div>
                                <div className="ontions">
                                    <div className="ontions__item">
                                        <input onChange={() => setGender('Мужчина')} checked={gender === 'Мужчина'} id='formMan' type="radio" value='man' name='gender' className="ontions__input" />
                                        <label htmlFor="formMan" className="ontions__label">Мужчина</label>
                                    </div>
                                    <div className="ontions__item">
                                        <input onChange={() => setGender('Женщина')} checked={gender === 'Женщина'} id='formWoman' type="radio" value='woman' name='gender' className="ontions__input" />
                                        <label htmlFor="formWoman" className="ontions__label">Женщина</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form__item">
                                <label htmlFor="formMessage" className="form__label">Сообщение:</label>
                                <textarea onChange={(e) => messageHandler(e)} value={message} name="message" id="formMessage" className="form__input"></textarea>
                            </div>
                            {/* <div className="form__item">
                                <div className="form__label">Возраст:</div>
                                <select name='age' className='select'>
                                    <option value='от 18 до 25' selected='selected'>Молодой</option>
                                    <option value='от 25 до 45' selected='selected'>Старый</option>
                                    <option value='от 45' selected='selected'>Супер стар</option>

                                </select>
                            </div> */}
                            <div className="form__item">
                                <div className="from__label">Прикрепить фото</div>
                                <div className="file">
                                    {file ? <div className='file__item-name'>{file}</div> : ''}
                                    <div className="file__item">

                                        <input onChange={(e) => fileHandler(e)} id='formImaga' accept='.jpg, .png, .gif' type="file" name='image' className='file__input' />
                                        <div className="file__button">Выбрать</div>
                                    </div>
                                    <div className="file__preview"></div>
                                </div>

                            </div>
                            <div className="form__item">
                                <div className="checkbox">
                                    <input checked={checkbox} onChange={() => setСheckbox(!checkbox)} id='formAgreement' type="checkbox" name='agreement' className='checkbox__input' />
                                    <label htmlFor="formAgreement" className="checkbox__label ">Я даю согласие на обработку персональных данных*</label>
                                </div>
                            </div>
                            <button disabled={!formValid} type='submit' className='form__button'>Отправить</button>
                            {/* onChange */}

                        </form>
                    </div>
                </div>
            </main >
            <Footer />
        </div >

    )
}

export default ContactsPage;