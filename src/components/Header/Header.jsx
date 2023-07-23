import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSquarePlus,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import Searchbar from "./Searchbar";
import Logo from "../../assets/youtube_logo.svg";
import { toggleSidebar } from "../../app/slices/sidebarSlice";
import { useState } from "react";
import NotificationBox from "./NotificationBox";

export default function Header() {
  const dispatch = useDispatch();
  const [dialogBoxConfig, setDialogBoxConfig] = useState({
    showNotification: false,
    showCreate: false,
  });

  const toggleDialogConfig = (e) => {
    if (e.target.id === "create") {
      dialogBoxConfig.showCreate
        ? setDialogBoxConfig({
            showNotification: false,
            showCreate: false,
          })
        : setDialogBoxConfig({
            showNotification: false,
            showCreate: true,
          });
    } else if (e.target.id === "notification") {
      dialogBoxConfig.showNotification
        ? setDialogBoxConfig({
            showNotification: false,
            showCreate: false,
          })
        : setDialogBoxConfig({
            showNotification: true,
            showCreate: false,
          });
    }
  };

  return (
    <div className="py-2 px-8 bg-blackMain text-white flex justify-between items-center gap-4 sticky top-0 left-0 z-20">
      <div className="flex items-center gap-4">
        <div className="flex justify-center items-center gap-2">
          <button
            className="group mr-4"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FontAwesomeIcon
              className="p-2 text-lg group-hover:text-redMain"
              icon={faBars}
            />
          </button>

          <img className="w-9 hover:opacity-80" alt="youtube logo" src={Logo} />

          <a href="/" className="font-secondary text-xl">
            Youtube
            <span className="ml-1 text-sm opacity-80">IN</span>
          </a>
        </div>

        <div className="ml-4">
          <Searchbar />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="p-2 flex items-center gap-4 relative">
          <FontAwesomeIcon
            className="p-2 text-lg border-b-[2px] border-transparent hover:border-redMain cursor-pointer"
            icon={faSquarePlus}
            id="create"
            onClick={(e) => toggleDialogConfig(e)}
          />

          <FontAwesomeIcon
            className="p-2 text-lg border-b-[2px] border-transparent hover:border-redMain cursor-pointer"
            icon={faBell}
            id="notification"
            onClick={(e) => toggleDialogConfig(e)}
          />

          {dialogBoxConfig.showCreate && <NotificationBox value={"create"} />}
          {dialogBoxConfig.showNotification && (
            <NotificationBox value={"notification"} />
          )}
        </div>

        <div className="h-10 w-10 p-1 flex justify-center items-center rounded-full border-[1px] border-transparent hover:border-redMain">
          <FontAwesomeIcon className="text-xl" icon={faUser} />
        </div>
      </div>
    </div>
  );
}
