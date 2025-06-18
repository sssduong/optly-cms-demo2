import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { SoRowDataFragmentDoc, type SoRowDataFragment } from "@/gql/graphql";

/**
 * Row - Sports Orbit
 * 
 */
export const SoRowComponent : CmsComponent<SoRowDataFragment> = ({ data, children }) => {
    const componentName = 'Row - Sports Orbit'
    const componentInfo = ''
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div>
}
SoRowComponent.displayName = "Row - Sports Orbit (Component/SoRow)"
SoRowComponent.getDataFragment = () => ['SoRowData', SoRowDataFragmentDoc]

export default SoRowComponent