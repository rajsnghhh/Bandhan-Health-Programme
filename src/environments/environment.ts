// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl: window.location.protocol + '//' + window.location.hostname + ':6176/',

  // apiUrl: 'http://192.168.153.56:6181/bhp/api/v1/'
   apiUrl: 'http://192.168.149.221:6182/bhp/api/v1/staging/'

  // Production server
  // apiUrl: 'http://192.168.149.221:6183/bhp/api/v1/prod/'
  // apiUrl: 'http://122.186.245.217:6183/bhp/api/v1/prod/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
