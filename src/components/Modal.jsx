import ReactDom from 'react-dom'

export default function Modal(props) {
    const {children, handleCloseModal} = props

    return ReactDom.createPortal(
        <div className='modal-container'>
            {/* Be careful using the () for functions with the onClick attribute if its not done in a arrow function (heres a package of functions to do later) () => {method()} because just doing method() will make it so react runs the operation while drawing not on an actualy click */}
            {/* With parentheses - "Hey React, run this function now while you're drawing" */}
            {/* Without parentheses - "Hey React, here's the function to run when clicked" */}
            <button className='modal-underlay' onClick ={handleCloseModal}></button>
            <div className="modal-content">
                {children}
            </div>
    
        </div>,
        document.getElementById('portal')
    )
}

<hr/>