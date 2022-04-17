import React, { useState } from 'react';
import { Formik } from 'formik';
import { RegisterSchema } from '../constants/yupSchema';
import clsx from 'clsx';
import { PatikaLogo, LineFirst, LineSecond, Loading, DarkMode, LightMode } from '../constants/images';
import { useRegister } from '../contexts/IsRegister';
import { useMode } from '../contexts/Mode';



function Register() {
    const [loading, setLoading] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [username, setUsername] = useState('beyza');

    const { registerUsername, setName } = useRegister();

    const { mode, toggleMode } = useMode();

    const setServer = (auth) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setIsRegistered(true);
            setName(auth.username);
            setUsername(registerUsername);
        }, 3000);

        console.log(auth);
    }

    const initialValues = {
        name: '',
        lastName: '',
        mail: '',
        username: '',
        password: '',
        confirmPassword: '',
        termConditions: false
    }

    return (
        <>
            <div className="divide" id={mode}>
                <div className="firstContainer">
                    <div className="logoContainer">
                        <PatikaLogo />
                    </div>
                    <h1>YAZILIM PATİKALARI</h1>
                    <div className="textContainer">
                        <p className="text">Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir eğitim modelidir. Ekibini büyütmek isteyen şirketler bir bootcamp'lere sponsor olurlar. Teknik beceriler kazanmaya başlamış ancak işe girmeye hazır olmayan kişiler bootcamp'lere başvururlar. Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul alırlar. Bootcamp'lerde başarılı olan öğrenciler sponsor şirkette ya da sektörde başka şirketlere işe yerleşirler.</p>
                    </div>
                    <div className="lines">

                        {mode === 'light' ? <> <LineFirst />
                            <LineSecond />  </> : <>
                            <LineFirst color='#FFBF5E' />
                            <LineSecond color='#FFBF5E' />  </>}
                    </div>
                </div>

                <div className="formContainer">

                    <div className="mode" onClick={() => toggleMode()}>

                        {mode === 'light' ? <DarkMode /> : <LightMode />}

                    </div>

                    <div className="form">

                        <h1 className='title'>
                            <strong >Kayıt</strong>
                        </h1>

                        {
                            isRegistered ? <div>Merhaba, {username} Başarıyla Kayıt Gerçekleştirildi.</div> : <Formik initialValues={initialValues}
                                onSubmit={(auth) => {
                                    setServer(auth);

                                }}

                                validationSchema={RegisterSchema}
                            >

                                {
                                    ({ values, handleChange, handleSubmit, errors }) =>
                                        <>
                                            <form>
                                                <div className="containername">
                                                <div className="inline">
                                                    <div className={clsx({ 'formError': !!errors.name })}>
                                                        <label className='required title'>İSİM</label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            placeholder='İsmini gir'
                                                            value={values.name}
                                                            onChange={handleChange}

                                                        />
                                                        <span className="error">{errors.name}</span>
                                                        </div> </div>
                                                        <div className="inline">
                                                        <div className={clsx({ 'formError': !!errors.lastName })}>
                                                            <label className='required title'>SOYİSİM</label>
                                                            <input
                                                                type="text"
                                                                name="lastName"
                                                                placeholder='Soyismini gir'
                                                                value={values.lastName}
                                                                onChange={handleChange}

                                                            />
                                                            <span className="error">{errors.lastName}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                    
                                                <div className={clsx({ 'formError': !!errors.mail })}>
                                                    <label className='required title'>E-POSTA</label>
                                                    <input
                                                        type="text"
                                                        name="mail"
                                                        placeholder='Eposta adresini gir'
                                                        value={values.mail}
                                                        onChange={handleChange}

                                                    />
                                                    <span className="error">{errors.mail}</span>
                                                </div>

                                                <div className={clsx({ 'formError': !!errors.username })}>
                                                    <label className='required title'>KULLANICI ADI</label>
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        placeholder='Kullanıcı Adını gir.'
                                                        value={values.username}
                                                        onChange={handleChange}
                                                    />
                                                    <span className="error">{errors.username}</span>
                                                </div>

                                                <div className={clsx({ 'formError': !!errors.password })}>
                                                    <label className='required title'>ŞİFRE</label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        placeholder='Şifreni gir.'
                                                        value={values.password}
                                                        onChange={handleChange}

                                                    />
                                                    <span className="error">{errors.password}</span>
                                                </div>

                                                <div className={clsx({ 'formError': !!errors.confirmPassword })}>
                                                    <label className='required title'>ŞİFRENİ TEKRAR GİR</label>
                                                    <input
                                                        type="password"
                                                        name="confirmPassword"
                                                        placeholder='Şifreni Doğrula'
                                                        value={values.confirmPassword}
                                                        onChange={handleChange}
                                                    />
                                                    <span className="error">{errors.confirmPassword}</span>
                                                </div>

                                                <div className={clsx({ 'formError': !!errors.termConditions })}>
                                                    <input type="checkbox" name="termConditions" className="checkbox" />
                                                    <label htmlFor="termConditions">Sözleşmeyi Kabul Ediyorum </label><br />
                                                    <span className="error">{errors.termConditions}</span>
                                                </div>

                                                <div className='formButton'>
                                                    <button className='loginButton' type="submit" onClick={handleSubmit} disabled={loading}>
                                                        {
                                                            loading ? <span> <Loading /> </span> : '   KAYIT OL'
                                                        }


                                                    </button>
                                                    <span></span>
                                                </div>
                                            </form>
                                        </>
                                }

                            </Formik>
                        }


                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;