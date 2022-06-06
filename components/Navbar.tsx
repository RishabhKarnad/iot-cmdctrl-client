import NextLink from 'next/link'
import { Box, HStack, Link } from '@chakra-ui/react'

export const Navbar = () => {
  return (
    <HStack flex={1} padding={5} backgroundColor="blue.800">
      <HStack flex={1} spacing={4}>
        <NextLink href="/">
          <Link color="white">Dashboard</Link>
        </NextLink>
        <NextLink href="/devices">
          <Link color="white">Devices</Link>
        </NextLink>
        <NextLink href="/incidents">
          <Link color="white">Incidents</Link>
        </NextLink>
      </HStack>
      <Box>
        <NextLink href="/settings">
          <Link color="white">Settings</Link>
        </NextLink>
      </Box>
    </HStack>
  )
}
