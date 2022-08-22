import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { MdOutlineCancel } from 'react-icons/md'


const Cart = () => {
  const { removeClick } = useStateContext()

  return (
    <div className='fixed w-screen h-full z-50 bg-half-transparent top-0 right-0'>
      <div className=' w-400 h-full float-right bg-white dark:bg-secondary-dark-bg'>Shopping Cart
        <div>Items</div>
        <div className='items-center'>
          <TooltipComponent content="Close" position="BottomCenter">
            {/* <button type="button" onClick={() => { removeClick('cart') }} className='text-xl rounded-full absolute bottom-32 right-[200px] p-3 hover:bg-light-gray'> * onClick={() => { setActiveMenu((prevActiveMenu) => !prevActiveMenu) }}  */}
            <button type='button' onClick={() => { removeClick('cart') }} style={{ color: 'rgb(153,171,180)', borderRadius: '50%' }} className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'>
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
      </div>

    </div>
  )
}

export default Cart