import { Chapters, ClickFunction } from "../types/types";

const Content = ({
  allChapters,
  currentChapterContent,
  onClick,
  currentChapter,
}: {
  allChapters: Chapters;
  currentChapterContent: string | undefined;
  onClick: ClickFunction;
  currentChapter: string | undefined;
}) => {
  if (!allChapters) {
    return null;
  } else if (currentChapterContent) {
    return (
      <>
        <h2 className="content-subhead">{currentChapter}</h2>
        <div className="content">{currentChapterContent}</div>
      </>
    );
  } else {
    return (
      <div className="content">
        <h2 className="content-subhead">Table of Contents</h2>

        <div className="pure-menu">
          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              {allChapters.map((chapter) => {
                return (
                  <a
                    onClick={(e) => onClick(chapter, e)}
                    key={chapter}
                    href={chapter}
                    className="pure-menu-link"
                  >
                    {chapter}
                  </a>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export { Content };
