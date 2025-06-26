import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
import { SoColumnDataFragmentDoc, type SoColumnDataFragment } from "@/gql/graphql";
import clsx from "clsx";

/**
 * Column - Sports Orbit
 * 
 */
export const SoColumnComponent : CmsComponent<SoColumnDataFragment> = ({ data, children, ctx }) => {
  const componentName = 'Column - Sports Orbit';
  const componentInfo = '';
  return (
    <div className={clsx('col', data.Modifiers)}>
      <CmsContentArea fieldName="ColumnContent" items={data.ColumnContent} className="w-100" ctx={ctx} />
    </div>
  );
};
SoColumnComponent.displayName = "Column - Sports Orbit (Component/SoColumn)";
SoColumnComponent.getDataFragment = () => ['SoColumnData', SoColumnDataFragmentDoc];

export default SoColumnComponent;
