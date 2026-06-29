interface INavigation {
    setView: (arg:string) => void;
    view: string;
}

export interface ILayout extends INavigation {
    children: string | JSX.Element | JSX.Element[] ;
}

export interface IHeader extends INavigation {
    appTitle: string;
}

export interface IFooter {
    appName: string;
    appVersion: string;
    appDescription: string;
}