import React from 'react'

import leftArrow from '../../assets/icons/left-arrow.svg'
import rightArrow from '../../assets/icons/right-arrow.svg'

interface NavButtonsProps {
  onClickButton1: () => void;
  onClickButton2: () => void;
}

const NavButtons: React.FC<NavButtonsProps> = ({ onClickButton1, onClickButton2 }) => {
  return (
    <div className='flex flex-row nowrap justify-center items-center'>
      <button className='flex flex-row nowrap justify-center items-center btn btnPrimary' onClick={ onClickButton1 }>
        <object data={ leftArrow } className='actionIcon active' />
      </button>
      <button className='flex flex-row nowrap justify-center items-center btn btnPrimary' onClick={ onClickButton2 }>
        <object data={ rightArrow } className='actionIcon' />
      </button>
    </div>
  );
};

export default NavButtons;
