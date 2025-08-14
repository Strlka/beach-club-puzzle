import { Box, NativeSelect } from "@chakra-ui/react"


const LevelSelector = ({setter}: {setter: (value: string) => void}) => {

    
  return (
    <Box>
        <NativeSelect.Root size="lg" width="240px">
        <NativeSelect.Field
            placeholder="Select level"
            onChange={(e) => setter(e.currentTarget.value)}
        >
            <option value="1">Easy Peasy</option>
            <option value="2">Well… Okay</option>
            <option value="3">I didn’t sign up for This</option>
            <option value="4">Like Chuck Norris</option>
            <option value="5">Beach club King</option>
        </NativeSelect.Field>
        <NativeSelect.Indicator />
        </NativeSelect.Root>
    </Box>
  )
}

export default LevelSelector
