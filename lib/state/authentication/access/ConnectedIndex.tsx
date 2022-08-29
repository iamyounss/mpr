import Link from "next/link";
import {BiTransfer} from 'react-icons/bi';
import {VscAccount} from 'react-icons/vsc';


export default function (){

    const iconStyle = { width: '50px', height: '50px', }

    return (
        <>
            <div className="wrapper max-w cursor-pointer">
                <Link href="/orders">
                    <span>
                        <span className="rqz5">
                            <VscAccount style={iconStyle}/>
                        </span>
                        Mon compte
                    </span>
                </Link>
                <Link href="/maps">
                    <span>
                        <span className="rqz5">
                            <BiTransfer style={iconStyle} />
                        </span>
                        Estimation
                    </span>
                </Link>
            </div>
        </>
    )
}