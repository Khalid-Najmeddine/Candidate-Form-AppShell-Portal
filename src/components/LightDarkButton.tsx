import { ActionIcon, useMantineColorScheme } from "@mantine/core"
import { BsMoonStars, BsSun } from "react-icons/bs";

function LightAndDarkModeButton() {
  const {colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  
  return (
    <div>
       <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <BsSun size={18} /> : <BsMoonStars size={18} />}
      </ActionIcon>
    </div>
  )
}

export default LightAndDarkModeButton