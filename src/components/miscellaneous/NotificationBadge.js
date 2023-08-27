import React from 'react';
import { Badge, Box } from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons'

const NotificationBadge = ({ count }) => {
    return (
      <Box position="relative" display="inline-block">
        <Badge
          colorScheme="red" // Customize the color scheme
          fontSize="0.8rem" // Customize the font size
          position="absolute"
          top="-8px"
          right="-8px"
          borderRadius="50%" // To create a circular badge
          px="2" // Add padding to the badge
          mr={2}
        >
          {count!==0?count:''}
        </Badge>
        {/* Your notification icon or content */}
        <BellIcon w={6} h={6} mr={2}/>
      </Box>
    );
  };
  
  export default NotificationBadge;
  