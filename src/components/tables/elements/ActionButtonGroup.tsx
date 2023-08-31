import React from 'react';

import listView from '../../../assets/icons/list-view.svg'
import gridView from '../../../assets/icons/grid-view.svg'

interface ActionButtonGroupProps {
  onClickButton1: () => void;
  onClickButton2: () => void;
}

const ActionButtonGroup: React.FC<ActionButtonGroupProps> = ({ onClickButton1, onClickButton2 }) => {
  return (
    <div className='flex flex-row nowrap justify-center items-center'>
      <button className='btn btnGhost' onClick={ onClickButton1 }>
        <object data={ listView } className='actionIcon active' />
      </button>
      <button className='btn btnGhost' onClick={ onClickButton2 }>
        <object data={ gridView } className='actionIcon' />
      </button>
    </div>
  );
};

export default ActionButtonGroup;
