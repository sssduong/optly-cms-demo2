import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { RichText } from "@remkoj/optimizely-cms-react/rsc";
import { SoFooterDataFragmentDoc, type SoFooterDataFragment } from "@/gql/graphql";

/**
 * Footer - Sports Orbit
 *
 */
export const SoFooterComponent : CmsComponent<SoFooterDataFragment> = ({ data, children }) => {
    return (
        /* TODO: Use section component */
        <footer className="p-b-md p-t-sm section-standout site-footer d-print-none">
          <div className="container">
            <div className="row">
              <div className="col-md-4"><RichText text={ data.ColumnTextOne?.json } /></div>
              <div className="col-md-4"><RichText text={ data.ColumnTextTwo?.json } /></div>
              <div className="col-md-4"><RichText text={ data.ColumnTextThree?.json } /></div>
            </div>
          </div>
        </footer>
    )
}
SoFooterComponent.displayName = "Footer - Sports Orbit (Component/SoFooter)";
SoFooterComponent.getDataFragment = () => ['SoFooterData', SoFooterDataFragmentDoc];

export default SoFooterComponent;
