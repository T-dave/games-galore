import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Game(){
    const LoadingIndicatorView = () => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator color="#002f6c" size="large" />
    </View>
  );
    const { id } = useLocalSearchParams();
    return(
        <SafeAreaView style={{flex:1}}>
            <WebView
            style={styles.container}
            source={{ uri: `cheapshark.com/redirect?dealID=${id}` }}
            renderLoading={LoadingIndicatorView}
        
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
});