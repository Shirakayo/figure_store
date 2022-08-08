

export interface IListProps {
    image: string;
    title: string
    setDropDownVisible: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

type TNews = {
    id: number;
    title: string;
    important: boolean;
}

export interface INewsProps {
    newsItems: TNews[];
}