import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, IconAnother, Item, Line, List, LocationContainer, SearchButton, Text, Title, TypeContainer, VehicleContainer, InputWrapper, Input, InputIcon, Icon } from "./Filter.styled";
import { filterCampers } from '../../redux/slices/campersSlice';
import sprite from '../../assets/sprite.svg';

const Filter = () => {
    const [selectedItems, setSelectedItems] = useState({});
    const [selectedType, setSelectedType] = useState('');
    const [location, setLocation] = useState('');
    const dispatch = useDispatch();

    const handleItemClick = (label) => {
        setSelectedItems((prevSelectedItems) => ({
            ...prevSelectedItems,
            [label]: !prevSelectedItems[label],
        }));
    };

    const handleTypeClick = (label) => {
        setSelectedType((prevSelectedType) => (prevSelectedType === label ? '' : label));
    };

    const handleSearchClick = () => {
        dispatch(filterCampers({ location, selectedItems, selectedType }));
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
                    <Input
                        type="text"
                        placeholder="Enter location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
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
                            isSelected={selectedItems[item.label]}
                            onClick={() => handleItemClick(item.label)}
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
                    {types.map((type, index) => (
                        <Item
                            key={index}
                            isSelected={selectedType === type.label}
                            onClick={() => handleTypeClick(type.label)}
                        >
                            <Icon>
                                <use width={32} height={32} xlinkHref={`${sprite}${type.icon}`} />
                            </Icon>
                            {type.label}
                        </Item>
                    ))}
                </List>
            </TypeContainer>

            <SearchButton onClick={handleSearchClick}>Search</SearchButton>
        </Container>
    );
};

export default Filter;
