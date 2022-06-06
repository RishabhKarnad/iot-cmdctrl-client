import { Box, HStack, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <HStack flex={1} h="100vh" spacing={2}>
        <VStack h="100%" flex={1} spacing={2}>
          <Box flex={1} m={1} backgroundColor="gray.200" w="full">
            Section 1
          </Box>
          <Box flex={1} m={1} backgroundColor="gray.200" w="full">
            Section 2
          </Box>
        </VStack>
        <Box flex={1}>Map</Box>
      </HStack>
    </>
  )
}

export default Home
