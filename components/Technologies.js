import { View, Text, StyleSheet, FlatList } from 'react-native';
import TechnologyStack from './TechnologyStack';
import skills from "../constants/skills";

const Technologies = () => (
    <View style={styles.container}>
        <Text style={styles.title} >Technologies</Text>
        
        {/* List of Techs */}
        <FlatList 
            data={skills}
            renderItem={({item}) => <TechnologyStack skill={item} key={item.id} />}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    </View>
)

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: '700',
        // textDecorationStyle: 'solid',
        // textDecorationLine: 'underline',
        // textDecorationColor: '#000'
        borderBottomWidth: 5,
        borderBottomColor: '#000'
    },
    container: {
        alignItems: 'center'
    }
})

export default Technologies;