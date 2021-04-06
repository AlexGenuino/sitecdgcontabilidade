import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import { StyleCard} from './styles';
import LogoPNG from '../../assets/CDGLOGO.png';
 
const AnyReactComponent = ({ text }) => <StyleCard><img src={LogoPNG} style={{
  width: 100,
  height: 60,
}}></img></StyleCard>;
 
class SimpleMap extends Component {
 
  render() {
    return (
      
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyAX-YBzDQvsK93sGJrPoom2G3kqNcG_Ni8'}}
          defaultCenter={[-22.93302548753201, -47.27078258952368]}
          defaultZoom={18}
        >
          <AnyReactComponent
            lat={-22.93302548753201}
            lng={-47.27078258952368}
            text="CDG CONTABILIDADE & ASSEOSSRIA"
          />
        </GoogleMapReact>
    );
  }
}
 
export default SimpleMap;