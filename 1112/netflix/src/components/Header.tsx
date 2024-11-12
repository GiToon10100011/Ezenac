import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";

interface IForm {
  keyword: string;
}

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  color: ${({ theme }) => theme.red};
  font-size: 18px;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const Logo = styled(motion.svg)`
  width: 95px;
  height: 25px;
  fill: ${({ theme }) => theme.red};
  path {
    stroke: ${({ theme }) => theme.white.bitLight};
    stroke-width: 10px;
  }
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.black.veryDark};
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.red};
`;

const Search = styled.form`
  position: relative;
  color: ${({ theme }) => theme.white.bitLight};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  svg {
    fill: ${({ theme }) => theme.red};
  }
`;

const Input = styled(motion.input)`
  width: 180px;
  transform-origin: right;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.black.veryDark};
  font-size: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.white.bitLight};
  &:focus {
    outline: none;
  }
`;

const logoVariants = {
  normal: {
    fillOpacity: 1,
  },
  active: {
    fillOpacity: [
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
    ],
    transition: {
      duration: 2,
      repeat: 5,
    },
  },
};

const navVariants = {
  top: {
    background: "rgba(0, 0, 0, 0)",
  },
  scroll: {
    background: "rgba(0, 0, 0, 1)",
  },
};

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const homeMatch = useMatch("/");
  const tvMatch = useMatch("/tv");
  const modalMatch = useMatch("/movies/*");
  const inputAnimation = useAnimation();
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = (data: IForm) => {
    navigate(`/search?keyword=${data.keyword}`);
    setValue("keyword", "");
  };

  const openSearchBar = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({
        scaleX: 1,
      });
    }
    setSearchOpen((current) => !current);
  };

  useEffect(() => {
    scrollY.on("change", () => {
      if (scrollY.get() > 60) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY]);
  return (
    <header>
      <Nav variants={navVariants} animate={navAnimation} initial={"top"}>
        <Col>
          <Link to={"/"}>
            <Logo
              variants={logoVariants}
              initial="normal"
              whileHover="active"
              width="1024"
              height="276.742"
              viewBox="0 0 1024 276.742"
            >
              <motion.path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" />
            </Logo>
          </Link>
          <Items>
            <Item>
              <Link to={"/"}>Home</Link>{" "}
              {homeMatch && <Circle layoutId="circleIndicator" />}
              {modalMatch && <Circle layoutId="circleIndicator" />}
            </Item>
            <Item>
              <Link to={"/tv"}>TV Shows</Link>{" "}
              {tvMatch && <Circle layoutId="circleIndicator" />}
            </Item>
          </Items>
        </Col>
        <Col>
          <Search onSubmit={handleSubmit(onValid)}>
            <Input
              {...register("keyword", {
                required: true,
                minLength: 1,
              })}
              type="text"
              placeholder="Search"
              animate={inputAnimation}
              initial={{ scaleX: 0 }}
            />
            <motion.svg
              onClick={openSearchBar}
              width={18}
              height={18}
              viewBox="0 0 512 512"
              animate={{ x: searchOpen ? -210 : 0 }}
              transition={{ type: "tween" }}
            >
              {searchOpen ? (
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
              ) : (
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              )}
            </motion.svg>
          </Search>
        </Col>
      </Nav>
    </header>
  );
};

export default Header;
