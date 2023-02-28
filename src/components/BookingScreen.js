import React from 'react';
import bookingstyles from '../styles/BookingScreen.css'

const BookingScreen = () => {
    return (
        <div>
            <nav>
                <div className='brandNav'>
                    Simple Hotel Check
                </div>
                <div className='exitButton'>
                    Выйти
                </div>
            </nav>
            <main>
                <section>
                    <div className='datePicker'>

                    </div>
                    <div className='favorites'>

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