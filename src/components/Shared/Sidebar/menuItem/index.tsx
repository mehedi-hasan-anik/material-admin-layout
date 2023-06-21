import { MultiLevel } from "./Multilevel";
import { SingleLevel } from "./singleLevel";
import { hasChildren } from "./utils";

type Props = {
  item: any;
  keyProp: any;
  viewSidebar: any;
};
const MenuItem = ({ item, keyProp, viewSidebar }: Props) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} key={keyProp} viewSidebar={viewSidebar} />;
};

export default MenuItem;
