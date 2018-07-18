import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';
import { I18n } from '../../../language/i18n';
class ListFun extends Component {
	render() {
		return (
			<TouchableHighlight underlayColor={'transparent'} onPress={this.props.onPress}>
				<View style={styles.fun}>
					<Text style={styles.fun_text}>{this.props.fun_name}</Text>
					<Text style={styles.color_bbb}>></Text>
				</View>
			</TouchableHighlight>
		);
	}
}

class SysSet extends Component {
	constructor(props) {
		super(props);
		this.navigate = this.props.navigation.navigate;
	}

	static navigationOptions = {
		headerTitle: '系统设置'
	};

	render() {
		return (
			<View style={styles.container}>
				<ListFun
					fun_name="手势密码"
					onPress={() => {
						this.navigate('SetGesturePassword');
					}}
				/>
				<ListFun
					fun_name="web3设置"
					onPress={() => {
						alert('web3设置');
					}}
				/>
				<ListFun
					fun_name="语言设置"
					onPress={() => {
						this.navigate('SysLanguage');
					}}
				/>
			</View>
		);
	}
}

export default withNavigation(SysSet);

const styles = StyleSheet.create({
	color_bbb: {
		color: '#bbb'
	},
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: '#fff'
	},
	walletAvatar: {
		width: 60,
		height: 60
	},
	fun: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: '#e6e0df'
	},
	fun_text: {
		color: '#000'
	},
	buttonStyle: {
		backgroundColor: '#bbb',
		height: 45,
		borderRadius: 50,
		marginTop: 30
	},
	textInput: {
		borderBottomWidth: 1,
		borderColor: '#e6e6e6',
		height: 45,
		padding: 5
	}
});
