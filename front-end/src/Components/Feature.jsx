import React from 'react'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
function Feature() {
    const feature = [
        {
            icon: <AiTwotoneCalendar />,
            name: "Appointment"
        },
        {
            icon: <BsFillCalendarDateFill />,
            name: "Registration"
        },
        {
            icon: <AiTwotoneCalendar />,
            name: "ssss"
        },
        {
            icon: <AiTwotoneCalendar />,
            name: "dsfds"
        },
        {
            icon: <AiTwotoneCalendar />,
            name: "dsfds"
        },
        {
            icon: <AiTwotoneCalendar />,
            name: "dsfds"
        },
        {
            icon: <AiTwotoneCalendar />,
            name: "dsfds"
        },
        {
            icon: <BsFillCalendarDateFill />,
            name: "dsfds"
        },
        {
            icon: <BsFillCalendarDateFill />,
            name: "dsfds"
        },
        {
            icon: <AiTwotoneCalendar />,
            name: "dsfds"
        },
        {
            icon: <AiTwotoneCalendar />,
            name: "dsfds"
        },
        {
            icon: <AiTwotoneCalendar />,
            name: "dsfds"
        },
        {
            icon: <AiTwotoneCalendar />,
            name: "dsfds"
        },
        {
            icon: <BsFillCalendarDateFill />,
            name: "dsfds"
        },
        {
            icon: <BsFillCalendarDateFill />,
            name: "dsfds"
        },
        {
            icon: <BsFillCalendarDateFill />,
            name: "dsfds"
        },
        {
            icon: <BsFillCalendarDateFill />,
            name: "dsfds"
        },
        {
            icon: "sdf",
            name: "dsfds"
        },
        {
            icon: <AiTwotoneCalendar />,
            name: "dsfds"
        },
        {
            icon: <AiTwotoneCalendar />,
            name: "dsfds"
        },
        {
            icon: "sd",
            name: "dsfds"
        },
        {
            icon: <BsFillCalendarDateFill />,
            name: "dsfds"
        },
        {
            icon: "sd",
            name: "dsfds"
        }
    ]
    const handle_icon = (id) => {
        console.log(id);
    }
    return (
        <div>
            <div className='parent_style'>
                {feature && feature.map((res, e) => {
                    console.log(e);
                    return (
                        <Link to={`/dashboard/${res.name}`}>
                            <div key={e} className='icon_style' onClick={() => handle_icon(e)} >
                                <button className='icon_btn'>{res.icon}
                                </button>
                                <a className='icon_name'>{res.name}</a>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Feature
