import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState, version } from "react";
import { LANGUAGE_VERSIONS } from "../../helpers/const";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue.400";

const CodeLanguageSelector = ({ language, onSelect }) => {
  const [isTheme, setIsTheme] = useState(false);

  useEffect(() => {
    const updateThemeState = () => {
      setIsTheme(document.body.classList.contains("dark-theme"));
    };

    updateThemeState(); // Сразу обновляем тему

    const observer = new MutationObserver(updateThemeState);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="large">
        Language:
      </Text>
      <Menu isLazy>
        <MenuButton
          as={Button}
          theme={isTheme ? "vs-dark" : "vs-light"}
          border={isTheme ? "1px solid white" : "1px solid black"}
          borderRadius="6px"
          padding="10px"
          bg={isTheme ? "" : ""}
        >
          {language}
        </MenuButton>
        <MenuList bg={isTheme ? "#110c1b" : "white"}>
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? ACTIVE_COLOR : ""}
              bg={lang === language ? "white.400" : "transparent"}
              _hover={{
                color: ACTIVE_COLOR,
                bg: `${isTheme} ? "white": ""`,
              }}
              onClick={() => {
                onSelect(lang);
              }}
            >
              {lang}
              &nbsp;
              <Text as="span" color="gray.600" fontSize="small">
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default CodeLanguageSelector;
