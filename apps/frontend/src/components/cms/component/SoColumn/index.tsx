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
      <>
        {/* Custom column */}
        <div className={clsx('col', data.Modifiers)}>
          <CmsContentArea fieldName="ColumnContent" items={data.ColumnContent} className="w-100" ctx={ctx} />
        </div>

        {/* Default */}
        <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
          <div className="font-bold italic">{ componentName }</div>
          <div>{ componentInfo }</div>
          { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
          { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
        </div>
      </>
    );
};
SoColumnComponent.displayName = "Column - Sports Orbit (Component/SoColumn)";
SoColumnComponent.getDataFragment = () => ['SoColumnData', SoColumnDataFragmentDoc];

export default SoColumnComponent;
