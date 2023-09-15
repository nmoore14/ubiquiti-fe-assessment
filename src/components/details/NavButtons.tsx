interface NavButtonsProps {
  onClickButton1: () => void;
  onClickButton2: () => void;
}

export default function NavButtons({ onClickButton1, onClickButton2 }: NavButtonsProps) {
  return (
    <div className='flex flex-row nowrap justify-center items-center'>
      <button className='flex flex-row nowrap justify-center items-center btn btnPrimary' onClick={ onClickButton1 }>
        <svg fill="none" viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
          <path d="m5.5 12c-0.133 0-0.26501-0.053-0.36401-0.157l-4.849-5.142c-0.185-0.18801-0.287-0.43701-0.287-0.70101s0.102-0.513 0.287-0.701l4.849-5.142c0.18901-0.201 0.50601-0.21 0.70701-0.021 0.201 0.19 0.21 0.506 0.021 0.707l-4.864 5.157 0.01 0.01 4.854 5.146c0.189 0.201 0.18 0.517-0.021 0.707-0.097 0.092-0.22 0.137-0.343 0.137z" fill="#838691"/>
        </svg>
      </button>
      <button className='flex flex-row nowrap justify-center items-center btn btnPrimary' onClick={ onClickButton2 }>
        <svg fill="none" viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
          <path d="m0.49998 12c0.133 0 0.265-0.053 0.364-0.157l4.849-5.142c0.185-0.18801 0.287-0.43701 0.287-0.70101s-0.102-0.513-0.287-0.701l-4.849-5.142c-0.189-0.201-0.506-0.21-0.707-0.021-0.201 0.19-0.21 0.506-0.021 0.707l4.864 5.157-0.01 0.01-4.854 5.146c-0.189 0.201-0.18 0.517 0.021 0.707 0.097 0.092 0.22 0.137 0.343 0.137z" fill="#838691"/>
        </svg>
      </button>
    </div>
  );
};
