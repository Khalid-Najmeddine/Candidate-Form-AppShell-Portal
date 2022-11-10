import React from 'react'
import { TbChevronRight, TbChevronLeft } from 'react-icons/tb'
import { UnstyledButton, Group, Avatar, Text, Box, useMantineTheme } from '@mantine/core'

export default function User() {
  const theme = useMantineTheme()
  // note: unable to display profile image in src

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
      }}>
      <UnstyledButton
        sx={{
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
          },
        }}>
        <Group sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
          <Avatar src="/components/images/Profile-Picture.jpeg" radius="xl" /> 
          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              Khalid Najmedidne
            </Text>
            <Text color="dimmed" size="xs">
              khalid@gta-canada.com
            </Text>
          </Box>
          {theme.dir === 'ltr' ? <TbChevronRight size={18} /> : <TbChevronLeft size={18} />}
        </Group>
      </UnstyledButton>
    </Box>
  )
}
