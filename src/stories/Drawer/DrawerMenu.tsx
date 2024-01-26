import * as Dialog from "@radix-ui/react-dialog";
import "./drawer.css";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Span } from "../Text/span";
import { Link } from "react-router-dom";

interface IOption {
  title: string;
  path: string;
}

export const DrawerMenu = () => {
  const DrawerToggle = styled.div`
    margin-top: 90px;
    left: 0px;
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
    cursor: pointer;
    position: relative;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: ${(props) => props.theme.main};
  `;

  const DialogContent = styled.div`
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50vh;
    margin-top: 115px;
    left: 10vw;
    transform: translate(-50%, -50%);
    width: 18vw;
    min-height: 100%;
    padding: 25px;
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
    background-color: ${(props: any) => props.theme.bgColor};
    animation-duration: 2s;
    animation-delay: 2s;
  `;

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
      path: "/ingredient",
    },
    {
      title: "Meals",
      path: "",
    },
    {
      title: "Orders",
      path: "",
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
        <Dialog.Content>
          <DialogContent>
            <MenuTitle>Pages</MenuTitle>
            <Divider style={{ marginTop: 40 }}></Divider>
            {menuOptions.map((option: IOption, key: number) => (
              <MenuItem key={key}>
                <Link to={option.path}>
                  <Span>{option.title}</Span>
                </Link>
                <Divider></Divider>
              </MenuItem>
            ))}
            <Dialog.Close />
          </DialogContent>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
