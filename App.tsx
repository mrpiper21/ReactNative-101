import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ padding: 10, flex: 1, backgroundColor: '#008170'}}>
      <View style={{ marginTop: 18, justifyContent: 'center', alignItems: 'center', padding: 15}}>
        <Text style={{ color: 'white', fontSize: 40}}>About</Text>
      </View>
      <View style={{ backgroundColor: '#116D6E', borderRadius: 10, padding: 5}}>
        <Text style={{ color: 'white', fontSize: 30}}>Hello🐼 I'm Bernard</Text>
        <Text style={{ color: 'white', marginTop: 10, fontSize: 17.5}}>
                We are a family of five 
                comprising two girls and three boys, with me standing as 
                the fourth amongst my siblings. I am 23 years of age and standing tall at 1.83 meters, 
                my warm chocolate complexion reflects my rich heritage.
                Soccer is my favorite sport, providing a thrilling escape, The dish i enjoy most is fufu with any of the spicy meat light-soup.
                My free moments are often spent immersed in the world of anime and the art of coding.
                </Text>
                <Text style={{ marginTop: 10, fontSize: 17.5, color: 'white'}}>
                Graduating from Achimota Senior High School in 2020 marked a milestone 
                in my educational journey. Currently, I am in my final 
                year at the esteemed University of Ghana. Although i did not pursue any i course during my college eduction,
                I have proactively engaged in various short courses that have equipped me with a solid foundation in programming languages such as C, Python, JavaScript, and TypeScript.
                Through my self-directed learning and practical experience gained from these courses, 
                </Text>
                <Text style={{ marginTop: 10, fontSize: 17.5, color: 'white'}}>
                I have honed my skills in software development and problem-solving. I have successfully completed projects 
                that involve implementing algorithms, developing web applications, and working with data structures and also I am Currently learning mobile development to build more project and enrich my portfolio.
                My exposure to a diverse range of languages has enabled me to adapt quickly to new technologies and frameworks.
                and I continuously strive to enhance and refine my skills in this innovative field.
                </Text>
                <Text style={{ marginTop: 10, fontSize: 17.5, color: 'white'}}>
                Thank you for taking the time to get to know a bit about me. I am excited 
                about the endless possibilities that lie ahead in my journey as a dedicated developer committed to growth and excellence.
                </Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
