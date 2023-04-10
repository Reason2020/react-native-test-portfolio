import { View, Text, Button, Image } from "react-native"

const TechnologyDetail = ({ skill, handleBackButtonPress }) => (
    <View>
        <Image source={skill.iconUrl} style={{width: 200, height: 200, resizeMode: 'stretch', aspectRatio: 1}} />
        <Text>{skill.detail}</Text>
        <Button title="Back" onPress={handleBackButtonPress} /> 
    </View>
)

export default TechnologyDetail;