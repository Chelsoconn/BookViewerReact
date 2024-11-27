import { Header } from './header.tsx'
import { Content } from './content.tsx'
import { Title, Chapters, ClickFunction } from '../types/types'

const Main = ({bookName, allChapters, currentChapterContent, onClick, currentChapter }: {
  bookName: Title | undefined, 
  allChapters: Chapters, 
  currentChapterContent: string | undefined,
  onClick: ClickFunction,
  currentChapter: string | undefined
}) => {


  return (
    <>
        <div id="main">
          <Header bookTitle={bookName}/>
          <Content allChapters={allChapters} currentChapterContent={currentChapterContent} onClick={onClick} currentChapter={currentChapter}/>
        </div>
    </>
  )
}

export { Main }