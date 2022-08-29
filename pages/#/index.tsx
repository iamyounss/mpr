import ConnectedIndex from "../../lib/state/authentication/access/ConnectedIndex";

import Header from "../../components/Modules/layout/Header";
import ProfileDropdown from "../../components/Base/Header/ProfileDropdown";

export default function ({ theme }){
    return (
        <>
            <Header 
                onConnectedActions={theme}
                profileDropdown={<ProfileDropdown />} 
            />
            <ConnectedIndex />
        </>
    )
}