export type Chapters =  string[] | undefined;

export type Title = string | undefined;

export type ChapterTitle = Title;

export type ChapterContent = Title;

export type EventType = React.SyntheticEvent;

export interface Book {
    chapters: Chapters;
    book: Title;
}

export type ClickFunction = (chapter: ChapterTitle, e: EventType) => Promise<void>;