import React from 'react';
import { PermissionsAndroid } from 'react-native';

const requestFineLocation = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'App location',
                'message': 'Visilitator needs access to your location ' +
                'so you can use the map.'
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use location");
            return true

        } else {
            console.log("Location permission denied")
            return false
        }
    } catch (err) {
        console.warn(err);
        return err
    }
};

export { requestFineLocation };
