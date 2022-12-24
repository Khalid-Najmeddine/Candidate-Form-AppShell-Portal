import { ActionIcon, Anchor, Group, Paper, Text } from '@mantine/core'
import React from 'react'
import { TbArrowBack } from 'react-icons/tb'

type CandidateFormTypes = {
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
  form: any,
  setDisplayValue: any,
}



export default function CandidateFormDisplay(props: CandidateFormTypes) {
  
  const { form, setDisplayValue } = props

  function toggleDisplayForm() {
    setDisplayValue((prevValue: boolean) => (prevValue = !prevValue))
  }

  return (
    <Paper p="sm" withBorder>
      <Group spacing={'xs'}>
      <ActionIcon color={'dark'} onClick={toggleDisplayForm}>
        <TbArrowBack />
      </ActionIcon>
      </Group>
      <Text size={20} mb={'xs'}>
        <strong>First Name:</strong> {form.values.firstName} <strong>Last Name:</strong> {form.values.lastName}
      </Text>
      <Text size={20} mb={'xs'}>
        <strong>Email Address:</strong> {form.values.email} <strong>Alternate Email Address:</strong> {form.values.emailAlt}
      </Text>
      <Text size={20} mb={'xs'}>
        <strong>Phone Number:</strong> {form.values.phone} <strong> Alternate Phone Number:</strong> {form.values.phoneAlt}
      </Text>
      <Text size={20} mb={'xs'}>
        <strong> Immigration Status Type:</strong> {form.values.immigrationStatusType} <strong>Work Location:</strong> {form.values.isWillingToWorkRemote ? "Remote" : "In Office"}
      </Text>
      <Group position="center">
        <Anchor href="https://trollface.dk/" target={'_blank'}>
          <Text size={20} mb={'xs'}>
            Candidate's LinkedInURL: {form.values.linkedinURL}
          </Text>
        </Anchor>
        <Anchor href="https://trollface.dk/" target={'_blank'}>
          <Text size={20} mb={'xs'}>
            Candidate's GitHubURL: {form.values.githubURL}
          </Text>
        </Anchor>
      </Group>
      <Text size={20} mb={'xs'}>
        <strong>Notes Section:</strong> {form.values.notes}
      </Text>
      <Text size={20} mb={'xs'}>
        <strong>Candidate Email Authorization:</strong> {form.values.isEmailAuthorized ? "Authorized" : "Not Authorized"}
      </Text>
      <Text size={20} mb={'xs'}>
        <strong>Terms and Conditions:</strong> {form.values.termsOfService ? "Accepted" : "Not Accepted"}
      </Text>
    </Paper>
  )
}