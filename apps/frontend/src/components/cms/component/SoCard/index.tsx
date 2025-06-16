import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { SoCardDataFragmentDoc, type SoCardDataFragment } from "@/gql/graphql";

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
            <h3 className="card-title">
              Know the Game
            </h3>
            <div className="color-gray-dark text-left">

              <p>New to the game or need a refresher? Explore the rules of soccer, football,
                baseball, and more with easy-to-follow guides. Master the basics and become a pro at understanding every
                play!</p>
            </div>
            <a href="/link/80cb334b73864e919dda630746b24975.aspx" className="mt-3 d-inline-block">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
};

SoCardComponent.displayName = "Card - Sports Orbit (Component/SoCard)";
SoCardComponent.getDataFragment = () => ['SoCardData', SoCardDataFragmentDoc];

export default SoCardComponent;
