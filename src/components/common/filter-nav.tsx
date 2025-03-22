import HomeSubHeader from "./subheaders/home-subheader";
import { DefaultSubHeader } from "./subheaders/default-subheader";

interface FilterNavProps {
  pathname: string;
}

export function FilterNav({ pathname }: FilterNavProps) {
  let componentToRender;
  if (pathname === "/hub") {
    componentToRender = <HomeSubHeader />;
  } else {
    componentToRender = <DefaultSubHeader />;
  }

  return <>{componentToRender}</>;
}
