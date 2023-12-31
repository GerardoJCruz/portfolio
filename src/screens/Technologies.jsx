import React from 'react'
import DevIcon from "devicon-react-svg"
import { techs } from '../helpers/techs';

function Technologies() {
    return (
        <div className='techs' id='technologies'>
            <div className='techs__info__container'>
                <div>
                    <h1 style={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: '700'}}>Some of the technologies that I use.</h1>
                </div>
                <div className='techs__cards__container'> 
                    {techs.map((e, idx) => {
                        return (

                            <div id={idx} className="techs__card" key={e.id}>
                                <DevIcon className="techs__icons" icon={e.iconName} />
                                <span style={{margin: '5px', fontSize: '1.5rem'}}>{e.name}</span>
                            </div>
                        )
                    })}
                </div>
                <div className='techs__more'>
                    <span>More Technologies Coming Soon. </span>
                </div>
            </div>
        </div>
    )
}

export default Technologies;
