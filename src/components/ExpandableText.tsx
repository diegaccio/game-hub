import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (!children) return null;

  const maxLength = 300;

  if (children.length <= maxLength) return <Text>{children}</Text>;

  return (
    <Text>
      {!isExpanded ? children.substring(0, 200) + "..." : children}
      <Button
        marginX={2}
        size="xs"
        fontSize="bold"
        onClick={() => setExpanded(!isExpanded)}
        colorScheme="yellow"
      >
        {isExpanded ? "Show Less" : "Read More..."}
      </Button>
    </Text>
  );
};

export default ExpandableText;
