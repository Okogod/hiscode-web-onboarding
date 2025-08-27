// React Hooks
import { useState, useContext } from "react";

// Assets
import Logo from "../../assets/images/logo.svg";
import DropDownIcon from '../../assets/images/icons/dropdown-icon.svg';
import DropUpIcon from '../../assets/images/icons/dropup-icon.svg';

import CountryData from "../../static-data/CountryData";

import { CountryContext } from "../../context/CountryContext";

const NavbBar = () => {

    const country = useContext(CountryContext)

    const [showCountryList, setShowCountryList] = useState(false);

    return (
        <nav className="flex justify-between px-[120px] py-[20px] bg-[#fff] shadow-xs">
            <img src={Logo} alt="Hiscode Logo" />

            <div className="flex items-center gap-[12px] border-green-color border-[1px] px-[12px] py-[13px] rounded-[4px]">
                <div className="flex items-center gap-[8px]">
                    <img src={country?.country.flag} alt={country?.country.name} className="w-[24px] h-[16px]" />
                    <p className="text-green-color">{country?.country.name}</p>
                </div>
                <img src={showCountryList ? DropUpIcon : DropDownIcon} className="cursor-pointer" onClick={() => setShowCountryList(prev => !prev)}/>
            </div>

            {
                showCountryList && <div className="absolute top-20 right-30 flex flex-col gap-[15px] bg-[#fff] border-green-color border-[1px] rounded-[4px] p-[10px]">
                    {
                        CountryData.filter(data => data.name != country?.country.name).map((data) =>
                            <div key={data.id} onClick={() => {country?.setCountry(data), setShowCountryList(false)}} className={`cursor-pointer flex items-center gap-[8px] p-[5px] border-b-[1px]`}>
                                <img src={data.flag} alt={data.name} className="w-[24px] h-[16px]" />
                                <p className="text-green-color">{data.name}</p>
                            </div>
                        )
                    }
                </div>
            }
        </nav>
    )
}

export default NavbBar