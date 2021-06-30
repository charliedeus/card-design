import { Flex, Box, Avatar, Heading } from '@chakra-ui/react';
import { FaInstagram, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <Flex
      w="100%"
      h="100vh"
      justify="center"
      align="center"
      bg="radial-gradient(#777, #222)"
    >
      <Box
        position="relative"
        w="340px"
        h="450px"
        bg="whiteAlpha.900"
        borderRadius="10px"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="-190px"
          left="50%"
          transform="translateX(-50%)"
          w="500px"
          h="500px"
          bg="#333"
          clipPath="circle()"
          _before={{
            content: '""',
            position: 'absolute',
            top: '-8px',
            left: '-16px',
            width: '100%',
            height: '100%',
            background: 'transparent',
            boxShadow: '0 0 0 20px rgba(255,0,0,0.5)',
            borderRadius: '50%',
            zIndex: '1000',
            pointerEvents: 'none',
          }}
        >
          <Avatar
            top="50px"
            left="0"
            w="100%"
            h="100%"
            bg="#ff0"
            name="Jorge Miranda"
            src="/jorge.png"
            transition="0.5s"
            _hover={{
              transform: 'scale(1.5)',
            }}
          />
        </Box>
        <Box
          position="absolute"
          left="0"
          bottom="0"
          w="100%"
          h="140px"
          p="20px 30px"
        >
          <FaInstagram size={16} color="#e1306c" />
          <Heading as="h4" size="md" mt="7px" mb="7px">
            Jorge Miranda
          </Heading>
          <Flex justify="space-between" align="center">
            <Heading as="h5" size="sm" color="#e91e63" fontWeight={400}>
              Python Developer
            </Heading>
            <FaArrowRight size={16} color="#e91e63" />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
