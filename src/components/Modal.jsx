import React from 'react'

function Modal({close}) {
    return (
        <div className="my-modal">
            <div className="inner">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat corporis eos a molestias vero, nostrum saepe explicabo rem exercitationem tempora, cumque odit, eligendi optio dolor quod atque autem? Modi, aliquam!
                <div className='close-btn' onClick={()=>close('Hello')}></div>
            </div>
        </div>
    )
}

export default Modal