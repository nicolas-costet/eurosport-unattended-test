import {FC, ReactElement} from "react";

interface TripPlannerLayoutProps {
    children: ReactElement;
}

const Layout: FC<TripPlannerLayoutProps> = ({
                                                children,
                                            }) => {
    return (
        <div className="mx-auto">
            {children}
        </div>
    );
}

export default Layout;
