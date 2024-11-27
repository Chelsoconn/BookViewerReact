import { Title } from '../types/types'

const Header = ({bookTitle}: {bookTitle: Title}) => {


  return (
      <div className="header">
        <h1>{bookTitle}</h1>
        <h2>by Sir Arthur Doyle</h2>
      </div>
  )
}

export { Header }