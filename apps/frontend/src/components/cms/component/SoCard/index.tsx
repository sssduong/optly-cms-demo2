import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { RichText } from "@remkoj/optimizely-cms-react/rsc";
import { SoCardDataFragmentDoc, type SoCardDataFragment } from "@/gql/graphql";
import Link from "next/link";
/**
 * Card - Sports Orbit
 * A card for Sports Orbit
 */
export const SoCardComponent : CmsComponent<SoCardDataFragment> = ({ data, children }) => {
    const componentName = 'Card - Sports Orbit';
    const componentInfo = 'A card for Sports Orbit';
    return (
      <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{componentName}</div>
        <div>{componentInfo}</div>
        {Object.getOwnPropertyNames(data).length > 0 && <pre
          className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{JSON.stringify(data, undefined, 4)}</pre>}
        {children && <div className="mt-4 mx-4 flex flex-col">{children}</div>}

        {/* SO Card Markup */}
        <div className="card h-100 pos-rel">
          <img className="card-img" alt="" src="/siteassets/images/gameinsight.jpg"/>

          <div className="card-body d-block h-100 ">
            <h3 className="card-title">{ data.Heading }</h3>

            <div className="color-gray-dark text-left">
              <RichText text={ data.Teaser?.json } />
            </div>

            <Link href={ data.Link.default } className="mt-3 d-inline-block">Read More</Link>
          </div>
        </div>
      </div>
    );
};

SoCardComponent.displayName = "Card - Sports Orbit (Component/SoCard)";
SoCardComponent.getDataFragment = () => ['SoCardData', SoCardDataFragmentDoc];

export default SoCardComponent;
