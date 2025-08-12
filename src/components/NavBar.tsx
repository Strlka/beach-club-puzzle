import { Button, Heading, HStack, Image } from '@chakra-ui/react'


const NavBar = () => {
  return (
    <HStack padding={2} justifyContent='space-between'>
      <HStack gap={5}>
        <Heading 
          size={{base: '2xl', md: '4xl'}} 
          color='white'
        >
          Beach club puzzle
        </Heading>
        <Image 
          src='/images/puzzle_piece_grad3_grad_bright4_tight512.svg' 
          boxSize={{base: '32px', md: '48px'}}></Image>
      </HStack>
      <Button 
        size={{base: 'xs', md: 'xl'}} 
        bgColor='white' 
        color='black' 
        fontWeight='bold' 
        onClick={() => window.location.reload()}
      >
          New puzzle
      </Button>
    </HStack>
  )
}

export default NavBar
