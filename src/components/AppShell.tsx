import React from "react";
import { AppShell, Navbar, Header, Footer, Aside, Text, MediaQuery, Burger, useMantineTheme } from '@mantine/core';
import LightAndDarkModeButton from './LightDarkButton';
// import TableExample from './TableExample';
import CandidateForm from './CandidateForm';

function AppShellLayout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = React.useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}

      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar className="navbar" p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <LightAndDarkModeButton />
          <Navbar.Section>
            <Text className="font-Color">Application Navbar</Text>
          </Navbar.Section>
          <Navbar.Section grow mt="lg" >
            <Text className="font-Color">Example 1</Text>
            <Text className="font-Color">Example 2</Text>
            <Text className="font-Color">Example 3</Text>
            <Text className="font-Color">Example 4</Text>
            <Text className="font-Color">Example 5</Text>
          </Navbar.Section>
          <Navbar.Section>
            <Text className="font-Color">Footer</Text>
          </Navbar.Section>
        </Navbar>
      }

      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside className="sidebar" p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text className="font-Color">Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }

      footer={
        <Footer className="footer" height={60} p="md">
          <Text className="font-Color">Application footer</Text>
        </Footer>
      }

      header={
        <Header className="header" height={70} p="md">
          <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Text className="font-Color">Application header</Text>
          </div>
        </Header>
      }
    >
      {/* <TableExample /> */}
      <CandidateForm />
    </AppShell>
  );
}

export default AppShellLayout;