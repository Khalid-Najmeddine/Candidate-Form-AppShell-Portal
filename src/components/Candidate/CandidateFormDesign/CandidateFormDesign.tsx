import { Grid,TextInput,MantineProvider,Button,ColorScheme,ColorSchemeProvider,Group,Checkbox,Textarea,Avatar, Text,Select,Card,Code} from "@mantine/core";
import { forwardRef } from "react";
import { useLocalStorage, useHotkeys } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";

enum EnumCandidateImmigrationStatusType {
  CanadianCitizen,
  ExpressEntryPool,
  PermanentResident,
  RequiringVisaSponsorship,
  StudentVisa,
  TemporaryForeignWorkPermit,
  Unknown,
  Withheld,
}

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image: string;
  value: string;
  label: string;
  description: string;
}

const selectData = [
  {
    image: "https://dfimmigration.ca/wp-content/uploads/2019/12/CITIZENSHIP-CERTIFICATE-v4.jpg",
    value: "CanadianCitizen",
    label: "Canadian Citizen",
    description: "A proud and patriotic Canadian Citizen",
  },
  {
    image: "https://www.africanada.com/wp-content/uploads/2020/09/image-26.png",
    value: "ExpressEntryPool",
    label: "Express Entry Pool",
    description: "A candidate who has applied for permanent residence through the Express Entry system",
  },
  {
    image: "https://www.myvisasource.com/hubfs/Compressed%20Blog%20Images/200kb/How%20Permanent%20Resident%20Card%20Applications%20Work%20In%20Canada%20-%20200.webp",
    value: "PermanentResident",
    label: "Permanent Resident",
    description: "A candidate who has been granted permanent residence in Canada",
  },
  {
    image:"https://n2k3y9s6.stackpathcdn.com/wp-content/uploads/2022/09/high-commission-of-united-states-scholarships-2023-fully-funded-30-min.png",
    value: "RequiringVisaSponsorship",
    label: "Requiring Visa Sponsorship",
    description: "A candidate who requires a visa to work in Canada",
  },
  {
    image: "https://cdn.aussizzgroup.com/sitecontent/images/BL_study-guide-to-canada-for-overseas-students.jpg",
    value: "StudentVisa",
    label: "Student Visa",
    description: "A candidate who is studying in Canada",
  },
  {
    image: "https://i.ytimg.com/vi/9DJuJQ9w7Oo/maxresdefault.jpg",
    value: "TemporaryForeignWorkPermit",
    label: "Temporary Foreign Work Permit",
    description: "A candidate who is working in Canada",
  },
  {
    image: "https://flxt.tmsimg.com/assets/p8214163_p_v8_ag.jpg",
    value: "Unknown",
    label: "Unknown",
    description: "A candidate whose immigration status is unknown",
  },
  {
    image: "https://www.bellissimolawgroup.com/wp-content/uploads/2021/10/MDB-Blog-refusal.jpg",
    value: "Withheld",
    label: "Withheld",
    description: "A candidate whose immigration status is withheld",
  },
];

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />
        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs">{description}</Text>
        </div>
      </Group>
    </div>
  )
);

