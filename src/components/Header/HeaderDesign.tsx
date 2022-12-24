import {Burger, Header, MediaQuery, Text, useMantineColorScheme, Image, Group} from "@mantine/core";

export default function HeaderDesign(props: any) {
  const {opened, setOpened} = props

  return (
    <Header height={100} p="md">
      <Group className="Application-Header">
        <Text size={17} weight={500} >Application Header</Text>
      </Group>
      <Group className="header-Headings" >
        <Text size={15} weight={500} >Home Page</Text>
        <Text size={15} weight={500} >Candidates List</Text>
        <Text size={15} weight={500} >Search Bar</Text>
        <Text size={15} weight={500} >Create New Candidate</Text>
      </Group>
      <div>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger opened={opened} onClick={() => setOpened((o:any) => !o)} size={18}  mr="xl" />
        </MediaQuery>
      </div>
    </Header>
  )
}