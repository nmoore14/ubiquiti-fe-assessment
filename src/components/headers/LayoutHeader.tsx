import ubiDefaultIcon from '../../assets/ubi-default-icon.svg'

interface LayoutHeaderProps {
  pageTitle: string,
  authorName: string,
}

export default function LayoutHeader({ pageTitle, authorName }: LayoutHeaderProps) {
  return (
    <div className="fixed layoutHeader">
      <div className="flex flex-row nowrap justify-center items-center pageDetails">
        <img src={ ubiDefaultIcon } alt='Ubiquiti Defualt Icon'/>
        <h3>{ pageTitle }</h3>
      </div>
      <div className='pageAuthor'>
        <h3>{ authorName }</h3>
      </div>
    </div>
  )
}
