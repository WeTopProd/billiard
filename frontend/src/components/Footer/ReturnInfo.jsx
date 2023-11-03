import { useState } from 'react'

import o from './Konfid.scss'


import axios from 'axios'


export default function ReturnInfo() {

    const [uslugi, setuslugi] = useState('')

    const [Info, setInfo] = useState('')

    const [Cart, setCart] = useState('')

    const [File, setFile] = useState('')

    const [textButton, setTextButton] = useState(false)

    const fotoUpload = (e) => {
        setFile(e.target.files[0])
    }


    // const HandleVozvrat = (e) => {

    //     e.preventDefault()


    //     axios.post('https://tyteda.ru/api/send-email/', {

    //         date: uslugi,
    //         description: Info,
    //         num_card: Cart,
    //         file: File

    //     },

    //         {
    //             headers: {
    //                 'Content-Type': 'application/json , multipart/form-data',
    //                 authorization: `Token ${tokenTwo}`
    //             }
    //         }

    //     )

    //         .then(res => {

    //             setuslugi('')

    //             setInfo('')

    //             setCart('')

    //             setFile('')

    //             setTextButton(true)

    //         })

    // };

    const tokenTwo = localStorage.getItem('token')



    return (

        <>

            <section className='section__oplata'>
                <div className='container'>

                    <p className='oplata__title'>
                        Отказ от товаров и возврат
                    </p>

                    <div className='return'>

                        <form className='return__item' >

                            <p className='return__text'>Выберите дату заказа</p>

                            <input type="date"
                                value={uslugi} onChange={(event) => setuslugi(event.target.value)}
                                className='return__data'

                            />


                            <textarea className='return__textarea' placeholder='Опишите с чем связан отказ от заказа '
                                value={Info} onChange={(event) => setInfo(event.target.value)}
                            >

                            </textarea>

                            <input type="number" className='return__cart' placeholder='Напишите номер карты куда вернуть средства'

                                value={Cart} onChange={(event) => setCart(event.target.value)} />

                            <div className='return__fileApp'>
                                <input type="file" className='ruturn__file' onChange={fotoUpload} />
                            </div>


                            <button className='return__btn' >

                                {textButton ?

                                    'Отправлено'

                                    :

                                    "Отправить"

                                }

                            </button>

                        </form>

                        <ul className='return__info'>
                            <p>Процедура возврата товара регламентируется статьей 26.1 федерального закона «О защите прав потребителей».
                            </p><br></br>
                            <li className='return__info__text'><p>
                                • Потребитель вправе отказаться от товара в любое время до его передачи, а после передачи товара - в течение семи дней;</p></li><br></br>

                            <li className='return__info__text'>
                                • При отказе потребителя от товара продавец должен возвратить ему денежную сумму, уплаченную потребителем по договору, за исключением расходов продавца на доставку от потребителя возвращенного товара, не позднее чем через десять дней со дня предъявления потребителем соответствующего требования;
                            </li><br></br>

                            <li className='return__info__text'>
                                • Потребитель не вправе отказаться от товара надлежащего качества, имеющего индивидуально-определенные свойства, если указанный товар может быть использован исключительно приобретающим его человеком.
                            </li>

                        </ul>


                    </div>

                </div>
            </section>

        </>


    )

}