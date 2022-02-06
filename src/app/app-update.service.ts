import { HttpClient } from "@angular/common/http";
import { ApplicationRef, Injectable } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { concat, interval } from "rxjs";
import { first } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AppUpdateService {
    constructor(appRef: ApplicationRef, private httpClient: HttpClient, private updates: SwUpdate) {
        // Allow the app to stabilize first, before starting
        // polling for updates with `interval()`.
        const appIsStable$ = appRef.isStable.pipe(first((isStable) => isStable === true));
        const everAMinutes$ = interval(60 * 1000);
        const everyAMinutesOnceAppIsStable$ = concat(appIsStable$, everAMinutes$);

        everyAMinutesOnceAppIsStable$.subscribe(() => {
            console.log("Check new version update!");
            return updates.checkForUpdate();
        });

        updates.available.subscribe((event) => {
            if (true) {
                updates.activateUpdate().then(() => {
                    console.log('current version is', event.current);
                    console.log('available version is', event.available);
                    document.location.reload();
                });
            }
        });
    }
}
