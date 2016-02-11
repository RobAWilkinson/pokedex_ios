import { connect } from 'react-redux'
import {
  View,
  Text,
  PickerIOS,
  StyleSheet
} from 'react-native'
import React from 'react'
import * as actions from './actions'


class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      language: ''
    }
  }
  componentDidMount() {
    this.props.dispatch(actions.fetchPokedex())
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Pokemon Number:{this.props.selectedPokemonNum}
        </Text>
        <View>
          <PickerIOS
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({language: lang})}
          >
            <PickerIOS.Item label="Java" value="java" />
            <PickerIOS.Item label="JavaScript" value="js" />
          </PickerIOS>
        <Text>Please choose a pokemon</Text>
        </View>
      </View>
      )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(state => state)(AppContainer);
