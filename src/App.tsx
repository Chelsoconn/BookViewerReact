import { useState, useEffect } from "react";
import { Menu } from "./components/menu.tsx";
import { Main } from "./components/main.tsx";
import { getAllChapters, getChapter } from "./services/requests";
import { Chapters, Title, ChapterTitle, ChapterContent, EventType, ClickFunction } from "./types/types.ts";

function App() {

  const [allChapters, setAllChapters] = useState<Chapters>(undefined);

  const [bookName, setBookName] = useState<Title>(undefined);

  const [currentChapter, setCurrentChapter] = useState<ChapterTitle>(undefined);

  const [currentChapterContent, setCurrentChapterContent] = useState<ChapterContent>(undefined);


  useEffect(() => {
    const getChapters = async () => {
      try {
        const allContent = await getAllChapters();

        setAllChapters(allContent.chapters);
        setBookName(allContent.book);

      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };
    getChapters();
  }, []);



  const clickable: ClickFunction = async (chapter: ChapterTitle, e: EventType) => {
    try {
      e.preventDefault();
      setCurrentChapter(chapter);
      const chapterInfo = await getChapter(chapter);
      setCurrentChapterContent(chapterInfo);
    } catch {
      throw new Error("Cant get chapter contents");
    }
  };



  return (
    <div id="layout">

      <Menu 
        allChapters={allChapters} 
        onClick={clickable} 
      />
      <Main
        bookName={bookName}
        allChapters={allChapters}
        currentChapterContent={currentChapterContent}
        onClick={clickable}
        currentChapter={currentChapter}
      />

    </div>
  );
}

export default App;
