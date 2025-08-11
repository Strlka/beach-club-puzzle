import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'


const config = defineConfig({
    theme: {
      tokens: {
        colors: {

        }
      },
      recipes: {
        button: {}
      }
    }
  })

export const system = createSystem(defaultConfig, config)