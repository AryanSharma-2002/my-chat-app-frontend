import { CloseIcon } from "@chakra-ui/icons";
import { Badge } from '@chakra-ui/react'

const UserBadgeItem = ({ user, handleFunction}) => {
  return (
    <Badge
      variant="solid"
      fontSize="12"
      colorScheme="purple"
      cursor="pointer"
      onClick={handleFunction}
      px="2"
      py="1"
      margin="1"
    >
      {user.name}
      <CloseIcon pl="1" />
    </Badge>
  );
};

export default UserBadgeItem;