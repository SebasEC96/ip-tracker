import * as React from "react";

export interface IAppProps {}

export const Header = (props: IAppProps) => {
  return (
    <header className="header">
      <h1 className="title">IP Address Tracker</h1>
    </header>
  );
};