export default function CandidateFormDesign(props: any) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  const {form, setDisplayValue} = props

  function display() {
    setDisplayValue()
  }
  console.table(form.values)
  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            components: {
              InputWrapper: {
                defaultProps: {
                  inputWrapperOrder: ["label", "error", "input", "description"],
                },
              },
              Input: {
                defaultProps: {
                  variant: "filled",
                },
              },
            },
          }}
        >
          <div className="App">
            {/* <form onSubmit={display} > */}
            <form onSubmit={form.onSubmit((values: any) => setDisplayValue(values))}>
              <h1 className="Candidate-Form-Title">Candidate Form</h1>
              <Grid>
                <Grid.Col lg={6}>
                  <TextInput
                    type="text"
                    label="First Name"
                    placeholder="Enter your first name"
                    required
                    {...form.getInputProps("firstName")}
                  />
                </Grid.Col>
                <Grid.Col lg={6}>
                  <TextInput
                    type="text"
                    label="Last Name"
                    placeholder="Enter your last name"
                    required
                    {...form.getInputProps("lastName")}
                  />
                </Grid.Col>
                <Grid.Col lg={6}>
                  <TextInput
                    type="text"
                    label="Email"
                    placeholder="Email Address"
                    required
                    {...form.getInputProps("email")}
                  />
                </Grid.Col>
                <Grid.Col lg={6}>
                  <TextInput
                    type="text"
                    label="Alternate Email Address"
                    placeholder="Alternate Email Address"
                    required
                    {...form.getInputProps("emailAlt")}
                  />
                </Grid.Col>
                <Grid.Col lg={6}>
                  <TextInput
                    type="text"
                    label="Phone Number"
                    placeholder="Enter your Phone Number"
                    required
                    {...form.getInputProps("phone")}
                  />
                </Grid.Col>
                <Grid.Col lg={6}>
                  <TextInput
                    type="text"
                    label="Alternate Phone Number"
                    placeholder="Enter your Alternate Phone Number"
                    {...form.getInputProps("phoneAlt")}
                  />
                </Grid.Col>
                <Grid.Col lg={6}>
                  <Select
                    type="text"
                    label="Immigration Status Type"
                    placeholder="Select your Immigration Status Type"
                    itemComponent={SelectItem}
                    data={selectData}
                    searchable
                    maxDropdownHeight={900}
                    nothingFound="Nobidy here"
                    required
                    {...form.getInputProps("immigrationStatusType")}
                    filter={(value, item) =>
                      item.label
                        ?.toLowerCase()
                        .includes(value.toLowerCase().trim()) ||
                      item.description
                        .toLowerCase()
                        .includes(value.toLowerCase().trim())
                    }
                  />
                </Grid.Col>
                <Grid.Col lg={6}>
                  <Checkbox
                    className="font-Bold"
                    mt="md"
                    label="Is Candidate Willing to Work Remotely?"
                    placeholder="Is Candidate Willing to Work Remotely?"
                    {...form.getInputProps("isWillingToWorkRemote", {
                      type: "checkbox",
                    })}
                  />
                </Grid.Col>
                <Grid.Col lg={6}>
                  <TextInput
                    type="text"
                    label="Insert LinkedIn URL"
                    placeholder="Insert LinkedIn URL"
                    {...form.getInputProps("linkedinUrl")}
                  />
                </Grid.Col>
                <Grid.Col lg={6}>
                  <TextInput
                    type="text"
                    label="Insert GitHub URL"
                    placeholder="Insert GitHub URL"
                    {...form.getInputProps("githubUrl")}
                  />
                </Grid.Col>
                <Grid.Col lg={6}></Grid.Col>
                <Grid.Col>
                  <Textarea
                    autosize
                    minRows={2}
                    maxRows={4}
                    label="Notes"
                    placeholder="Enter your notes here"
                    {...form.getInputProps("notes")}
                  />
                  <Checkbox
                    className="font-Bold"
                    mt="md"
                    label="Is Candidate Email Authorized?"
                    placeholder="Is Candidate Email Authorized?"
                    {...form.getInputProps("isEmailAuthorized", {
                      type: "checkbox",
                    })}
                    required
                  />
                  <Checkbox
                    className="font-Bold"
                    mt="md"
                    label="I agree to the terms and conditions for Global Talent Accelerator. But in reality, I am selling my privacy to the evil overlords."
                    {...form.getInputProps("termsOfService", {
                      type: "checkbox",
                    })}
                  />
                </Grid.Col>
              </Grid>
              <Group className="buttons" spacing={"xs"} sx={{ marginTop: 15 }}>
                <Button type="submit" mt="sm">
                  Submit Candidate Form
                </Button>
                <Button type="submit" mt="sm" color="green">
                  Update Candidate Form
                </Button>
                <Button type="submit" mt="sm" color="red">
                  Cancel Candidate Form
                </Button>
              </Group>
            </form>
          </div>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}