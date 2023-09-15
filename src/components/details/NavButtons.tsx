interface NavButtonsProps {
  onClickButton1: () => void;
  onClickButton2: () => void;
}

export default function NavButtons({ onClickButton1, onClickButton2 }: NavButtonsProps) {
  return (
    <div className='flex flex-row nowrap justify-center items-center'>
      <button className='flex flex-row nowrap justify-center items-center btn btnPrimary' onClick={ onClickButton1 }>
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
          <path d="M5.50002 12C5.36702 12 5.23501 11.947 5.13601 11.843L0.287001 6.70099C0.102 6.51298 0 6.26398 0 5.99998C0 5.73598 0.102 5.48698 0.287001 5.29898L5.13601 0.156967C5.32502 -0.0440338 5.64202 -0.0530338 5.84302 0.135967C6.04402 0.325967 6.05302 0.641968 5.86402 0.842969L1 5.99998L1.01 6.00998L5.86402 11.156C6.05302 11.357 6.04402 11.673 5.84302 11.863C5.74602 11.955 5.62302 12 5.50002 12Z" fill="#838691"/>
        </svg>
      </button>
      <button className='flex flex-row nowrap justify-center items-center btn btnPrimary' onClick={ onClickButton2 }>
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
          <path d="M0.499984 12C0.632985 12 0.764985 11.947 0.863986 11.843L5.713 6.70099C5.898 6.51298 6 6.26398 6 5.99998C6 5.73598 5.898 5.48698 5.713 5.29898L0.863986 0.156967C0.674985 -0.0440338 0.357984 -0.0530338 0.156983 0.135967C-0.0440173 0.325967 -0.0530171 0.641968 0.135983 0.842969L5 5.99998L4.99 6.00998L0.135983 11.156C-0.0530171 11.357 -0.0440173 11.673 0.156983 11.863C0.253983 11.955 0.376984 12 0.499984 12Z" fill="#838691"/>
        </svg>
      </button>
    </div>
  );
};
