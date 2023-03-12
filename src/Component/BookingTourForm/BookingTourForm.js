import React, { useState } from 'react';
import DatePicker from "react-datepicker";
const BookingTourForm = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const onChangeHandler = (value) => {
        setSelectedDate(value);
    }

    return (
        <div className="hero w-full lg:pt-16">
            <div className="hero-content p-0 w-full flex-col lg:flex-row-reverse">
                <div className="card rounded bg-slate-100 flex-shrink-0 w-full rounded-none bg-base-100">
                    <form action="">
                        <div className="card-body">
                            <h1 className='text-3xl font-semibold uppercase'>Book This Tour</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="name *" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email *" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" placeholder="number *" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <DatePicker className='w-full p-3 border text-gray-400' selected={selectedDate} onChange={onChangeHandler} dateFormat={"dd MMM yyyy"}></DatePicker>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Tickets</span>
                                </label>
                                <input type="number" placeholder="number of tickets *" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered rounded-none h-24" placeholder="message *"></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn rounded-none border-none bg-cyan-700">Book Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingTourForm;