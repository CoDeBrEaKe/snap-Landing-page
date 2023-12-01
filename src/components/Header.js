import logo from "./../images/logo.svg";
import todo from "./../images/icon-todo.svg";
import calender from "./../images/icon-calendar.svg";
import reminder from "./../images/icon-reminders.svg";
import planning from "./../images/icon-planning.svg";
import burger from "./../images/icon-menu.svg";
import { styled } from "styled-components";
import { useRef } from "react";

function Header() {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0 30px;

    justify-content: space-between;
    color: hsl(0, 0%, 41%);
  `;
  const Image = styled.img`
    cursor: pointer;
  `;
  const Navbar = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  `;
  const CompactMenu = styled.ul`
    position: absolute;
    list-style: none;
    opacity: 0;
    right: -40px;
    background-color: white;
    display: none;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 20px;
    gap: 20px;
    width: max-content;
    padding: 20px;
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    color: hsl(0, 0%, 41%);
    transition: all 0.5s;
  `;
  const List = styled.ul`
    list-style: none;
    display: flex;
    gap: 50px;
  `;
  const ListItem = styled.li`
    cursor: pointer;
    position: relative;
    &:hover {
      color: black;
    }
  `;
  const Buttons = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    cursor: pointer;
  `;
  const Button = styled.div`
    border: ${(props) =>
      props.type == "register" ? "1px solid hsl(0, 0%, 8%)" : ""};
    padding: ${(props) => (props.type == "register" ? "10px 20px" : "")};
    border-radius: ${(props) => (props.type == "register" ? "10px" : "")};
    &:hover {
      color: black;
      border: ${(props) => (props.type == "register" ? "1px solid black" : "")};
    }
  `;
  const Burger = styled.img`
    display: none;
  `;
  const Icon = styled.img`
    height: 20px;
    margin-right: 20px;
  `;

  const compactRef = useRef("");
  const companyRef = useRef("");
  const NavbarRef = useRef("");

  function handleCompact(ref) {
    if (
      ref.current.style.display == "" ||
      ref.current.style.display == "none"
    ) {
      ref.current.style.display = "flex";
      setTimeout(() => {
        ref.current.style.opacity = "1";
      }, 10);
      console.log(ref.current.style.display);
    } else if (ref.current.style.display == "flex") {
      ref.current.style.opacity = "0";

      setTimeout(() => {
        ref.current.style.display = "none";
      }, 500);
    }
  }

  function handleBurger() {
    console.log(NavbarRef.current.style.display);
    if (
      NavbarRef.current.style.display == "" ||
      NavbarRef.current.style.display == "none"
    ) {
      NavbarRef.current.style.display = "flex";
      document.querySelector(".offset").classList.add("active");

      setTimeout(
        () => (document.querySelector(".offset").style.opacity = "0.5"),
        10
      );
      setTimeout(() => (NavbarRef.current.style.right = "0"), 10);
    } else if (NavbarRef.current.style.display == "flex") {
      NavbarRef.current.style.right = "-100%";
      document.querySelector(".offset").style.opacity = "0";
      setTimeout(
        () => document.querySelector(".offset").classList.remove("active"),
        300
      );
      setTimeout(() => (NavbarRef.current.style.display = "none"), 300);
      setTimeout(() => (NavbarRef.current.style = ""), 300);
    }
  }
  return (
    <Wrapper>
      <Image src={logo} />
      <Burger src={burger} className="burger-icon" onClick={handleBurger} />
      <Navbar className="navbar" ref={NavbarRef}>
        <List>
          <ListItem
            className="features-item"
            onClick={() => handleCompact(compactRef)}
          >
            Features{" "}
            <CompactMenu className="compact-menu" ref={compactRef}>
              <ListItem>
                <Icon src={todo} />
                Todo List
              </ListItem>

              <ListItem>
                <Icon src={calender} />
                Calendar
              </ListItem>

              <ListItem>
                <Icon src={reminder} />
                Reminders
              </ListItem>

              <ListItem>
                <Icon src={planning} />
                Planning
              </ListItem>
            </CompactMenu>
          </ListItem>

          <ListItem
            className="company-item"
            onClick={() => handleCompact(companyRef)}
          >
            Company{" "}
            <CompactMenu className="compact-menu" ref={companyRef}>
              <ListItem>History</ListItem>
              <ListItem>Our Team</ListItem>
              <ListItem>Blog</ListItem>
            </CompactMenu>
          </ListItem>

          <ListItem>Careers</ListItem>
          <ListItem>About</ListItem>
        </List>
        <Buttons className="buttons">
          <Button type="login">Login</Button>
          <Button type="register">Register</Button>
        </Buttons>
      </Navbar>
    </Wrapper>
  );
}

export default Header;
