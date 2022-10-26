import { Grid, TextInput, MantineProvider, Button, ColorScheme, ColorSchemeProvider } from "@mantine/core";
import { useLocalStorage, useHotkeys } from "@mantine/hooks";

function CandidateForm() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
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
      <Grid>
        <Grid.Col md={6} lg={6} >
        <TextInput 
          label="Candidate Form Creation Date"
          placeholder="Candidate Form Creation Date"
          description="When was this candidate form created?"
          required
          />
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
        <TextInput 
          label="Email Address"
          placeholder="Email Address"
          description="What is the candidate's email address?"
          required
        />
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
        <TextInput 
          label="Alternate Email Address"
          placeholder="Alternate Email Address"
          description="What is the candidate's alternate email address?"
          required
          />
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
        <TextInput 
          label="First Name"
          placeholder="Enter your first name"
          description="Enter your first name"
          required
          />
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
        <TextInput 
          label="Last Name"
          placeholder="Enter your last name"
          description="Enter your last name"
          required
          />
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
        <TextInput 
          label="Insert GitHub URL"
          placeholder="Insert GitHub URL"
          description="Insert GitHub URL"
          required
          />
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
        <TextInput 
          label="Insert ID Number"
          placeholder="Enter your ID Number"
          description="Enter your ID Number"
          required
          />
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
        <TextInput 
          label="Immigration Status Type"
          placeholder="Enter your Immigration Status Type"
          description="Enter your Immigration Status Type"
          required
          />
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
        <TextInput 
          label="Is Candidate Email Authorized?"
          placeholder="Is Candidate Email Authorized?"
          description="Is Candidate Email Authorized?"
          required
          />
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
        <TextInput 
          label="Is Candidate GTA Email/ID Authorized?"
          placeholder="Is Candidate GTA Email/ID Authorized?"
          description="Is Candidate GTA Email/ID Authorized?"
          required
          />
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
        <TextInput 
          label="Is Candidate Willing to Work Remotely?"
          placeholder=" Is Candidate Willing to Work Remotely?" 
          description=" Is Candidate Willing to Work Remotely?" 
          required
          />
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
        <TextInput 
          label="Insert LinkedIn URL"
          placeholder="Insert LinkedIn URL"
          description="Insert LinkedIn URL"
          required
          />
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
        <TextInput 
          label="Phone Number"
          placeholder="Enter your Phone Number"
          description="Enter your Phone Number"
          required
          />
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
        <TextInput 
          label="Alternate Phone Number"
          placeholder="Enter your Alternate Phone Number"
          description="Enter your Alternate Phone Number"
          required
          />
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
        <TextInput 
          label="Enumerate Candidate Source?"
          placeholder="Enumerate Candidate Source?"
          description="Enumerate Candidate Source?"
          required
          />
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
        <TextInput 
          label="When was this candidate form updated?"
          placeholder="When was this candidate form updated?"
          description="When was this candidate form updated?"
          required
          />
        </Grid.Col>
      </Grid>
      <Button type="submit" mt="sm">
        Submit Candidate Form
      </Button>
      <Button type="submit" mt="sm" color="green">
        Update Candidate Form
      </Button>
      <Button type="submit" mt="sm" color="red">
        Delete Candidate Form
      </Button>
    </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default CandidateForm