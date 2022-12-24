import React from "react";
import { AppShell, Navbar, useMantineTheme } from "@mantine/core";
import CandidateFormDesign from "../Candidate/CandidateFormDesign/CandidateFormDesign";
import CandidateFormDisplay from "../Candidate/CandidateFormDisplay/CandidateFormDisplay";
import NavbarDesign from "../Navbar/NavbarDesign";
import HeaderDesign from "../Header/HeaderDesign";
import { useForm } from "@mantine/form";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  emailAlt: string;
  phone: string;
  phoneAlt: string;
  immigrationStatusType: string;
  isWillingToWorkRemote: boolean;
  linkedinUrl: string;
  githubUrl: string;
  notes: string;
  isEmailAuthorized: boolean;
  termsOfService: boolean;
}

export default function AppShellDesign() {
  const theme = useMantineTheme();
  const [opened, setOpened] = React.useState(false);
  const [displayValue, setDisplayValue] = React.useState(false);

  const form = useForm<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      emailAlt: "",
      phone: "",
      phoneAlt: "",
      immigrationStatusType: "",
      isWillingToWorkRemote: false,
      linkedinUrl: "",
      githubUrl: "",
      notes: "",
      isEmailAuthorized: false,
      termsOfService: false,
    },

    validate: {
      firstName: (value) => value.length < 2 ? "First name must have at least 2 letters" : null,
      lastName: (value) => value.length < 2 ? "Last name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      emailAlt: (value) => /^\S+@\S+$/.test(value) ? null : "Alternate email is invalid",
      phone: (value) => (value.length > 0 ? undefined : "Phone is required"),
      phoneAlt: (value) => (value.length > 0 ? undefined : "Phone is required"),
      immigrationStatusType: (value) => value.length > 0 ? undefined : "Immigration status type is required",
      isEmailAuthorized: (value: boolean) => value === false ? undefined : null,
      isWillingToWorkRemote: (value: boolean) => value === false ? undefined : null,
    },
  });

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[2]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar
          className="navbar"
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <NavbarDesign opened={opened} />
        </Navbar>
      }
      header={<HeaderDesign opened={opened} setOpened={setOpened} />}
    >
      {displayValue ? (
        <CandidateFormDisplay form={form} setDisplayValue={setDisplayValue} firstName={""} lastName={""} email={""} emailAlt={""} phone={""} phoneAlt={""} immigrationStatusType={""} isWillingToWorkRemote={false} linkedinUrl={""} githubUrl={""} notes={""} isEmailAuthorized={false} termsOfService={false} />
      ) : (
        <CandidateFormDesign form={form} setDisplayValue={setDisplayValue} />
      )}
    </AppShell>
  );
}