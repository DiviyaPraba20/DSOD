// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'https://devupapi1.dsodentist.com',
  LinkedIn: {
    authUrl: 'https://www.linkedin.com/oauth/v2/authorization',
    response_type: 'code',
    client_id: '77xn8gu9wv8bfj',
    redirect_uri: 'https://devangular1.dsodentist.com/dsodt/auth/linkedin',
    state: '987654321'
  },
  url: 'https://cmsapi1.dsodentist.com/content/contentservice/v1'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
