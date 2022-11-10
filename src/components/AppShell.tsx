import React from "react";
import { AppShell, Navbar, Header, Text, MediaQuery, Burger, useMantineTheme, SimpleGrid, ThemeIcon, Group, useMantineColorScheme, Image } from '@mantine/core';
import { TbAtom, TbBuildingSkyscraper, TbBuildingStore, TbDeviceLaptop, TbSocial, TbSubtask } from 'react-icons/tb';
import { GoCommentDiscussion, GoGitPullRequest, GoIssueOpened, GoDatabase } from "react-icons/go"
import LightAndDarkModeButton from './LightDarkButton';
import User from './User';
import CandidateForm from './CandidateForm';
// import TableExample from './TableExample';

function AppShellLayout() {
  const theme = useMantineTheme();
  const {colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [opened, setOpened] = React.useState(false);
  const dark = colorScheme === "dark";
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[0],
        },
      }}

      navbarOffsetBreakpoint="sm"

      navbar={
        <Navbar className="navbar" p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <LightAndDarkModeButton />
          <Navbar.Section>
            <Text size={"lg"} className="font-Color">Application Navbar</Text>
            <SimpleGrid mt={15} spacing={"sm"}>
              <Group spacing={"sm"}>
                <ThemeIcon variant={dark ? "light": "outline"} color={"red.5"}>
                  <TbBuildingStore />
                </ThemeIcon>
                <Text> Dev Shops</Text>
              </Group>
              <Group spacing={"sm"}>
                <ThemeIcon variant={dark ? "light" : "outline"} color={ "green.5"}>
                  <TbDeviceLaptop />
                </ThemeIcon>
                <Text> Candidates</Text>
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
                <ThemeIcon variant={dark ? "light": "outline"} color={"red.9"}>
                  <GoGitPullRequest />
                </ThemeIcon>
                <Text> Pull Requests</Text>
              </Group>
              <Group spacing={"sm"}>
                <ThemeIcon variant={dark ? "light" : "outline"} color={ "green.9"}>
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
          <Navbar.Section grow mt="lg" >
         
          </Navbar.Section>
          <Navbar.Section>
            <User />
          </Navbar.Section>
        </Navbar>
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
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAq1BMVEX///8zMzM0vssXFxcAAAAwMDAgICAZGRkbGxsSEhIlJSUsLCzk5OQjIyMnJyfh4eHW1tbFxcWqqqq+vr6ZmZn4+PixsbHZ2dkODg7MzMw+Pj5YWFifn5/w8PCRkZG4uLg5OTlJSUmJiYlqamp4eHiCgoJlZWVPT0+Z2uJycnJnZ2fQ7vFLS0tMxNBUVFS35emn3+Xg9PZyztdiytTZ8fPt+fqM1t7E6e1tzdY2Tjt4AAAL1klEQVR4nO2cC5OiOBDH5QgQQFBUlKdvdGdu1t29u7277//JLuGh0oSnTG3VVf+qdh0RQ/6kk3S6g5MJgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgvxa3Km/i7bHY5Ict9HOn7q/ukKjMl2fD5ZMVcPOMFQqm7et8z9RudnudctUJIhiq/L7Dp7tHrfbFSACLCAzwWW//f3lmW+fpm8dyHZVXYGpasdpWSGxKxg1WDlkKbjwb2U+S+HCVOvlZdjaOX5WKLecL0AVKPwdKPwcfc6+VV+qUY7GV/hHWeAfn6HPPetd9KVVDDZjKwRN+M8nCJzt7e51VPTFuAq/fb6ROnLXBszQzqMq/LMs8O/xBa69vtW0wkyhPobCn6AJfx9d4K63QDbgfIyn8PtnG6kzoJpM4mU0hV/FRiryDAYx1er7oNLQPcliJIU/QBP+lR8/z0dSGAhVKKZFdXsv2bqmCt0cj0+Loyj8W2ykLj2OIzAxRPqoed5tUlfbnS2PgWYAkYqc+qgxoZRqz6gVQfQZdgaB3i0Q+CU/vKTGKAJ9wXivaDenfNY0UuizRoX62QcbzuwJH0hUl3PGpoCfEpfLhh7bj/z4u0lBLYaxr1qgEfiCE5eHh0bTrh0FYnDH5LjuzALgsX0tCqKS+TZU1ROLilVJcp3576TcoO2gvtpTqHBae2oOaMLv+eG1JUm09fa04lYHEb2yCHywTV0fI2xYC/dWCD22n/nxG7uUtWj8ahciCwr0Gm1/dlAltdF2eisEHtuf+eGYeyHKtY8YEdUmlBtaMCUizWN4X4XQYyvWvlHaI7RXZ/017IVG+xTUUuO+CqHHVhjpIb339rabkFrgZK8ELxZYVai1KAQe27/54VnmSij2a7WZa6AJ9df9pJ4K/wJNWKx9t/lylYomru4cwarXvLxUXEpPhTUe232aNs8v1Qb61doIrm5PhUBgEaB5WBd9JUq7AZVRDi8UVtBP4T81RvqwLnX9QmUWwOc2Xp9f+yoEHtvdSB/TtBK+UJmT2cugutFPIRBYrH19Ok6tgNOt7IcX9aCXQuixFQGa5One26vBdYnB6nUUT76qsMkrAR7b3UifHRFFGlyXOS3XxYgEJ22yxMo6Z8dYZjic1xRCj60w0mXJ1Ro+JS4ra1XBSQvvnlHhqGXIawq/AIXF2rdcMzMZqjACQykVzYZwvAVfeU0h8NiKtS/sP9rQKXFld6gLvA1jKoQe2/f7J9fSGKi2rXfq2AKFwlVA1JjOeE0h9Nh+3D8pV22wMwm9UmFEBTb0mAqBwK+PT/zyINgeCRFTaUORQnjSiAqhx/YwUhiGFY7yHaj0Q9GdalaovqIQemw/nz4LS+7W0GUrHCbpRnASNOX+CkWlclwg8M/nD8EAN3DRU5kPRTGoz1MIPbbS5oRNeW1uD5sSKz6NaGmR9FYI4ga1CsFkCFJqUtln1gYphNFpoe/QW+Gso0KYcAKbE5Lyukfob7UD1xai/nzWS27aeAqhxwY2J4AuNHBK7LI+nC9LAIWCSFhXhUAgzPu64Gbqg+L7cDDtEEMHzd5FoXi2gAmnu5HOZpsNT1aF5SsNiz9U4jQfn6BQOAdVPbZi7bsjWpZohJHcYTGk/rG20RTWGemtLq0u143JjfSPl4IguTlUIfTYirXvtHZXiD0o5d0/5j2Wwn+BwmJzQoOjbw1RWEkAtzqAIymE4YtKqFvAsJT3AqYP23JP5RooykCFMOFUbE7woVE9383TEIVuJUHakj+UxlEIPbZi7XsGM3SJYVNi1bH2GiNb5dOHKoQeW7H2rd7wZ4alvKFvym9VgwsInHVRDLmLQuixFWvfXXXbxPPV2qdrEYIVrlybd42D9ih5RaFgeIbjTLH2DZuMlFVsUMrbpdWS1IN40ljDrP9AhdBju29OaNmsOjDlvRZIVPSwMjTHkVLZBj5QIfTYirXvgppl4A0VTE5dEJqGSc1keX9QJvajK4U72yTx9NlBYZ2RJpf39xPnLeWcwG0GA3eBxeLuzZ8gMQ/h5RJ+SBoVP4QxTCH02P6tFpIDw9FDc0dO/Q5hRWGmUr/HVBQ+aVcIPbb6jfkw5iN5A+P7K0FX7IJiCi7YqrDWYxNwADfXGpryTgZJNPeiAGurQuixNT09As1UuQ1UOEiidRWaTKtC6LE1PT1SMVN9cMp723c3s6LXhDDbFEKPrXlj/gcw0xdS3jsYNmjGtOp8uzaF0GNrfnqkYqb7wQrTfZVdUeRLrZ/fphA2YfPTI1NoWy/tAovkbo8+Keq+YeZtUQg9tranR+Bo+tousDjpoJH5bo2rmBaFMOH0paaYgkoOWn/tWd3p0VCb/HvF1g4tU1KLQtiEP2qKuRcHzXRwyrvA3V088RMkkmloxrE13tisEHpsX+uKuQN9U/OVXWA5rnO8Uk01bO6wpZi2ocrGJeoSspzJSgmtNDTALULf64q5E1mPstIFBxljbxpTuVlG27fwI2Acbqdj5HRdfc7M4InDQXpuw5+/fX3it3Let768w+Hj43oLw/DyztYdw9JQCIIgCIIgCPJriRdJsuAxiQ15fmBTI5WV5pGkS9/it5AecQxdsKG9zGLRvOrakoE7SDuw1jRd1zRW9433vPIyq+HlrZcufg3iWZbukUedbU9Usnu+R+PmhDbn/lZ6U9xge35hwbT06GnpvPFbuNHbFOqpwt1uuTei3frRhmKFMbnvtklsszn316zwSgbtpUlxDTUNQPLL5wrdLONkesVfk8k0E5MrZOyz7TvFCZlCd1podtNbHuv3h11se1GkXeNY9JorjO9tlZZVnBOWL/f8VyuOtr//nSp03zSicusy7RX1Uvm+4nlJqM8rCo+UGJEa5ArZO/3ELiypa+qZ88lCvv8U0VI/u1qa+1vuPY//nIEfeJ7EVrL+nhDJyRXOD4SYO/5jOas3Nib4e4+c33V/ShTJujGjp4TyQJtJHZV0TrNFlKlxfY6bKryq5smmJ1aOJH+EKrvw1LODi25qFYUrTb0cZCVXmMjB9kIPfLeGHCpmMPETWzpmFbnoDvvHhDmEhiH5mMw99XrxJDa4qcnRYj2aK5zq9Hw0Wd3XamCFK9ez9++6Sf04CexzNAlV+2SrF1YzRbk2/OKBSOGMEELJZsYUOvrencQmmbE23PJHvc3JVmV65yqtKDTokvewTGFMFNZ+F8+fSOywS/XpxNXznRqxZ07jiL7x+8ebip2nbtPXE13wH3A6pQoTyixmLt/YVdWYJ8TYDd9YPAIc6jN2U9gFXMmbTxS7T8jUl20+X6wXhuxyhQudd5c3eTkx02ccWN1PMm+IQIYKWb0nfHtjpnBOJZ14KllP0hzfgdUpLhRGhil7qqK7E5oHO+38wYdAMQiRNSlVGJo2e0NtNrzzROg53dkTykzhTd9M1jrfy5TI64nSb1v73ko3QS3UMO2Ha/mdvbsyizL5vvYp9SZnyqcqu2Klrsd/tGKX98OZLvn+3PdjgcKDfTmdToHK1OeVO+Tp6psVzdm3Mit9U7f8jc/E8Nt8pPz/NIrPFS7lMBXsTJR+O4d8oobr3RtlfYErdHU1cc7MNpm1m+tdYL2xYcKKljezaqUX47BcqEU/DKxk4wSs4hWFGz2dNXb0xrrufrfbL5ipmOvlYcVeA2eTnLKRZuntnc2W6cgU+p61ckK7UOiqac0st69CNlLqnqfzLrVhQ8DEp7qn859m0eUr8eSA1fbs6SQI2C3IfRreony6j03qkQuX4TGfZmp6rDuz5la5M7RnPTkm2RM1Z5L2G5ewYyfP8/jbhL9e+GfsW1c382mO/A0bQxYknVkSTybSgTCFBz4fzlVWM5Vdl5K+u7+caLXj3SN2eOw2XmfvHGeyW2UBdH+1cOdOPJk5xXTlO/wi7nrlTPiX0gct3d1qMU0/S/9jw0L+/KWffy19nUdRaqibaJVGiufZa1Y0O8i/Ms1js8V1H5dbZzX7n/zKKIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCNLKf+i75K1KUmyOAAAAAElFTkSuQmCC"
              alt="GTA Logo"
              height={50}
              width={120}
              fit="contain"
            />
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