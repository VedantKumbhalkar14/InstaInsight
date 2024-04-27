import { AiFillCompass, AiFillHeart, AiFillMessage, AiFillPlusCircle, AiOutlineCompass, AiOutlineHeart, AiOutlineHome, AiOutlineMessage, AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoVideocam, IoVideocamOutline } from "react-icons/io5";

export const menu = [
    {
        title: 'Home', icon: <AiOutlineHome /> , activeIcon: <AiFillHome />
    },
    {
        title: 'Search', icon: <AiOutlineSearch /> , activeIcon: <AiOutlineSearch />
    },
    {
        title: 'Explore', icon: <AiOutlineCompass /> , activeIcon: <AiFillCompass />
    },
    {
        title: 'Reels', icon: <IoVideocamOutline /> , activeIcon: <IoVideocam />
    },
    {
        title: 'Message', icon: <AiOutlineMessage /> , activeIcon: <AiFillMessage />
    },
    {
        title: 'Notification', icon: <AiOutlineHeart /> , activeIcon: <AiFillHeart />
    },
    {
        title: 'Create', icon: <AiOutlinePlusCircle /> , activeIcon: <AiFillPlusCircle />
    },
    {
        title: 'Profile', icon: <CgProfile /> , activeIcon: <CgProfile />
    },
]