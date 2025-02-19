import Toolbar, { Item } from "devextreme-react/toolbar";
import Button from "devextreme-react/button";
import "./Header.scss";
import { Template } from "devextreme-react/core/template";
import { ThemeSwitcher } from "../theme-switcher/ThemeSwitcher";
import UserPanel from "../user-panel/UserPanel";
import { HeaderProps } from "@/data-types/common";
export default function Header({
  menuToggleEnabled,
  title,
  toggleMenu,
}: HeaderProps) {
  return (
    // <div
    //   className={"header-toolbar"}
    //   style={{ backgroundColor: "red", height: "100px" }}
    // >
    //   <Button icon="menu" stylingMode="text" onClick={toggleMenu} />
    // </div>
    <header className={"header-component"}>
      <Toolbar className={"header-toolbar"} hint="aaa">
        <Item
          visible={menuToggleEnabled}
          location={"before"}
          widget={"dxButton"}
          cssClass={"menu-button"}
        >
          <Button icon="menu" stylingMode="text" onClick={toggleMenu} />
        </Item>
        <Item
          location={"before"}
          cssClass={"header-title"}
          text={title}
          visible={!!title}
        />
        <Item location={"after"}>
          <ThemeSwitcher />
        </Item>
        <Item
          location="after"
          locateInMenu="auto"
          menuItemTemplate="userPanelTemplate"
        >
          <UserPanel menuMode="context" />
        </Item>
        <Template name="userPanelTemplate">
          <UserPanel menuMode="list" />
        </Template>
      </Toolbar>
    </header>
  );
}
