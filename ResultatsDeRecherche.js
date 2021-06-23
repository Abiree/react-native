import React, { Component } from 'react'
import {
 StyleSheet,
 Image,
 View,
 TouchableHighlight,
 FlatList,
 Text,
} from 'react-native';

type Props = {};
export default class ResultatsDeRecherche extends Component<Props> {
   _extracteurClef = (item, index) => index.toString();
   _rendreItem = ({item, index}) => (
     <ListItem
     item={item}
     index={index}
     onPressItem={this._itemAppuye}
     />
    );
    _itemAppuye = (index) => {
     console.log('Ligne appuyée : '+index);
    };
   render() {
     console.log(this.props.route.params);
     const { listings } = this.props.route.params;
     return (
       <FlatList
       data={listings}
       keyExtractor={this._extracteurClef}
       renderItem={this._rendreItem}
       />
     );
   }
 }
 const styles = StyleSheet.create({
   conteneurTexte: {
     flex: 1
     },
     separateur: {
     height: 1,
     backgroundColor: '#eedded'
     },
     alpha: {
     fontSize: 25,
     fontWeight: 'bold',
     color: '#023e8a'
     },
     nom: {
     fontSize: 25,
     fontWeight: 'bold',
     color: '#0077b6'
     },
     region: {
     fontSize:15,
     color: '#0096c7',
     },
     conteneurLigne: {
     flexDirection: 'row',
     padding: 10
    },
    logo: {
      width: 66,
      height: 58,
    },
});
class ListItem extends React.PureComponent {
   _itemAppuye = () => {
     this.props.onPressItem(this.props.index);
   }
   render() {
     const item = this.props.item;
     return (
       <TouchableHighlight
       onPress={this._itemAppuye}
       underlayColor='#eedddd'>
         <View>
           <View style={styles.conteneurLigne}>
             <View style={[styles.conteneurTexte,{flexDirection:"row"}]}>
                <View style={{ flex: 1}}>
                  <Text style={styles.alpha}>{item.alpha3Code}</Text>
                </View>
                <View style={{ flex: 2}}>
                  <Text style={styles.nom}>{item.name}</Text>
                  <Text style={styles.region}>Region: {item.region}</Text>
                  <Text style={styles.region}>Sous Region: {item.subregion}</Text>
                  <Text style={styles.region}>Capital: {item.capital}</Text>
                  <Text style={styles.region}>Population: {item.population}</Text>
                </View>

             </View>
           </View>
           <View style={styles.separator}/>
         </View>
       </TouchableHighlight>
     );
   }
}
