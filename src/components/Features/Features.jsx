import { useSelector } from "react-redux";
import { Categorie, Container, DetailsContainer, Icon, IconAnother, IconsContainer, Line, Stat, StatsContainer, Text, Title } from "./Features.styled";
import sprite from '../../assets/sprite.svg';

const Features = () => {
    const activeCamper = useSelector(state => state.campers.activeCamper);

    const formatForm = (form) => {
        switch (form) {
          case "alcove":
            return "Alcove";
          case "fullyIntegrated":
            return "Fully Integrated";
          case "panelTruck":
            return "Panel truck";
          default:
            return form;
        }
      };

    const addSpaceAfterM = (value) => value.replace(/m/, " m");
    const addSpaceAfterL = (value) => value.replace(/l/, " l");

    return (
        <Container>
            <IconsContainer>
                {activeCamper.adults > 0 && (
                        <Categorie>
                            <Icon>
                                <use width={20} height={20} xlinkHref={`${sprite}#icon-Users`} />
                            </Icon>
                        {activeCamper.adults} adults
                    </Categorie>
                )}
                {activeCamper.transmission === "automatic" && (
                    <Categorie>
                        <IconAnother>
                            <use width={20} height={20} xlinkHref={`${sprite}#icon-automatic`} />
                        </IconAnother>
                        Automatic
                    </Categorie>
                )}
                {activeCamper.engine === "petrol" && (
                    <Categorie>
                        <Icon>
                            <use width={20} height={20} xlinkHref={`${sprite}#icon-Petrol`} />
                        </Icon>
                        Petrol
                    </Categorie>
                )}
                {activeCamper.details.kitchen > 0 && (
                    <Categorie>
                        <IconAnother>
                            <use width={20} height={20} xlinkHref={`${sprite}#icon-Kitchen`} />
                        </IconAnother>
                        Kitchen
                    </Categorie>
                )}
                {activeCamper.details.beds > 0 && (
                    <Categorie>
                        <IconAnother>
                            <use width={20} height={20} xlinkHref={`${sprite}#icon-beds`} />
                        </IconAnother>
                        {activeCamper.details.beds} beds
                    </Categorie>
                )}
                {activeCamper.details.airConditioner > 0 && (
                    <Categorie>
                        <IconAnother>
                            <use width={20} height={20} xlinkHref={`${sprite}#icon-air-cond`} />
                        </IconAnother>
                        AC
                    </Categorie>
                )}
                {activeCamper.details.TV > 0 && (
                    <Categorie>
                        <IconAnother>
                            <use width={20} height={20} xlinkHref={`${sprite}#icon-TV`} />
                        </IconAnother>
                        TV
                    </Categorie>
                )}
                {activeCamper.details.CD > 0 && (
                    <Categorie>
                        <IconAnother>
                            <use width={20} height={20} xlinkHref={`${sprite}#icon-CD`} />
                        </IconAnother>
                        CD
                    </Categorie>
                )}
                {activeCamper.details.radio > 0 && (
                    <Categorie>
                        <IconAnother>
                            <use width={20} height={20} xlinkHref={`${sprite}#icon-radio`} />
                        </IconAnother>
                        Radio
                    </Categorie>
                )}
                {activeCamper.details.hob > 0 && (
                    <Categorie>
                        <IconAnother>
                            <use width={20} height={20} xlinkHref={`${sprite}#icon-hob`} />
                        </IconAnother>
                        {activeCamper.details.hob} hob
                    </Categorie>
                )}
                {activeCamper.details.microwave > 0 && (
                    <Categorie>
                        <IconAnother>
                            <use width={20} height={20} xlinkHref={`${sprite}#icon-microwave`} />
                        </IconAnother>
                        Microwave
                    </Categorie>
                )}
                {activeCamper.details.shower > 0 && (
                    <Categorie>
                        <IconAnother>
                            <use width={20} height={20} xlinkHref={`${sprite}#icon-shower`} />
                        </IconAnother>
                        Shower
                    </Categorie>
                )}
            </IconsContainer>

            <DetailsContainer>
                <Title>Vehicle details</Title>
                <Line></Line>
                <StatsContainer>
                    <Stat>
                        <Text>Form</Text>
                        <Text>{formatForm(activeCamper.form)}</Text>
                    </Stat>
                    <Stat>
                        <Text>Length</Text>
                        <Text>{addSpaceAfterM(activeCamper.length)}</Text>
                    </Stat>
                    <Stat>
                        <Text>Width</Text>
                        <Text>{addSpaceAfterM(activeCamper.width)}</Text>
                    </Stat>
                    <Stat>
                        <Text>Height</Text>
                        <Text>{addSpaceAfterM(activeCamper.height)}</Text>
                    </Stat>
                    <Stat>
                        <Text>Tank</Text>
                        <Text>{addSpaceAfterL(activeCamper.tank)}</Text>
                    </Stat>
                    <Stat>
                        <Text>Consumption</Text>
                        <Text>{activeCamper.consumption}</Text>
                    </Stat>
                </StatsContainer>
            </DetailsContainer>
        </Container>
    )
}

export default Features;