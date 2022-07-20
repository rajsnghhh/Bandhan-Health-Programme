// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl: window.location.protocol + '//' + window.location.hostname + ':6176/',

  // Local
  // apiUrl: 'http://192.168.153.56:6180/bhp/api/v1/'

  // Development 
  apiUrl: 'http://192.168.149.229:6180/bhp/api/v1/'

  //New Development Server
  // apiUrl: 'http://192.168.149.67:6180/bhp/api/v1/'

  // Test
  // apiUrl: 'http://192.168.149.229:6181/bhp/api/v1/test/'

  //Training
  // apiUrl: 'http://192.168.149.75:6184/bhp/api/v1/training/'

  // Staging
  // apiUrl: 'http://192.168.149.221:6182/bhp/api/v1/staging/'

  // Production
  // apiUrl: 'http://192.168.149.221:6183/bhp/api/v1/prod/'
  // apiUrl: 'http://122.186.245.217:6183/bhp/api/v1/prod/'

  // Soumen Machine
  // apiUrl: 'http://192.168.153.91:6180/bhp/api/v1/'

  // Chayan Machine
  // apiUrl: 'http://localhost:6180/bhp/api/v1/'
};

/*
 * For easier debugging in development mode, you can import the following filel
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
