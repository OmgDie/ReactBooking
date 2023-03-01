import React from 'react';
import '../styles/BookingScreen.css';

const BookingScreen = () => {
    return (
        <div className='desktop2'>
            <nav>
                <div className='brandNav'>
                    Simple Hotel Check
                </div>
                <div className='exitButton'>
                    <div>
                        Выйти
                    </div>
                    <div className='logout-picture' />
                </div>
            </nav>
            <main>
                <section>
                    <div className='section-frame'>
                        <div className='inputbox-searching'>
                            <div className='block'>
                                <div className='frame-header'>
                                    Локация
                                </div>
                                <div className='frame'>
                                    <div className='frame-input'>
                                        Москва
                                    </div>
                                </div>
                            </div>
                            <div className='block'>
                                
                                <div className='frame-header'>
                                        Дата заселения
                                </div>
                                <div className='frame'>
                                    <div className='frame-input'>
                                            07.02.2022
                                    </div>
                                    <div className='calendar-picture'/>
                                </div>
                                
                            </div>
                            <div className='block'>
                                <div className='frame-header'>
                                    Количество дней
                                </div>
                                <div className='frame'>
                                    <div className='frame-input'>
                                        1
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='button'>
                            <div className='enter'>
                                Найти
                            </div>
                        </div>
                    </div>
                    <div className='section-frame'>
                        <div className='favorites-header'>
                            Избранное
                        </div>
                        <div className='frame-filter'>
                            <div className='btn-filter'>
                                    <div className='btn-text'>Рейтинг</div>
                                    <div className='filter-picture'/>
                            </div>
                            <div className='btn-filter'>
                                    <div className='btn-text'>Цена</div>
                                    <div className='filter-picture'/>    
                            </div>
                        </div>
                        <div className='inputbox-searching'>
                                123123
                        </div>
                    </div>
                </section>
                <aside>
                    <div className='navAside'>
                        <div className='citiesHotels'>
                            <div className='hotelStyle'>
                                Отели
                            </div>
                            <div className='cityStyle'>
                                Москва
                            </div>
                        </div>
                        <div className='arrivaldate'>
                            <div className='dateStyle'>
                                07 июля 2020
                            </div>
                        </div>
                    </div>
                    <div className='carousel'>
                        
                    </div>
                    <div className='listOfHotels'>
                        
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default BookingScreen;