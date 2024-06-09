import { Container, Icon, IconAnother, Input, InputIcon, InputWrapper, Item, Line, List, LocationContainer, SearchButton, Text, Title, TypeContainer, VehicleContainer } from "./Filter.styled";

import sprite from '../../assets/sprite.svg';
import { useState } from "react";

const Filter = () => {
    const [selectedItems, setSelectedItems] = useState({});
    const [selectedTypes, setSelectedTypes] = useState({});

    const handleItemClick = (index) => {
        setSelectedItems((prevSelectedItems) => ({
            ...prevSelectedItems,
            [index]: !prevSelectedItems[index],
        }));
    };

    const handleTypeClick = (index) => {
        setSelectedTypes((prevSelectedItems) => ({
            ...prevSelectedItems,
            [index]: !prevSelectedItems[index],
        }));
    };

    const items = [
        { icon: '#icon-air-cond', label: 'AC' },
        { icon: '#icon-automatic', label: 'Automatic' },
        { icon: '#icon-Kitchen', label: 'Kitchen' },
        { icon: '#icon-TV', label: 'TV' },
        { icon: '#icon-shower', label: 'Shower/WC' },
    ];

    const types = [
        { icon: '#icon-van', label: 'Van' },
        { icon: '#icon-fully', label: 'Fully Integrated' },
        { icon: '#icon-camper', label: 'Alcove' },
    ];

    return (
        <Container>
            <LocationContainer>
                <Text>Location</Text>
                <InputWrapper>
                    <Input type="text" placeholder="Ukraine" />
                    <InputIcon>
                        <use xlinkHref={`${sprite}#icon-map-pin`} />
                    </InputIcon>
                </InputWrapper>
            </LocationContainer>

            <VehicleContainer>
                <Text>Filters</Text>
                <Title>Vehicle equipment</Title>
                <Line />
                <List>
                    {items.map((item, index) => (
                        <Item
                            key={index}
                            isSelected={selectedItems[index]}
                            onClick={() => handleItemClick(index)}
                        >
                            <IconAnother>
                                <use width={32} height={32} xlinkHref={`${sprite}${item.icon}`} />
                            </IconAnother>
                            {item.label}
                        </Item>
                    ))}
                </List>
            </VehicleContainer>

            <TypeContainer>
                <Title>Vehicle type</Title>
                <Line />
                <List>
                    {types.map((item, index) => (
                        <Item
                            key={index}
                            isSelected={selectedTypes[index]}
                            onClick={() => handleTypeClick(index)}
                        >
                            <Icon>
                                <use width={32} height={32} xlinkHref={`${sprite}${item.icon}`} />
                            </Icon>
                            {item.label}
                        </Item>
                    ))}
                </List>
            </TypeContainer>

            <SearchButton>Search</SearchButton>
        </Container>
    )
}

export default Filter;