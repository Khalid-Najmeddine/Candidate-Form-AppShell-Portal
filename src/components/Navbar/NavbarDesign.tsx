import {Group,Navbar,Text,SimpleGrid,ThemeIcon,useMantineColorScheme,ActionIcon,} from "@mantine/core";
import { BsSun, BsMoonStars } from "react-icons/bs";
import {GoCommentDiscussion,GoDatabase,GoGitPullRequest,GoIssueOpened,} from "react-icons/go";
import {TbBuildingSkyscraper,TbBuildingStore,TbDeviceLaptop,TbSocial,TbSubtask,} from "react-icons/tb";
import User from "../User/UserDesign";

export default function NavbarDesign(props: any) {
  const { opened } = props;
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Navbar.Section>
        <Group position="center">
          <Text size={"lg"} className="font-Color">
            Application Navbar
            <Group position="center">
              <ActionIcon
                variant="outline"
                color={dark ? "yellow" : "teal"}
                onClick={() => toggleColorScheme()}
                title="Toggle Color Scheme"
              >
                {dark ? <BsSun size={18} /> : <BsMoonStars size={18} />}
              </ActionIcon>
            </Group>
          </Text>
        </Group>

        <SimpleGrid mt={15} spacing={"sm"}>
          <Group spacing={"sm"}>
            <ThemeIcon variant={dark ? "light" : "outline"} color={"red.5"}>
              <TbBuildingStore />
            </ThemeIcon>
            <Text>Dev Shops</Text>
          </Group>

          <Group spacing={"sm"}>
            <ThemeIcon variant={dark ? "light" : "outline"} color={"green.5"}>
              <TbDeviceLaptop />
            </ThemeIcon>
            <Text>Candidates</Text>
          </Group>

          <Group spacing={"sm"}>
            <ThemeIcon variant={dark ? "light" : "outline"} color={"grape.5"}>
              <TbBuildingSkyscraper />
            </ThemeIcon>
            <Text> Clients</Text>
          </Group>

          <Group spacing={"sm"}>
            <ThemeIcon variant={dark ? "light" : "outline"} color={"blue.5"}>
              <TbSubtask />
            </ThemeIcon>
            <Text> Projects</Text>
          </Group>

          <Group spacing={"sm"}>
            <ThemeIcon variant={dark ? "light" : "outline"} color={"orange.5"}>
              <TbSocial />
            </ThemeIcon>
            <Text> Positions</Text>
          </Group>

          <Group spacing={"sm"}>
            <ThemeIcon variant={dark ? "light" : "outline"} color={"red.9"}>
              <GoGitPullRequest />
            </ThemeIcon>
            <Text> Pull Requests</Text>
          </Group>

          <Group spacing={"sm"}>
            <ThemeIcon variant={dark ? "light" : "outline"} color={"green.9"}>
              <GoIssueOpened />
            </ThemeIcon>
            <Text> Open Issues</Text>
          </Group>

          <Group spacing={"sm"}>
            <ThemeIcon variant={dark ? "light" : "outline"} color={"grape.9"}>
              <GoCommentDiscussion />
            </ThemeIcon>
            <Text> Discussions</Text>
          </Group>

          <Group spacing={"sm"}>
            <ThemeIcon variant={dark ? "light" : "outline"} color={"pink.9"}>
              <GoDatabase />
            </ThemeIcon>
            <Text> Databases</Text>
          </Group>
        </SimpleGrid>
      </Navbar.Section>
      <Navbar.Section grow mt="lg">
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  );
}
