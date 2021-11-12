import * as Realm from "realm-web";

let app;

// Returns the shared instance of the Realm app.
export function getRealmApp() {
  if (app === undefined) {
    // Connect to your MongoDB Realm app
    const REALM_APP_ID = "resume-builder-lghqu";
    app = new Realm.App({ id: REALM_APP_ID });
  }
  return app;
}
