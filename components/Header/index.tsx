import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { User, ShoppingCart } from "react-feather";
import { getAllCategories } from "../../lib/api";
import useCategory from "../../hooks/useCategory";
import {
  Container,
  chakra,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";

const Header = () => {
  const router = useRouter();
  const { getCategories } = useCategory();
  const { isLoading, data, isSuccess } = getCategories();

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  let headerConfigs: {
    boxShadow: string;
    backgroundColor: string;
    color: string;
  } = {
    boxShadow: "sm",
    backgroundColor: "#fff",
    color: "#000",
  };

  if (router.pathname === "/" && offset < 20) {
    headerConfigs.boxShadow = "";
    headerConfigs.backgroundColor = "transparent";
    headerConfigs.color = "#fff";
  }

  let categoryLinks: Array<{
    name: string;
    url: string;
  }> = [];
  if (data) {
    data.map((category) => {
      if (category === "men's clothing") {
        categoryLinks.push({
          url: `/category/mens-clothing`,
          name: category,
        });
      } else if (category === "women's clothing") {
        categoryLinks.push({
          url: `/category/womens-clothing`,
          name: category,
        });
      } else {
        categoryLinks.push({
          url: `/category/${category}`,
          name: category,
        });
      }
    });
  }

  return (
    <chakra.header
      py={4}
      zIndex="99"
      w="100%"
      pos="fixed"
      top="0"
      transition="all 200ms ease"
      {...headerConfigs}
    >
      <Container
        maxW="container.xl"
        margin="auto"
        display="flex"
        justifyContent="space-between"
      >
        <nav>
          <chakra.ul display="flex" listStyleType="none" alignItems="center">
            <chakra.li mr={3}>
              <Link href="/">
                <a>
                  <Text fontSize="xl" fontWeight="bold" color="inherit">
                    TheLOGO
                  </Text>
                </a>
              </Link>
            </chakra.li>
            <li>
              <Menu>
                <MenuButton transition="all 0.2s" outline="0">
                  Categories
                </MenuButton>
                <MenuList>
                  {isSuccess &&
                    categoryLinks.map((category) => (
                      <Link href={category.url}>
                        <a>
                          <MenuItem textTransform="capitalize" color="#000">
                            {category.name}
                          </MenuItem>
                        </a>
                      </Link>
                    ))}
                </MenuList>
              </Menu>
            </li>
          </chakra.ul>
        </nav>
        <nav>
          <chakra.ul display="flex" listStyleType="none" alignItems="center">
            <chakra.li mr={3}>
              <User />
            </chakra.li>
            <li>
              <ShoppingCart />
            </li>
          </chakra.ul>
        </nav>
      </Container>
    </chakra.header>
  );
};

export default Header;
