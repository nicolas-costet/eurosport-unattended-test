import {FunctionComponent, ReactElement} from "react";

interface TripPlannerLayoutProps {
    children: ReactElement;
}

const Layout: FunctionComponent<TripPlannerLayoutProps> = ({
                                                               children,

                                                           }) => {
    return (
        <div className="mx-auto">
            {children}
        </div>
    );
}

export default Layout;
