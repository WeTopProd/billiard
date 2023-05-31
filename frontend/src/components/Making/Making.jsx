import m from './Making.module.scss'

export default function Making () {
    return (

        
        <>
        
        <div className={m.section__making}>

        <div className='container'>

            <div className={m.making}>

                <p className={m.making__title}>Оформение заказа</p>
                <div className={m.making__hr}></div>

            </div>

            <div className={m.making__info}>
                
                <div className={m.making__info_item}>
                    
                    <p className={m.making__info_item_title}>
                    Способ оплаты
                    </p>

                    <div className={m.making__info_item_click}>

                        <div className={m.making__info_item_click_box}>
                        </div>
                        
                        <p className={m.making__info_item_click_text}>Картой на сайте</p>

                    </div>

                    <div className={m.making__info_item_click}>

                        <div className={m.making__info_item_click_box}>
                        </div>
                        
                        <p className={m.making__info_item_click_text}>Наличными <br /> (Только при самовывозе)</p>

                    </div>                    

                </div>

                <div className={m.making__info_item}>
                    
                    <p className={m.making__info_item_title}>
                    Способ Доставки
                    </p>

                    <div className={m.making__info_item_click}>

                        <div className={m.making__info_item_click_box}>
                        </div>
                        
                        <p className={m.making__info_item_click_text}>Самовывоз из нашего магазина</p>

                    </div>

                    <div className={m.making__info_item_click}>

                        <div className={m.making__info_item_click_box}>
                        </div>
                        
                        <p className={m.making__info_item_click_text}>Самовывоз из нашего магазина</p>

                    </div>

                    <div className={m.making__info_item_click}>

                        <div className={m.making__info_item_click_box}>
                        </div>
                        
                        <p className={m.making__info_item_click_text}>Доставка по Московской области <br />
                        - 1000руб + 10 руб за 1 км </p>

                    </div>                                        

                </div>

            </div>

        </div>

        </div>

        
        </>

    )
}