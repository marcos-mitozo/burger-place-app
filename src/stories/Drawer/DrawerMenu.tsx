import * as Dialog from "@radix-ui/react-dialog";
import "./drawer.css";
import styled, { useTheme } from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Span } from "../Text/span";

interface IOption {
  title: string;
}

export const DrawerMenu = () => {
  const DrawerToggle = styled.div`
    top: 0;
    left: 0;
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
    padding: 20px;
    cursor: pointer;
    position: absolute;
  `;

  const theme = useTheme();

  const dialogContentStyles: any = {
    boxShadow:
      "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
    position: "fixed",
    top: "50vh",
    left: "9vw",
    transform: "translate(-50%, -50%)",
    width: "15vw",
    minHeight: "100%",
    padding: "25px",
    animation: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    backgroundColor: theme.bgColor,
  };

  const MenuTitle = styled.h1`
    color: #fd9533;
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    height: 20px;
  `;

  const Divider = styled.div`
    background-color: ${(props: any) => props.theme.color};
    height: 2px;
    min-width: 100%;
    color: #fd9533;
    margin: 10px 0px 10px 0px;
  `;

  const MenuItem = styled.div`
    cursor: pointer;
    &:hover span {
      color: #fd9533;
      font-weight: 600;
    }
  `;

  const menuOptions = [
    {
      title: "Ingredients",
    },
    {
      title: "Meals",
    },
    {
      title: "Orders",
    },
  ];

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <DrawerToggle>
          <FontAwesomeIcon icon={faBars} />
        </DrawerToggle>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content style={{ ...dialogContentStyles }}>
          <MenuTitle>Pages</MenuTitle>
          <Divider style={{marginTop: 40}}></Divider>
          {menuOptions.map((option: IOption, key: number) => (
            <MenuItem key={key}>
              <Span>{option.title}</Span>
              <Divider></Divider>
            </MenuItem>
          ))}
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
