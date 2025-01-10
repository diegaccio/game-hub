import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

interface SortSelectorProps {
  onSelectSort: (sort: string) => void;
  selectedSort: string;
}

// Available fields: name, released, added, created, updated, rating, metacritic. You can reverse the sort order adding a hyphen, for example: -released.
const SortSelector = ({ onSelectSort, selectedSort }: SortSelectorProps) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (sortOrder) => sortOrder.value === selectedSort
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort) => (
          <MenuItem
            onClick={() => onSelectSort(sort.value)}
            key={sort.value}
            value={sort.value}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
