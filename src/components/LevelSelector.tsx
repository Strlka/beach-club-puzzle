import { Box, NativeSelect } from "@chakra-ui/react"


const LevelSelector = ({setter}: {setter: (value: string) => void}) => {

    
  return (
    <Box>
        <NativeSelect.Root size="lg" width="240px">
        <NativeSelect.Field
            placeholder="Select level"
            onChange={(e) => setter(e.currentTarget.value)}
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </NativeSelect.Field>
        <NativeSelect.Indicator />
        </NativeSelect.Root>
    </Box>
  )
}

export default LevelSelector
